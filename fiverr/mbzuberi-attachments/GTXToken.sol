// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ERC20} from "../lib/solmate/src/tokens/ERC20.sol";
import {Ownable} from "../lib/GTXzeppelin-contracts/contracts/access/Ownable.sol";
import {IERC20} from "../lib/GTXzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

/**
 * @title GTX Token (GTX)
 * @notice An ERC-20 with minting implemented as described in the GTX whitepaper.
 * @author GTXtoken
 */
contract GTXToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 10_000_000_000 * 10 ** 18; // 10 billion

    IERC20 public immutable OLDCrvToken;
    uint256 public conversionDeadline; // Deadline for converting OLDCrv to GTX

    event ConversionDeadlineUpdated(uint256 newDeadline);

    error Error_MaxSupplyExceeded();
    error Error_ConversionDeadlinePassed();
    error Error_OLDCrvBurnFailed();

    constructor(
        address _OLDCrvAddr,
        uint256 _conversionDeadline
    ) ERC20("GTXToken", "GTX", 18) {
        OLDCrvToken = IERC20(_OLDCrvAddr);
        conversionDeadline = _conversionDeadline;
        emit ConversionDeadlineUpdated(_conversionDeadline);
    }

    /**
     * @notice Sets a new conversion deadline.
     * @param newDeadline The new conversion deadline timestamp.
     */
    function setConversionDeadline(uint256 newDeadline) external onlyOwner {
        conversionDeadline = newDeadline;
        emit ConversionDeadlineUpdated(newDeadline);
    }

    /**
     * @notice Mints new tokens and sends them to the specified account.
     * @param to The account to receive the minted tokens.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) external onlyOwner {
        if (totalSupply + amount > MAX_SUPPLY) revert Error_MaxSupplyExceeded();
        _mint(to, amount);
    }

    /**
     * @notice Mints GTX tokens by burning OLDCrv tokens at a 1 OLDCrv : 10 GTX ratio.
     * @param amountOLDCrv The amount of OLDCrv tokens to burn.
     */
    function mintWithOLDCrv(uint256 amountOLDCrv) external {
        if (block.timestamp > conversionDeadline)
            revert Error_ConversionDeadlinePassed();

        uint256 GTXAmount = amountOLDCrv * 10;
        if (totalSupply + GTXAmount > MAX_SUPPLY)
            revert Error_MaxSupplyExceeded();

        if (!OLDCrvToken.transferFrom(msg.sender, address(this), amountOLDCrv))
            revert Error_OLDCrvBurnFailed();
        _mint(msg.sender, GTXAmount);
    }
}
