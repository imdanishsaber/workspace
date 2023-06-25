// Any Random token for Smart Contract 
const TOKENADDRESS = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const TOKENABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "typeAndVersion", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }]

// GTX Smart Contract
const GTXADDRESS = "0x80f4589423b390b1ecde5442e41bf1e161f9d76c";
const GTXABI = [{ "inputs": [{ "internalType": "address", "name": "_OLDCrvAddr", "type": "address" }, { "internalType": "uint256", "name": "_conversionDeadline", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "Error_ConversionDeadlinePassed", "type": "error" }, { "inputs": [], "name": "Error_MaxSupplyExceeded", "type": "error" }, { "inputs": [], "name": "Error_OLDCrvBurnFailed", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newDeadline", "type": "uint256" }], "name": "ConversionDeadlineUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_SUPPLY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "OLDCrvToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "conversionDeadline", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOLDCrv", "type": "uint256" }], "name": "mintWithOLDCrv", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newDeadline", "type": "uint256" }], "name": "setConversionDeadline", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

// Locking Smart Contract
const LOCKERADDRESS = "0x92fb395bd81e465bfa7989498244d99710fa83a5";
const LOCKERABI = [{ "inputs": [{ "internalType": "address", "name": "tokenAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "locktime", "type": "uint256" }, { "indexed": false, "internalType": "enum VotingEscrow.DepositType", "name": "depositType", "type": "uint8" }, { "indexed": false, "internalType": "uint256", "name": "ts", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "prevSupply", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "supply", "type": "uint256" }], "name": "Supply", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ts", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "MAXTIME", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINTIME", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MULTIPLIER", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WEEK", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "_block", "type": "uint256" }], "name": "balanceOfAt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "_t", "type": "uint256" }], "name": "balanceOfAtT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newController", "type": "address" }], "name": "changeController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "checkpoint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "controller", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "unlockTime", "type": "uint256" }], "name": "createLock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "createLock1Hour", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "depositFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "epoch", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getLastUserSlope", "outputs": [{ "internalType": "int128", "name": "", "type": "int128" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "iMAXTIME", "outputs": [{ "internalType": "int128", "name": "", "type": "int128" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "increaseAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "unlockTime", "type": "uint256" }], "name": "increaseUnlockTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "locked", "outputs": [{ "internalType": "int128", "name": "amount", "type": "int128" }, { "internalType": "uint256", "name": "end", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "lockedEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pointHistory", "outputs": [{ "internalType": "int128", "name": "bias", "type": "int128" }, { "internalType": "int128", "name": "slope", "type": "int128" }, { "internalType": "uint256", "name": "ts", "type": "uint256" }, { "internalType": "uint256", "name": "blk", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "slopeChanges", "outputs": [{ "internalType": "int128", "name": "", "type": "int128" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "supply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "t", "type": "uint256" }], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_block", "type": "uint256" }], "name": "totalSupplyAt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "transfersEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userPointEpoch", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userPointHistory", "outputs": [{ "internalType": "int128", "name": "bias", "type": "int128" }, { "internalType": "int128", "name": "slope", "type": "int128" }, { "internalType": "uint256", "name": "ts", "type": "uint256" }, { "internalType": "uint256", "name": "blk", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "idx", "type": "uint256" }], "name": "userPointHistoryTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

let web3Obj = null;
let walletAddress = null;

let GTXBalance = null;
let veGTXBalance = null;

let GTXINSTANCE = null;
let LOCKERINSTANCE = null;
let TOKENINSTANCE = null;

document.getElementById('balance').style.display = 'flex';
document.getElementById('mint').style.display = 'none';
document.getElementById('locking').style.display = 'none';

const onTabClick = (name) => {
    document.getElementById('balance').style.display = 'none';
    document.getElementById('mint').style.display = 'none';
    document.getElementById('locking').style.display = 'none';
    document.getElementById('balanceTab').classList.remove("active");
    document.getElementById('mintTab').classList.remove("active");
    document.getElementById('lockingTab').classList.remove("active");
    document.getElementById(name).style.display = 'flex';
    document.getElementById('main-header').innerHTML = name.toUpperCase();
    document.getElementById(name + 'Tab').classList.add("active");
    readValues()
}

const onConnect = () => {
    if (window.ethereum) {
        window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(handleAccountsChanged)
            .catch((error) => {
                if (error.code === 4001) {
                    console.log('Please connect to MetaMask.');
                    notify("Please connect to MetaMask.")
                } else {
                    console.error(error);
                }
            });
    } else {
        notify("Metamask wallet is not installed.")
    }
}

