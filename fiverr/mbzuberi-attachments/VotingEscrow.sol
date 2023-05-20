// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Ownable} from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "../lib/openzeppelin-contracts/contracts/security/ReentrancyGuard.sol";
import {SafeERC20, IERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title Voting Escrow
 * @author Curve Finance
 * @notice Votes have a weight depending on time, so that users are
           committed to the future of (whatever they are voting for)
 * @dev Vote weight decays linearly over time. Lock time cannot be
        more than `MAXTIME` (1 year)

   Voting escrow to have time-weighted votes
   Votes have a weight depending on time, so that users are committed
   to the future of (whatever they are voting for).
   The weight in this implementation is linear, and lock cannot be more than maxtime:
   w ^
   1 +        /
     |      /
     |    /
     |  /
     |/
   0 +--------+------> time
         maxtime (1 year?)
 */
contract VotingEscrow is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    struct Point {
        int128 bias;
        int128 slope; // - dweight / dt
        uint256 ts;
        uint256 blk; // block
    }
    /**
     * We cannot really do block numbers per se b/c slope is per time, not per block
     * and per block could be fairly bad b/c Ethereum changes blocktimes.
     * What we can do is to extrapolate ***At functions
     */

    struct LockedBalance {
        int128 amount;
        uint256 end;
    }

    enum DepositType {
        DEPOSIT_FOR_TYPE,
        CREATE_LOCK_TYPE,
        INCREASE_LOCK_AMOUNT,
        INCREASE_UNLOCK_TIME
    }

    event Deposit(
        address indexed provider,
        uint256 value,
        uint256 indexed locktime,
        DepositType depositType,
        uint256 ts
    );
    event Withdraw(address indexed provider, uint256 value, uint256 ts);
    event Supply(uint256 prevSupply, uint256 supply);

    uint256 public constant WEEK = 1 weeks; // all future times are rounded by week
    uint256 public constant MINTIME = 2 weeks;
    uint256 public constant MAXTIME = 365 days;
    // solhint-disable-next-line const-name-snakecase
    int128 public constant iMAXTIME = 365 days;
    uint256 public constant MULTIPLIER = 1 ether;

    address public immutable token;
    uint256 public supply;

    mapping(address => LockedBalance) public locked;

    uint256 public epoch;
    mapping(uint256 => Point) public pointHistory; // epoch -> unsigned point
    mapping(address => mapping(uint256 => Point)) public userPointHistory; // user -> Point[user_epoch]
    mapping(address => uint256) public userPointEpoch;
    mapping(uint256 => int128) public slopeChanges; // time -> signed slope change

    // Aragon's view methods for composability
    address public controller;
    bool public transfersEnabled;

    // solhint-disable-next-line const-name-snakecase
    string public constant name = "Vote-escrowed GTX";
    // solhint-disable-next-line const-name-snakecase
    string public constant symbol = "veGTX";
    // solhint-disable-next-line const-name-snakecase
    uint8 public constant decimals = 18;

    /**
     * @notice Contract constructor
     * @param tokenAddr GTX token address
     */
    constructor(address tokenAddr) {
        token = tokenAddr;
        pointHistory[0].blk = block.number;
        pointHistory[0].ts = block.timestamp;
        controller = msg.sender;
        transfersEnabled = true;
    }

    /**
     * @notice Get the most recently recorded rate of voting power decrease for `addr`
     * @param addr Address of the user wallet
     * @return Value of the slope
     */
    function getLastUserSlope(address addr) external view returns (int128) {
        uint256 uEpoch = userPointEpoch[addr];
        return userPointHistory[addr][uEpoch].slope;
    }

    /**
     * @notice Get the timestamp for checkpoint `idx` for `addr`
     * @param addr User wallet address
     * @param idx User epoch number
     * @return Epoch time of the checkpoint
     */
    function userPointHistoryTs(
        address addr,
        uint256 idx
    ) external view returns (uint256) {
        return userPointHistory[addr][idx].ts;
    }

    /**
     * @notice Get the timestamp when `addr`'s lock finishes
     * @param addr User wallet
     * @return Epoch time of the lock end
     */
    function lockedEnd(address addr) external view returns (uint256) {
        return locked[addr].end;
    }

    /**
     * @notice Record global and per-user data to checkpoint
     * @param addr User's wallet address. No user checkpoint if 0x0
     * @param oldLocked Previous locked amount / end lock time for the user
     * @param newLocked New locked amount / end lock time for the user
     */
    function _checkpoint(
        address addr,
        LockedBalance memory oldLocked,
        LockedBalance memory newLocked
    ) internal {
        Point memory uOld;
        Point memory uNew;
        int128 olddSlope = 0;
        int128 newdSlope = 0;
        uint256 _epoch = epoch;

        if (addr != address(0x0)) {
            // Calculate slopes and biases
            // Kept at zero when they have to
            if (oldLocked.end > block.timestamp && oldLocked.amount > 0) {
                uOld.slope = oldLocked.amount / iMAXTIME;
                uOld.bias =
                    uOld.slope *
                    int128(int(oldLocked.end - block.timestamp));
            }
            if (newLocked.end > block.timestamp && newLocked.amount > 0) {
                uNew.slope = newLocked.amount / iMAXTIME;
                uNew.bias =
                    uNew.slope *
                    int128(int(newLocked.end - block.timestamp));
            }

            // Read values of scheduled changes in the slope
            // oldLocked.end can be in the past and in the future
            // newLocked.end can ONLY by in the FUTURE unless everything expired: than zeros
            olddSlope = slopeChanges[oldLocked.end];
            if (newLocked.end != 0) {
                if (newLocked.end == oldLocked.end) {
                    newdSlope = olddSlope;
                } else {
                    newdSlope = slopeChanges[newLocked.end];
                }
            }
        }

        Point memory lastPoint = Point({
            bias: 0,
            slope: 0,
            ts: block.timestamp,
            blk: block.number
        });
        if (_epoch > 0) {
            lastPoint = pointHistory[_epoch];
        }
        uint256 lastCheckpoint = lastPoint.ts;
        // initial_last_point is used for extrapolation to calculate block number
        // (approximately, for *At methods) and save them
        // as we cannot figure that out exactly from inside the contract
        Point memory initialLastPoint = lastPoint;
        uint256 blockSlope = 0; // dblock/dt
        if (block.timestamp > lastPoint.ts) {
            blockSlope =
                ((MULTIPLIER) * (block.number - lastPoint.blk)) /
                (block.timestamp - lastPoint.ts);
        }
        // If last point is already recorded in this block, slope=0
        // But that's ok b/c we know the block in such case

        // Go over weeks to fill history and calculate what the current point is
        uint256 tI = (lastCheckpoint / WEEK) * WEEK;
        for (uint256 i = 0; i < 255; i++) {
            // Hopefully it won't happen that this won't get used in 5 years!
            // If it does, users will be able to withdraw but vote weight will be broken
            tI += WEEK;
            int128 dSlope = 0;
            if (tI > block.timestamp) {
                tI = block.timestamp;
            } else {
                dSlope = slopeChanges[tI];
            }
            lastPoint.bias -=
                lastPoint.slope *
                int128(int(tI - lastCheckpoint));
            lastPoint.slope += dSlope;
            // This can happen
            if (lastPoint.bias < 0) {
                lastPoint.bias = 0;
            }
            // This cannot happen - just in case
            if (lastPoint.slope < 0) {
                lastPoint.slope = 0;
            }
            lastCheckpoint = tI;
            lastPoint.ts = tI;
            lastPoint.blk =
                initialLastPoint.blk +
                (blockSlope * (tI - initialLastPoint.ts)) /
                MULTIPLIER;
            _epoch += 1;
            if (tI == block.timestamp) {
                lastPoint.blk = block.number;
                break;
            } else {
                pointHistory[_epoch] = lastPoint;
            }
        }

        epoch = _epoch;
        // Now point_history is filled until t=now

        if (addr != address(0x0)) {
            // If last point was in this block, the slope change has been applied already
            // But in such case we have 0 slope(s)
            lastPoint.slope += (uNew.slope - uOld.slope);
            lastPoint.bias += (uNew.bias - uOld.bias);
            if (lastPoint.slope < 0) {
                lastPoint.slope = 0;
            }
            if (lastPoint.bias < 0) {
                lastPoint.bias = 0;
            }
        }

        // Record the changed point into history
        pointHistory[_epoch] = lastPoint;

        if (addr != address(0x0)) {
            // Schedule the slope changes (slope is going down)
            // We subtract new_user_slope from [newlocked_.end]
            // and add old_user_slope to [oldLocked.end]
            if (oldLocked.end > block.timestamp) {
                // old_dslope was <something> - u_old.slope, so we cancel that
                olddSlope += uOld.slope;
                if (newLocked.end == oldLocked.end) {
                    newdSlope -= uNew.slope; // It was a new deposit, not extension
                }
                slopeChanges[oldLocked.end] = olddSlope;
            }

            if (newLocked.end > block.timestamp) {
                if (newLocked.end > block.timestamp) {
                    newdSlope -= uNew.slope; // old slope disappeared at this point
                    slopeChanges[newLocked.end] = newdSlope;
                }
                // else: we recorded it already in old_dslope
            }

            // Now handle user history
            uint256 userEpoch = userPointEpoch[addr] + 1;

            address addr_ = addr; // To avoid stack too deep
            userPointEpoch[addr_] = userEpoch;
            uNew.ts = block.timestamp;
            uNew.blk = block.number;
            userPointHistory[addr_][userEpoch] = uNew;
        }
    }

    /**
     * @notice Deposit and lock tokens for a user
     * @param addr User's wallet address
     * @param value Amount to deposit
     * @param unlockTime New time when to unlock the tokens, or 0 if unchanged
     * @param lockedBalance Previous locked amount / timestamp
     * @param depositType The type of deposit
     */
    function _depositFor(
        address addr,
        uint256 value,
        uint256 unlockTime,
        LockedBalance memory lockedBalance,
        DepositType depositType
    ) internal {
        LockedBalance memory locked_ = lockedBalance;
        uint256 supplyBefore = supply;

        supply = supplyBefore + value;
        LockedBalance memory oldLocked = locked_;
        // Adding to existing lock, or if a lock is expired - creating a new one
        locked_.amount += int128(int(value));
        if (unlockTime != 0) {
            locked_.end = unlockTime;
        }
        locked[addr] = locked_;

        // Possibilities:
        // Both oldlocked_.end could be current or expired (>/< block.timestamp)
        // value == 0 (extend lock) or value > 0 (add to lock or extend lock)
        // locked_.end > block.timestamp (always)
        _checkpoint(addr, oldLocked, locked_);

        if (value != 0) {
            IERC20(token).safeTransferFrom(addr, address(this), value);
        }

        emit Deposit(addr, value, locked_.end, depositType, block.timestamp);
        emit Supply(supplyBefore, supplyBefore + value);
    }

    /**
     * @notice Record global data to checkpoint
     */
    function checkpoint() external {
        _checkpoint(address(0), LockedBalance(0, 0), LockedBalance(0, 0));
    }

    /**
     * @notice Deposit `value` tokens for `addr` and add to the lock
     * @dev Anyone (even a smart contract) can deposit for someone else, but
            cannot extend their locktime and deposit for a brand new user
     * @param addr User's wallet address
     * @param value Amount to add to user's lock
     */
    function depositFor(address addr, uint256 value) external nonReentrant {
        LockedBalance memory locked_ = locked[addr];

        require(value > 0); // dev: need non-zero value
        require(locked_.amount > 0, "No existing lock found"); // TODO: Replace with Error_
        require(
            locked_.end > block.timestamp,
            "Cannot add to expired lock. Withdraw"
        );

        _depositFor(addr, value, 0, locked[addr], DepositType.DEPOSIT_FOR_TYPE);
    }

    /**
       @notice Deposit `value` tokens for `msg.sender` and lock until `unlockTime`
       @param value Amount to deposit
       @param unlockTime Epoch time when tokens unlock, rounded down to whole weeks
     */
    function createLock(
        uint256 value,
        uint256 unlockTime
    ) external nonReentrant {
        uint256 unlockTime_ = (unlockTime / WEEK) * WEEK; // Locktime is rounded down to weeks
        LockedBalance memory locked_ = locked[msg.sender];

        require(value > 0); // dev: need non-zero value
        require(locked_.amount == 0, "Withdraw old tokens first");
        require(
            unlockTime_ >= block.timestamp + MINTIME,
            "Voting lock must be at least 2 weeks"
        );
        require(
            unlockTime_ <= block.timestamp + MAXTIME,
            "Voting lock can be 1 year max"
        );

        _depositFor(
            msg.sender,
            value,
            unlockTime_,
            locked_,
            DepositType.CREATE_LOCK_TYPE
        );
    }

    /**
     * @notice Deposit `value` additional tokens for `msg.sender`
               without modifying the unlock time
     * @param value Amount to add to user's lock
     */
    function increaseAmount(uint256 value) external nonReentrant {
        LockedBalance memory locked_ = locked[msg.sender];

        require(value > 0); // dev: need non-zero value
        require(locked_.amount > 0, "No existing lock found");
        require(
            locked_.end > block.timestamp,
            "Cannot add to expired lock. Withdraw"
        );

        _depositFor(
            msg.sender,
            value,
            0,
            locked_,
            DepositType.INCREASE_LOCK_AMOUNT
        );
    }

    /**
     * @notice Extend the unlock time for `msg.sender` to `unlockTime`
     * @param unlockTime New epoch time for unlocking
     */
    function increaseUnlockTime(uint256 unlockTime) external nonReentrant {
        LockedBalance memory locked_ = locked[msg.sender];
        uint256 unlockTime_ = (unlockTime / WEEK) * WEEK;

        require(locked_.end > block.timestamp, "Lock expired");
        require(locked_.amount > 0, "Nothing is locked");
        require(unlockTime_ > locked_.end, "Can only increase unlock time");
        require(
            unlockTime_ <= block.timestamp + MAXTIME,
            "Voting lock can be 1 year max"
        );

        _depositFor(
            msg.sender,
            0,
            unlockTime_,
            locked_,
            DepositType.INCREASE_UNLOCK_TIME
        );
    }

    /**
     * @notice Withdraw all tokens for `msg.sender`
     * @dev Only possible if the lock has expired
     */
    function withdraw() external nonReentrant {
        LockedBalance memory locked_ = locked[msg.sender];
        require(block.timestamp >= locked_.end, "The lock didn't expire");
        uint256 value = uint256(int(locked_.amount));

        locked[msg.sender] = LockedBalance(0, 0);
        uint256 supplyBefore = supply;
        supply = supplyBefore - value;

        // oldLocked can have either expired <= timestamp or zero end
        // locked_ has only 0 end
        // Both can have >= 0 amount
        _checkpoint(msg.sender, locked_, LockedBalance(0, 0));

        IERC20(token).safeTransfer(msg.sender, value);

        emit Withdraw(msg.sender, value, block.timestamp);
        emit Supply(supply, supply - value);
    }

    // The following ERC20/minime-compatible methods are not real balanceOf and supply!
    // They measure the weights for the purpose of voting, so they don't represent
    // real coins.

    /**
     * @notice Binary search to estimate timestamp for block number
     * @param _block Block to find
     * @param maxEpoch Don't go beyond this epoch
     * @return Approximate timestamp for block
     */
    function _findBlockEpoch(
        uint256 _block,
        uint256 maxEpoch
    ) internal view returns (uint256) {
        // Binary search
        uint256 min = 0;
        uint256 max = maxEpoch;
        // Will be always enough for 128-bit numbers
        for (uint256 i = 0; i < 128; i++) {
            if (min >= max) {
                break;
            }
            uint256 mid = (min + max + 1) / 2;
            if (pointHistory[mid].blk <= _block) {
                min = mid;
            } else {
                max = mid - 1;
            }
        }
        return min;
    }

    /**
     * @notice Get the current voting power for `msg.sender`
     * @dev Adheres to the ERC20 `balanceOf` interface for Aragon compatibility
     * @param addr User wallet address
     * @param _t Epoch time to return voting power at
     * @return User voting power
     */
    function _balanceOf(
        address addr,
        uint256 _t
    ) internal view returns (uint256) {
        uint256 epoch_ = userPointEpoch[addr];
        if (epoch_ == 0) {
            return 0;
        } else {
            Point memory lastPoint = userPointHistory[addr][epoch_];
            lastPoint.bias -=
                lastPoint.slope *
                int128(int(_t) - int(lastPoint.ts));
            if (lastPoint.bias < 0) {
                lastPoint.bias = 0;
            }
            return uint256(int(lastPoint.bias));
        }
    }

    function balanceOfAtT(
        address addr,
        uint256 _t
    ) external view returns (uint256) {
        return _balanceOf(addr, _t);
    }

    function balanceOf(address addr) external view returns (uint256) {
        return _balanceOf(addr, block.timestamp);
    }

    /**
     * @notice Measure voting power of `addr` at block height `_block`
     * @dev Adheres to MiniMe `balanceOfAt` interface: https://github.com/Giveth/minime
     * @param addr User's wallet address
     * @param _block Block to calculate the voting power at
     * @return Voting power at the given block number
     */
    function balanceOfAt(
        address addr,
        uint256 _block
    ) external view returns (uint256) {
        // Copying and pasting totalSupply code because Vyper cannot pass by
        // reference yet
        require(_block <= block.number);

        // Binary search
        uint256 min = 0;
        uint256 max = userPointEpoch[addr];
        for (uint256 i = 0; i < 128; i++) {
            // Will be always enough for 128-bit numbers
            if (min >= max) {
                break;
            }
            uint256 mid = (min + max + 1) / 2;
            if (userPointHistory[addr][mid].blk <= _block) {
                min = mid;
            } else {
                max = mid - 1;
            }
        }

        Point memory uPoint = userPointHistory[addr][min];

        uint256 maxEpoch = epoch;
        uint256 _epoch = _findBlockEpoch(_block, maxEpoch);
        Point memory point0 = pointHistory[_epoch];
        uint256 dBlock = 0;
        uint256 dT = 0;
        if (_epoch < maxEpoch) {
            Point memory point1 = pointHistory[_epoch + 1];
            dBlock = point1.blk - point0.blk;
            dT = point1.ts - point0.ts;
        } else {
            dBlock = block.number - point0.blk;
            dT = block.timestamp - point0.ts;
        }
        uint256 blockTime = point0.ts;
        if (dBlock != 0) {
            blockTime += (dT * (_block - point0.blk)) / dBlock;
        }

        uPoint.bias -= uPoint.slope * int128(int(blockTime - uPoint.ts));
        if (uPoint.bias >= 0) {
            return uint256(uint128(uPoint.bias));
        } else {
            return 0;
        }
    }

    /**
     * @notice Calculate total voting power at some point in the past
     * @param point The point (bias/slope) to start search from
     * @param t Time to calculate the total voting power at
     * @return Total voting power at that time
     */
    function _supplyAt(
        Point memory point,
        uint256 t
    ) internal view returns (uint256) {
        Point memory lastPoint = point;
        uint256 tI = (lastPoint.ts / WEEK) * WEEK;
        for (uint256 i = 0; i < 255; i++) {
            tI += WEEK;
            int128 dSlope = 0;
            if (tI > t) {
                tI = t;
            } else {
                dSlope = slopeChanges[tI];
            }
            lastPoint.bias -= lastPoint.slope * int128(int(tI - lastPoint.ts));
            if (tI == t) {
                break;
            }
            lastPoint.slope += dSlope;
            lastPoint.ts = tI;
        }

        if (lastPoint.bias < 0) {
            lastPoint.bias = 0;
        }
        return uint256(int(lastPoint.bias));
    }

    /**
     * @notice Calculate total voting power
     * @dev Adheres to the ERC20 `totalSupply` interface for Aragon compatibility
     * @param t Time to calculate the total voting power at
     * @return Total voting power
     */
    function totalSupply(uint256 t) external view returns (uint256) {
        uint256 epoch_ = epoch;
        Point memory lastPoint = pointHistory[epoch_];
        return _supplyAt(lastPoint, t);
    }

    /**
     * @notice Calculate total voting power at some point in the past
     * @param _block Block number to calculate the total voting power at
     * @return Total voting power at `_block`
     */
    function totalSupplyAt(uint256 _block) external view returns (uint256) {
        require(_block <= block.number);
        uint256 epoch_ = epoch;
        uint256 targetEpoch = _findBlockEpoch(_block, epoch_);

        Point memory point = pointHistory[targetEpoch];
        uint256 dt = 0;
        if (targetEpoch < epoch) {
            Point memory pointNext = pointHistory[targetEpoch + 1];
            if (point.blk != pointNext.blk) {
                dt =
                    ((_block - point.blk) * (pointNext.ts - point.ts)) /
                    (pointNext.blk - point.blk);
            }
        } else {
            if (point.blk != block.number) {
                dt =
                    ((_block - point.blk) * (block.timestamp - point.ts)) /
                    (block.number - point.blk);
            }
        }
        // Now dt contains info on how far are we beyond point

        return _supplyAt(point, point.ts + dt);
    }

    /**
     * @dev Dummy methods required for Aragon compatibility
     * @param _newController New controller address
     */
    function changeController(address _newController) external {
        require(msg.sender == controller);
        controller = _newController;
    }
}
