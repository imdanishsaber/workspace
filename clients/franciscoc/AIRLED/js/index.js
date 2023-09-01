
const ETH_ADDRESS = "0xa4bc7abc8ab2fe456d32027713373f840610cabf";
const ETH_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokensBought", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "purchaseToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountPaid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "addHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "addTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "baseDecimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "buyWithETH", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "buyWithUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }], "name": "changeClaimStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "changeManuallyStep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "changeMinimumBuyAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }], "name": "changeSaleTimes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_hardcapSize", "type": "uint256" }], "name": "changehardcapSize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentStep", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getETHAmount", "outputs": [{ "internalType": "uint256", "name": "ETHAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getETHLatestPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "getTokenAmount", "outputs": [{ "internalType": "uint256", "name": "usdPrice", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapsizeUSD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSaleUSDvalue", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPresalePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBuyAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "removeHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "removeTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "salePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "saleToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_dAddress", "type": "address" }], "name": "setDaddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "uint256", "name": "_valuenext", "type": "uint256" }], "name": "setSalePrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "settotalTokensForPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }, { "internalType": "uint256", "name": "tokensAmount", "type": "uint256" }, { "internalType": "address", "name": "_saleToken", "type": "address" }], "name": "startClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalTokensForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUsdValueForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawETHs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const ETH_TOKEN_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const ETH_TOKEN_ABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

const POLYGON_ADDRESS = "0x114FE10822cC8D12E98aB4dFcEEb551c413E1aA3";
const POLYGON_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokensBought", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "purchaseToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountPaid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "addHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "addTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "baseDecimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "buyWithMATIC", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "buyWithUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }], "name": "changeClaimStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "changeManuallyStep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "changeMinimumBuyAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }], "name": "changeSaleTimes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_hardcapSize", "type": "uint256" }], "name": "changehardcapSize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentStep", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getMATICAmount", "outputs": [{ "internalType": "uint256", "name": "MATICAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMATICLatestPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "getTokenAmount", "outputs": [{ "internalType": "uint256", "name": "usdPrice", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapsizeUSD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSaleUSDvalue", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPresalePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBuyAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "removeHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "removeTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "salePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "saleToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_dAddress", "type": "address" }], "name": "setDaddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "uint256", "name": "_valuenext", "type": "uint256" }], "name": "setSalePrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "settotalTokensForPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }, { "internalType": "uint256", "name": "tokensAmount", "type": "uint256" }, { "internalType": "address", "name": "_saleToken", "type": "address" }], "name": "startClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalTokensForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUsdValueForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawMATIC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const POLYGON_TOKEN_ADDRESS = "0xc2132d05d31c914a87c6611c10748aeb04b58e8f";
const POLYGON_TOKEN_ABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