const handleAccountsChanged = (accounts) => {
    console.log('accounts:', accounts);
    walletAddress = accounts[0]
    web3Obj = new Web3(window.ethereum);
    GTXINSTANCE = new web3Obj.eth.Contract(
        GTXABI,
        GTXADDRESS
    );
    LOCKERINSTANCE = new web3Obj.eth.Contract(
        LOCKERABI,
        LOCKERADDRESS
    );
    TOKENINSTANCE = new web3Obj.eth.Contract(
        TOKENABI,
        TOKENADDRESS
    );
    readValues()
    document.getElementById('connectButton').innerHTML = addrTruncation(walletAddress);
    notify("Wallet Connected Successfully!")
}

const readValues = () => {
    Promise.all([
        TOKENINSTANCE.methods.balanceOf(walletAddress).call(),
        TOKENINSTANCE.methods.allowance(walletAddress, GTXADDRESS).call(),
        GTXINSTANCE.methods.balanceOf(walletAddress).call(),
        GTXINSTANCE.methods.allowance(walletAddress, LOCKERADDRESS).call(),
        LOCKERINSTANCE.methods.balanceOf(walletAddress).call(),
        LOCKERINSTANCE.methods.locked(walletAddress).call(),
    ]).then(
        ([
            TOKENBalance,
            TOKENAllowance,
            GTXBalance,
            GTXAllowance,
            veGTXBalance,
            locked,
        ]) => {
            // console.log('locked:',locked);
            console.log("TOKENBalance:", TOKENBalance);
            console.log("TOKENAllowance:", TOKENAllowance, !!Number(TOKENAllowance));
            console.log("GTXBalance:", GTXBalance);
            console.log("GTXAllowance:", GTXAllowance, !!Number(GTXAllowance));
            console.log("veGTXBalance:", Number(veGTXBalance));
            console.log("locked:", locked);
            TOKENBalance = TOKENBalance
            TOKENAllowance = TOKENAllowance
            GTXBalance = GTXBalance
            GTXAllowance = GTXAllowance
            veGTXBalance = veGTXBalance
            locked = locked
            document.getElementById('TOKENBalance').innerHTML = humanized(TOKENBalance, 3);
            document.getElementById('GTXBalance').innerHTML = humanized(GTXBalance, 3);
            document.getElementById('GTXBalance2').innerHTML = humanized(GTXBalance, 3);
            document.getElementById('veGTXBalance').innerHTML = humanized(veGTXBalance, 3);
            document.getElementById('lockedTime').innerHTML = timeConverter(Number(locked.end));
            document.getElementById('lockedAmount').innerHTML = humanized(Number(locked.amount), 3);
            if (Number(locked.amount)) {
                document.getElementById('lockDiv').style.display = 'none';
            }
            if (!Number(locked.end) || Number(locked.end) > Math.floor(new Date().getTime() / 1000)) {
                document.getElementById('withdrawButton').disabled = true;
                var selectElement = document.getElementById('incLockTime');
                for (var i = 0; i < selectElement.options.length; i++) {
                    var option = selectElement.options[i];
                    var optionValue = calculateEpochTimestamp(option.value);
                    if (optionValue <= Number(locked.end)) {
                        option.disabled = true;
                    }
                }
            }
            else {
                document.getElementById('withdrawButton').disabled = false;
            }
            if (Number(TOKENAllowance)) {
                document.getElementById('tokenApproveButton').disabled = true;
                document.getElementById('mintButton').disabled = false;
                document.getElementById('tokenApproveButton').innerHTML = 'Already Approved: ' + humanized(TOKENAllowance, 3);
            } else {
                document.getElementById('tokenApproveButton').disabled = false;
                document.getElementById('mintButton').disabled = true;
            }
            if (Number(GTXAllowance)) {
                document.getElementById('GTXApproveButton').disabled = true;
                document.getElementById('lockButton').disabled = false;
                document.getElementById('incLockAmountButton').disabled = false;
                document.getElementById('incLockTimeButton').disabled = false;
                document.getElementById('GTXApproveButton').innerHTML = 'Already Approved: ' + humanized(GTXAllowance, 3);
            }
            else {
                document.getElementById('GTXApproveButton').disabled = false;
                document.getElementById('lockButton').disabled = true;
                document.getElementById('incLockAmountButton').disabled = true;
                document.getElementById('incLockTimeButton').disabled = true;
            }
        }
    );
}

const onTokenApprove = () => {
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    }
    TOKENINSTANCE.methods.approve(GTXADDRESS, "1000000000000000000000000000")
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            document.getElementById('tokenApproveButton').disabled = true;
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            document.getElementById('tokenApproveButton').disabled = true;
            document.getElementById('mintButton').disabled = false;
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected")
            document.getElementById('tokenApproveButton').disabled = false;
        });
}

const onMint = () => {
    let tokenAmount = document.getElementById('tokenAmount').value;
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    } else if (!Number(tokenAmount)) {
        notify("Enter minting Amount")
        return;
    }
    let weiTokenAmount = web3Obj.utils.toWei(tokenAmount.toString(), "ether");
    console.log('weiTokenAmount:', weiTokenAmount);
    GTXINSTANCE.methods.mintWithOLDCrv(weiTokenAmount)
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected")
        });
}

const onGTXApprove = () => {
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    }
    GTXINSTANCE.methods.approve(LOCKERADDRESS, "1000000000000000000000000000")
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected")
        });
}

const onLock = () => {
    let amount = document.getElementById('lockAmount').value;
    let timeText = document.getElementById('lockTime').value;
    let time = calculateEpochTimestamp(timeText);
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    } else if (!Number(amount)) {
        notify("Enter locking Amount")
        return;
    } else if (!Number(time)) {
        notify("Select locking period")
        return;
    }
    let weiAmount = web3Obj.utils.toWei(amount.toString(), "ether");
    console.log('weiAmount:', weiAmount);
    console.log('time:', time);
    LOCKERINSTANCE.methods.createLock(weiAmount, time)
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected")
        });
}

const onIncLockAmount = () => {
    let amount = document.getElementById('incLockAmount').value;
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    } else if (!Number(amount)) {
        notify("Enter locking Amount")
        return;
    }

    let weiAmount = web3Obj.utils.toWei(amount.toString(), "ether");
    console.log('weiAmount:', weiAmount);
    LOCKERINSTANCE.methods.increaseAmount(weiAmount)
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected")
        });
}

const onIncLockTime = () => {
    let timeText = document.getElementById('incLockTime').value;
    let time = calculateEpochTimestamp(timeText);
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    } else if (!Number(time)) {
        notify("Select locking period")
        return;
    }

    console.log('time:', time);
    LOCKERINSTANCE.methods.increaseUnlockTime(time)
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected")
        });
}

const onWithdraw = () => {
    if (!walletAddress) {
        notify("Connect your wallet first")
        return;
    }
    LOCKERINSTANCE.methods.withdraw()
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', (receipt) => {
            readValues();
            console.log("Receipt: ", receipt)
            notify("Transaction completed successfully")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
        });
}

const timeConverter = (UNIX_timestamp) => {
    if (Number(UNIX_timestamp)) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    } else return 'No lock time'
}

const calculateEpochTimestamp = (duration) => {
    const now = Math.floor(Date.now() / 1000); // Current epoch timestamp in seconds
    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInWeek = 7 * secondsInDay;
    const secondsInMonth = 30 * secondsInDay;
    const secondsInYear = 365 * secondsInDay;

    let durationInSeconds;

    if (duration.endsWith('Week')) {
        const weeks = parseInt(duration);
        durationInSeconds = weeks * secondsInWeek;
    } else if (duration.endsWith('Month')) {
        const months = parseInt(duration);
        durationInSeconds = months * secondsInMonth;
    } else if (duration.endsWith('Months')) {
        const months = parseInt(duration);
        durationInSeconds = months * secondsInMonth;
    } else if (duration.endsWith('Year')) {
        const years = parseInt(duration);
        durationInSeconds = years * secondsInYear;
    } else {
        return ""
    }

    return now + durationInSeconds;
}

const humanized = (number, fix) => {
    return Number(
        web3Obj.utils.fromWei(number.toString(), "ether")
    ).toFixed(number == 0 ? 3 : fix);
}

const addrTruncation = (addr) => {
    return (
        addr.slice(0, 6) + ". . . . . ." + addr.slice(addr.length - 6, addr.length)
    );
}

const notify = (msg) => {
    Toastify({
        text: msg,
        duration: 5000,
        gravity: "bottom",
        position: "right",
        backgroundColor: '#ea5f5f'
    }).showToast();
}