var app = new Vue({
  el: "#app",
  data() {
    return {
      isClaim: false,
      isActive: false,
      isLoading: false,
      web3Object: null,
      metamaskAccount: null,

      chainId: null,
      SALE_OBJ: null,
      TOKEN_OBJ: null,

      type: 1,
      amount: 0,

      inSale: 0,
      salePrice: 0,
      nextPrice: 0,
      salePriceETH: 0,
      userDeposits: 0,

      totalSold: 0,
      totalUsdValueForPresale: 0,

      balance: 0,
      tokenBalance: 0,
      tokenAllowance: 0,
    };
  },
  beforeMount() {
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "fc0c22bd394a44819c5e30dc1c7cd64a",
        },
      },
    };

    this.web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider: false,
      disableInjectedProvider: false,
    });
  },
  mounted() {
    this.offlineData()
  },
  methods: {
    offlineData() {
      const ETH_WEB3 = new Web3("https://ethereum.publicnode.com/");
      const POLYGON_WEB3 = new Web3("https://polygon-rpc.com");


      let ETH_INSTANCE = new ETH_WEB3.eth.Contract(
        ETH_ABI, ETH_ADDRESS
      );

      let POLYGON_INSTANCE = new POLYGON_WEB3.eth.Contract(
        POLYGON_ABI, POLYGON_ADDRESS
      );

      Promise.all([
        ETH_INSTANCE.methods.inSaleUSDvalue().call(),
        POLYGON_INSTANCE.methods.inSaleUSDvalue().call(),
        ETH_INSTANCE.methods.totalUsdValueForPresale().call(),
      ]).then(
        async ([
          ETH_SOLD,
          POLYGON_SOLD,
          totalUsdValueForPresale,
        ]) => {
          console.log("ETH_SOLD:", ETH_SOLD);
          console.log("POLYGON_SOLD:", POLYGON_SOLD);
          console.log("totalUsdValueForPresale:", totalUsdValueForPresale);

          this.totalUsdValueForPresale = Number(totalUsdValueForPresale);

          let ETH_SOLD_USD = Number(
            this.fixedDecimal(parseFloat(ETH_SOLD / 1e18), 0)
          );

          let POLYGON_SOLD_USD = Number(
            this.fixedDecimal(parseFloat(POLYGON_SOLD / 1e18), 0)
          );

          let soldInETH = Number(this.totalUsdValueForPresale) - Number(ETH_SOLD_USD)
          let soldInPOLYGON = Number(this.totalUsdValueForPresale) - Number(POLYGON_SOLD_USD)
          this.totalSold = Number(soldInETH) + Number(soldInPOLYGON)
          console.log("this.totalSold:", this.totalSold);

        }
      );

    },
    async onConnect() {
      try {
        let provider = await this.web3Modal.connect();
        this.onProvider(provider);
        provider.on("accountsChanged", (accounts) => {
          console.log(accounts);
          this.onProvider(provider);
        });
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },

    async onProvider(provider) {
      this.web3Object = new Web3(provider);

      this.chainId = await this.web3Object.eth.getChainId();
      console.log('this.chainId:', this.chainId);
      if (this.chainId !== 1 && this.chainId !== 137) {
        this.notify("Please Connect You Wallet to Binance Network");
        return;
      }
      if (this.chainId == 1) {
        this.type = 1
      } else {
        this.type = 3
      }

      let accounts = await this.web3Object.eth.getAccounts();
      this.metamaskAccount = accounts[0];
      if (this.chainId == 1) {
        this.SALE_OBJ = new this.web3Object.eth.Contract(ETH_ABI, ETH_ADDRESS);
        this.TOKEN_OBJ = new this.web3Object.eth.Contract(
          ETH_TOKEN_ABI,
          ETH_TOKEN_ADDRESS
        );
      } else {
        this.SALE_OBJ = new this.web3Object.eth.Contract(POLYGON_ABI, POLYGON_ADDRESS);
        this.TOKEN_OBJ = new this.web3Object.eth.Contract(
          POLYGON_TOKEN_ABI,
          POLYGON_TOKEN_ADDRESS
        );
      }
      this.readValues();
      this.offlineData()
    },

    async readValues() {
      let name = null
      let addr = null
      if (this.chainId == 1) {
        name = 'getETHLatestPrice'
        addr = ETH_ADDRESS
      } else {
        name = 'getMATICLatestPrice'
        addr = POLYGON_ADDRESS
      }

      Promise.all([
        this.web3Object.eth.getBalance(this.metamaskAccount),
        this.TOKEN_OBJ.methods.balanceOf(this.metamaskAccount).call(),
        this.TOKEN_OBJ.methods
          .allowance(this.metamaskAccount, addr)
          .call(),
        this.SALE_OBJ.methods.salePrice().call(),
        this.SALE_OBJ.methods.nextPrice().call(),
        this.SALE_OBJ.methods[name]().call(),
        this.SALE_OBJ.methods.userDeposits(this.metamaskAccount).call(),
      ]).then(
        ([
          balance,
          tokenBalance,
          tokenAllowance,
          salePrice,
          nextPrice,
          getLatestPrice,
          userDeposits
        ]) => {
          console.log("balance:", balance);
          console.log("tokenBalance:", tokenBalance);
          console.log("tokenAllowance:", tokenAllowance);
          console.log('salePrice:', salePrice);
          console.log('nextPrice:', nextPrice);
          console.log('getLatestPrice:', getLatestPrice);
          console.log('userDeposits:', userDeposits);

          if (balance == 0) {
            this.balance = balance;
          } else {
            this.balance = this.fixedDecimal(parseFloat(balance / 1e18), 3);
          }

          if (tokenBalance == 0) {
            this.tokenBalance = tokenBalance;
          } else {
            this.tokenBalance = this.fixedDecimal(parseFloat(tokenBalance / 1e6), 3);
          }

          this.tokenAllowance = Number(
            this.fixedDecimal(parseFloat(tokenAllowance / 1e6), 3)
          );

          this.salePrice =
            this.fixedDecimal(parseFloat(salePrice / 1e18), 3)

          this.nextPrice =
            this.fixedDecimal(parseFloat(nextPrice / 1e18), 3)

          this.getLatestPrice = Number(
            this.fixedDecimal(parseFloat(getLatestPrice / 1e18), 3)
          );

          this.salePriceETH = this.salePrice / this.getLatestPrice

          this.userDeposits = Number(
            this.fixedDecimal(parseFloat(userDeposits / 1e18), 0)
          );
        }
      );
    },

    onAction() {
      if (!this.metamaskAccount) {
        this.notify("Connect Your wallet first!");
        return;
      } else if (!this.amount) {
        this.notify("Enter Amount!");
        return;
      } else if (this.quantity < 2500) {
        this.notify("Minimum Buy is 2500 AirLED.");
        return;
      }

      if (this.type == 1 || this.type == 3) {
        this.onETHDeposit();
      }
      else {
        if (this.tokenAllowance >= this.amount)
          this.onUSDTDeposit();
        else this.onApprove();
      }
    },

    onETHDeposit() {
      if (Number(this.balance) < Number(this.amount)) {
        this.notify("Insufficient balance");
        return;
      } else if (Number(this.quantity) < 2500) {
        this.notify("Minimum buy limit is 2500 AIRLED");
        return;
      }
      try {
        this.isLoading = true;
        const value = this.web3Object.utils.toWei(this.amount.toString(), 'ether');


        let name = null;
        if (this.chainId == 1) {
          name = "buyWithETH"
        } else {
          name = "buyWithMATIC"
        }

        this.SALE_OBJ.methods[name](this.quantity.toString())
          .send({
            value: value,
            from: this.metamaskAccount,
          })
          .on("transactionHash", (hash) => {
            console.log("Transaction Hash: ", hash);
            this.notify("Transaction is Submitted!");
          })
          .on("receipt", (receipt) => {
            this.readValues();
            this.isLoading = false;
            console.log("Receipt: ", receipt);
            this.notify("Transaction completed successfully!");
          })
          .on("error", (error, receipt) => {
            this.isLoading = false;
            console.log("Error receipt: ", receipt);
            this.notify("Transaction is Rejected!");
          });
      } catch (error) {
        console.log('error:', error);
        this.isLoading = false;
        this.notify("Error found!");
      }
    },

    onApprove() {
      if (Number(this.tokenBalance) < Number(this.amount)) {
        this.notify("Insufficient balance");
        return;
      } else if (Number(this.quantity) < 2500) {
        this.notify("Minimum buy limit is 2500 AIRLED");
        return;
      }
      try {
        this.isLoading = true;
        let addr = null;
        if (this.chainId == 1) {
          addr = ETH_ADDRESS
        } else {
          addr = POLYGON_ADDRESS
        }
        this.TOKEN_OBJ.methods
          .approve(addr, "1000000000000000000000000000")
          .send({
            from: this.metamaskAccount,
          })
          .on("transactionHash", (hash) => {
            console.log("Transaction Hash: ", hash);
            this.notify("Transaction is Submitted!");
          })
          .on("receipt", (receipt) => {
            this.readValues();
            this.isLoading = false;
            console.log("Receipt: ", receipt);
            this.notify("Your USDT has been approved successfully!");
          })
          .on("error", (error, receipt) => {
            this.isLoading = false;
            console.log("Error receipt: ", receipt);
            this.notify("Transaction is Rejected!");
          });
      } catch (error) {
        console.log('error:', error);
        this.isLoading = false;
        this.notify("Error found!");
      }
    },

    onUSDTDeposit() {
      if (Number(this.tokenBalance) < Number(this.amount)) {
        this.notify("Insufficient balance");
        return;
      } else if (Number(this.quantity) < 2500) {
        this.notify("Minimum buy limit is 2500 AIRLED");
        return;
      }
      try {
        this.isLoading = true;
        this.SALE_OBJ.methods
          .buyWithUSD(this.quantity.toString(), 0)
          .send({
            from: this.metamaskAccount,
          })
          .on("transactionHash", (hash) => {
            console.log("Transaction Hash: ", hash);
            this.notify("Transaction is Submitted!");
          })
          .on("receipt", (receipt) => {
            this.readValues();
            this.isLoading = false;
            console.log("Receipt: ", receipt);
            this.notify("Transaction completed successfully!");
          })
          .on("error", (error, receipt) => {
            this.isLoading = false;
            console.log("Error receipt: ", receipt);
            this.notify("Transaction is Rejected!");
          });
      } catch (error) {
        console.log('error:', error);
        this.isLoading = false;
        this.notify("Error found!");
      }
    },

    onClaim() {
      if (!this.metamaskAccount) {
        this.notify("Connect your wallet first!");
        return;
      }
      try {
        this.isLoading = true;
        this.SALE_OBJ.methods
          .claim()
          .send({
            from: this.metamaskAccount,
          })
          .on("transactionHash", (hash) => {
            console.log("Transaction Hash: ", hash);
            this.notify("Transaction is Submitted!");
          })
          .on("receipt", (receipt) => {
            this.readValues();
            this.isLoading = false;
            console.log("Receipt: ", receipt);
            this.notify("Transaction completed successfully!");
          })
          .on("error", (error, receipt) => {
            this.isLoading = false;
            console.log("Error receipt: ", receipt);
            this.notify("Transaction is Rejected!");
          });
      } catch (error) {
        console.log('error:', error);
        this.isLoading = false;
        this.notify("Error found!");
      }
    },


    onDisconnect() {
      localStorage.clear();
      this.web3Object = null;
      this.metamaskAccount = null;
    },

    addrTruncation(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },

    fixedDecimal(num, decimalPlaces) {
      const multiplier = Math.pow(10, decimalPlaces);
      const fixedNum = Math.floor(num * multiplier) / multiplier;
      return fixedNum;
    },
    async onTypeClick(type) {
      if (!this.metamaskAccount) {
        this.notify("Connect your wallet first!");
        return;
      }
      if (type == 1 || type == 2) {
        if (this.chainId == 1) {
          this.type = type
        }
        else {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${(1).toString(16)}` }],
          });
          let provider = await this.web3Modal.connect();
          this.onProvider(provider);
          this.type = type
          return;
        }
      } else {
        if (this.chainId == 137) {
          this.type = type
        }
        else {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${(137).toString(16)}` }],
          });
          let provider = await this.web3Modal.connect();
          this.onProvider(provider);
          this.type = type
          return;
        }
      }
    },
    notify(msg) {
      Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          fontSize: "17px",
          fontWeight: "600",
          color: "#fff",
          background: "#f9c34e",
          maxWidth: "90%",
        },
      }).showToast();
    },
  },
  computed: {
    quantity() {
      if (this.type == 1 || this.type == 3)
        return this.fixedDecimal((Number(this.amount) / Number(this.salePriceETH)), 0)
      else
        return this.fixedDecimal((Number(this.amount) / Number(this.salePrice)), 0)
    },
    progress() {
      return (Number(this.totalSold) / Number(this.totalUsdValueForPresale)) * 100
    }
  },
});
