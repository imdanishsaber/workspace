// CRV Smart Contract
const CRVADDRESS = "0xd533a949740bb3306d119cc777fa900ba034cd52";
const CRVABI = [{ "name": "Transfer", "inputs": [{ "type": "address", "name": "_from", "indexed": true }, { "type": "address", "name": "_to", "indexed": true }, { "type": "uint256", "name": "_value", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Approval", "inputs": [{ "type": "address", "name": "_owner", "indexed": true }, { "type": "address", "name": "_spender", "indexed": true }, { "type": "uint256", "name": "_value", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "UpdateMiningParameters", "inputs": [{ "type": "uint256", "name": "time", "indexed": false }, { "type": "uint256", "name": "rate", "indexed": false }, { "type": "uint256", "name": "supply", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "SetMinter", "inputs": [{ "type": "address", "name": "minter", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "SetAdmin", "inputs": [{ "type": "address", "name": "admin", "indexed": false }], "anonymous": false, "type": "event" }, { "outputs": [], "inputs": [{ "type": "string", "name": "_name" }, { "type": "string", "name": "_symbol" }, { "type": "uint256", "name": "_decimals" }], "stateMutability": "nonpayable", "type": "constructor" }, { "name": "update_mining_parameters", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 148748 }, { "name": "start_epoch_time_write", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 149603 }, { "name": "future_epoch_time_write", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 149806 }, { "name": "available_supply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 4018 }, { "name": "mintable_in_timeframe", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "uint256", "name": "start" }, { "type": "uint256", "name": "end" }], "stateMutability": "view", "type": "function", "gas": 2216141 }, { "name": "set_minter", "outputs": [], "inputs": [{ "type": "address", "name": "_minter" }], "stateMutability": "nonpayable", "type": "function", "gas": 38698 }, { "name": "set_admin", "outputs": [], "inputs": [{ "type": "address", "name": "_admin" }], "stateMutability": "nonpayable", "type": "function", "gas": 37837 }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1421 }, { "name": "allowance", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "_owner" }, { "type": "address", "name": "_spender" }], "stateMutability": "view", "type": "function", "gas": 1759 }, { "name": "transfer", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 75139 }, { "name": "transferFrom", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_from" }, { "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 111433 }, { "name": "approve", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_spender" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 39288 }, { "name": "mint", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 228030 }, { "name": "burn", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 74999 }, { "name": "set_name", "outputs": [], "inputs": [{ "type": "string", "name": "_name" }, { "type": "string", "name": "_symbol" }], "stateMutability": "nonpayable", "type": "function", "gas": 178270 }, { "name": "name", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 8063 }, { "name": "symbol", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 7116 }, { "name": "decimals", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1721 }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 1905 }, { "name": "minter", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1781 }, { "name": "admin", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1811 }, { "name": "mining_epoch", "outputs": [{ "type": "int128", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1841 }, { "name": "start_epoch_time", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1871 }, { "name": "rate", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1901 }]

// veCRV Smart Contract
const veCRVADDRESS = "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2";
const veCRVABI = [{ "name": "CommitOwnership", "inputs": [{ "type": "address", "name": "admin", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "ApplyOwnership", "inputs": [{ "type": "address", "name": "admin", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Deposit", "inputs": [{ "type": "address", "name": "provider", "indexed": true }, { "type": "uint256", "name": "value", "indexed": false }, { "type": "uint256", "name": "locktime", "indexed": true }, { "type": "int128", "name": "type", "indexed": false }, { "type": "uint256", "name": "ts", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Withdraw", "inputs": [{ "type": "address", "name": "provider", "indexed": true }, { "type": "uint256", "name": "value", "indexed": false }, { "type": "uint256", "name": "ts", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Supply", "inputs": [{ "type": "uint256", "name": "prevSupply", "indexed": false }, { "type": "uint256", "name": "supply", "indexed": false }], "anonymous": false, "type": "event" }, { "outputs": [], "inputs": [{ "type": "address", "name": "token_addr" }, { "type": "string", "name": "_name" }, { "type": "string", "name": "_symbol" }, { "type": "string", "name": "_version" }], "stateMutability": "nonpayable", "type": "constructor" }, { "name": "commit_transfer_ownership", "outputs": [], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "nonpayable", "type": "function", "gas": 37597 }, { "name": "apply_transfer_ownership", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 38497 }, { "name": "commit_smart_wallet_checker", "outputs": [], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "nonpayable", "type": "function", "gas": 36307 }, { "name": "apply_smart_wallet_checker", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 37095 }, { "name": "get_last_user_slope", "outputs": [{ "type": "int128", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "view", "type": "function", "gas": 2569 }, { "name": "user_point_history__ts", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "_addr" }, { "type": "uint256", "name": "_idx" }], "stateMutability": "view", "type": "function", "gas": 1672 }, { "name": "locked__end", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "_addr" }], "stateMutability": "view", "type": "function", "gas": 1593 }, { "name": "checkpoint", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 37052342 }, { "name": "deposit_for", "outputs": [], "inputs": [{ "type": "address", "name": "_addr" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 74279891 }, { "name": "create_lock", "outputs": [], "inputs": [{ "type": "uint256", "name": "_value" }, { "type": "uint256", "name": "_unlock_time" }], "stateMutability": "nonpayable", "type": "function", "gas": 74281465 }, { "name": "increase_amount", "outputs": [], "inputs": [{ "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 74280830 }, { "name": "increase_unlock_time", "outputs": [], "inputs": [{ "type": "uint256", "name": "_unlock_time" }], "stateMutability": "nonpayable", "type": "function", "gas": 74281578 }, { "name": "withdraw", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 37223566 }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "view", "type": "function" }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }, { "type": "uint256", "name": "_t" }], "stateMutability": "view", "type": "function" }, { "name": "balanceOfAt", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }, { "type": "uint256", "name": "_block" }], "stateMutability": "view", "type": "function", "gas": 514333 }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function" }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "uint256", "name": "t" }], "stateMutability": "view", "type": "function" }, { "name": "totalSupplyAt", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "uint256", "name": "_block" }], "stateMutability": "view", "type": "function", "gas": 812560 }, { "name": "changeController", "outputs": [], "inputs": [{ "type": "address", "name": "_newController" }], "stateMutability": "nonpayable", "type": "function", "gas": 36907 }, { "name": "token", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1841 }, { "name": "supply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1871 }, { "name": "locked", "outputs": [{ "type": "int128", "name": "amount" }, { "type": "uint256", "name": "end" }], "inputs": [{ "type": "address", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 3359 }, { "name": "epoch", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1931 }, { "name": "point_history", "outputs": [{ "type": "int128", "name": "bias" }, { "type": "int128", "name": "slope" }, { "type": "uint256", "name": "ts" }, { "type": "uint256", "name": "blk" }], "inputs": [{ "type": "uint256", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 5550 }, { "name": "user_point_history", "outputs": [{ "type": "int128", "name": "bias" }, { "type": "int128", "name": "slope" }, { "type": "uint256", "name": "ts" }, { "type": "uint256", "name": "blk" }], "inputs": [{ "type": "address", "name": "arg0" }, { "type": "uint256", "name": "arg1" }], "stateMutability": "view", "type": "function", "gas": 6079 }, { "name": "user_point_epoch", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 2175 }, { "name": "slope_changes", "outputs": [{ "type": "int128", "name": "" }], "inputs": [{ "type": "uint256", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 2166 }, { "name": "controller", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2081 }, { "name": "transfersEnabled", "outputs": [{ "type": "bool", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2111 }, { "name": "name", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 8543 }, { "name": "symbol", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 7596 }, { "name": "version", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 7626 }, { "name": "decimals", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2231 }, { "name": "future_smart_wallet_checker", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2261 }, { "name": "smart_wallet_checker", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2291 }, { "name": "admin", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2321 }, { "name": "future_admin", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2351 }]


// GTX Smart Contract
const GTXADDRESS = "0xd533a949740bb3306d119cc777fa900ba034cd52";
const GTXABI = [{ "name": "Transfer", "inputs": [{ "type": "address", "name": "_from", "indexed": true }, { "type": "address", "name": "_to", "indexed": true }, { "type": "uint256", "name": "_value", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Approval", "inputs": [{ "type": "address", "name": "_owner", "indexed": true }, { "type": "address", "name": "_spender", "indexed": true }, { "type": "uint256", "name": "_value", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "UpdateMiningParameters", "inputs": [{ "type": "uint256", "name": "time", "indexed": false }, { "type": "uint256", "name": "rate", "indexed": false }, { "type": "uint256", "name": "supply", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "SetMinter", "inputs": [{ "type": "address", "name": "minter", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "SetAdmin", "inputs": [{ "type": "address", "name": "admin", "indexed": false }], "anonymous": false, "type": "event" }, { "outputs": [], "inputs": [{ "type": "string", "name": "_name" }, { "type": "string", "name": "_symbol" }, { "type": "uint256", "name": "_decimals" }], "stateMutability": "nonpayable", "type": "constructor" }, { "name": "update_mining_parameters", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 148748 }, { "name": "start_epoch_time_write", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 149603 }, { "name": "future_epoch_time_write", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 149806 }, { "name": "available_supply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 4018 }, { "name": "mintable_in_timeframe", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "uint256", "name": "start" }, { "type": "uint256", "name": "end" }], "stateMutability": "view", "type": "function", "gas": 2216141 }, { "name": "set_minter", "outputs": [], "inputs": [{ "type": "address", "name": "_minter" }], "stateMutability": "nonpayable", "type": "function", "gas": 38698 }, { "name": "set_admin", "outputs": [], "inputs": [{ "type": "address", "name": "_admin" }], "stateMutability": "nonpayable", "type": "function", "gas": 37837 }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1421 }, { "name": "allowance", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "_owner" }, { "type": "address", "name": "_spender" }], "stateMutability": "view", "type": "function", "gas": 1759 }, { "name": "transfer", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 75139 }, { "name": "transferFrom", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_from" }, { "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 111433 }, { "name": "approve", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_spender" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 39288 }, { "name": "mint", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "address", "name": "_to" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 228030 }, { "name": "burn", "outputs": [{ "type": "bool", "name": "" }], "inputs": [{ "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 74999 }, { "name": "set_name", "outputs": [], "inputs": [{ "type": "string", "name": "_name" }, { "type": "string", "name": "_symbol" }], "stateMutability": "nonpayable", "type": "function", "gas": 178270 }, { "name": "name", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 8063 }, { "name": "symbol", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 7116 }, { "name": "decimals", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1721 }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 1905 }, { "name": "minter", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1781 }, { "name": "admin", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1811 }, { "name": "mining_epoch", "outputs": [{ "type": "int128", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1841 }, { "name": "start_epoch_time", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1871 }, { "name": "rate", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1901 }]

// Any token Smart Contract
const TOKENADDRESS = "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2";
const TOKENABI = [{ "name": "CommitOwnership", "inputs": [{ "type": "address", "name": "admin", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "ApplyOwnership", "inputs": [{ "type": "address", "name": "admin", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Deposit", "inputs": [{ "type": "address", "name": "provider", "indexed": true }, { "type": "uint256", "name": "value", "indexed": false }, { "type": "uint256", "name": "locktime", "indexed": true }, { "type": "int128", "name": "type", "indexed": false }, { "type": "uint256", "name": "ts", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Withdraw", "inputs": [{ "type": "address", "name": "provider", "indexed": true }, { "type": "uint256", "name": "value", "indexed": false }, { "type": "uint256", "name": "ts", "indexed": false }], "anonymous": false, "type": "event" }, { "name": "Supply", "inputs": [{ "type": "uint256", "name": "prevSupply", "indexed": false }, { "type": "uint256", "name": "supply", "indexed": false }], "anonymous": false, "type": "event" }, { "outputs": [], "inputs": [{ "type": "address", "name": "token_addr" }, { "type": "string", "name": "_name" }, { "type": "string", "name": "_symbol" }, { "type": "string", "name": "_version" }], "stateMutability": "nonpayable", "type": "constructor" }, { "name": "commit_transfer_ownership", "outputs": [], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "nonpayable", "type": "function", "gas": 37597 }, { "name": "apply_transfer_ownership", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 38497 }, { "name": "commit_smart_wallet_checker", "outputs": [], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "nonpayable", "type": "function", "gas": 36307 }, { "name": "apply_smart_wallet_checker", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 37095 }, { "name": "get_last_user_slope", "outputs": [{ "type": "int128", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "view", "type": "function", "gas": 2569 }, { "name": "user_point_history__ts", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "_addr" }, { "type": "uint256", "name": "_idx" }], "stateMutability": "view", "type": "function", "gas": 1672 }, { "name": "locked__end", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "_addr" }], "stateMutability": "view", "type": "function", "gas": 1593 }, { "name": "checkpoint", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 37052342 }, { "name": "deposit_for", "outputs": [], "inputs": [{ "type": "address", "name": "_addr" }, { "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 74279891 }, { "name": "create_lock", "outputs": [], "inputs": [{ "type": "uint256", "name": "_value" }, { "type": "uint256", "name": "_unlock_time" }], "stateMutability": "nonpayable", "type": "function", "gas": 74281465 }, { "name": "increase_amount", "outputs": [], "inputs": [{ "type": "uint256", "name": "_value" }], "stateMutability": "nonpayable", "type": "function", "gas": 74280830 }, { "name": "increase_unlock_time", "outputs": [], "inputs": [{ "type": "uint256", "name": "_unlock_time" }], "stateMutability": "nonpayable", "type": "function", "gas": 74281578 }, { "name": "withdraw", "outputs": [], "inputs": [], "stateMutability": "nonpayable", "type": "function", "gas": 37223566 }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }], "stateMutability": "view", "type": "function" }, { "name": "balanceOf", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }, { "type": "uint256", "name": "_t" }], "stateMutability": "view", "type": "function" }, { "name": "balanceOfAt", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "addr" }, { "type": "uint256", "name": "_block" }], "stateMutability": "view", "type": "function", "gas": 514333 }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function" }, { "name": "totalSupply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "uint256", "name": "t" }], "stateMutability": "view", "type": "function" }, { "name": "totalSupplyAt", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "uint256", "name": "_block" }], "stateMutability": "view", "type": "function", "gas": 812560 }, { "name": "changeController", "outputs": [], "inputs": [{ "type": "address", "name": "_newController" }], "stateMutability": "nonpayable", "type": "function", "gas": 36907 }, { "name": "token", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1841 }, { "name": "supply", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1871 }, { "name": "locked", "outputs": [{ "type": "int128", "name": "amount" }, { "type": "uint256", "name": "end" }], "inputs": [{ "type": "address", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 3359 }, { "name": "epoch", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 1931 }, { "name": "point_history", "outputs": [{ "type": "int128", "name": "bias" }, { "type": "int128", "name": "slope" }, { "type": "uint256", "name": "ts" }, { "type": "uint256", "name": "blk" }], "inputs": [{ "type": "uint256", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 5550 }, { "name": "user_point_history", "outputs": [{ "type": "int128", "name": "bias" }, { "type": "int128", "name": "slope" }, { "type": "uint256", "name": "ts" }, { "type": "uint256", "name": "blk" }], "inputs": [{ "type": "address", "name": "arg0" }, { "type": "uint256", "name": "arg1" }], "stateMutability": "view", "type": "function", "gas": 6079 }, { "name": "user_point_epoch", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [{ "type": "address", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 2175 }, { "name": "slope_changes", "outputs": [{ "type": "int128", "name": "" }], "inputs": [{ "type": "uint256", "name": "arg0" }], "stateMutability": "view", "type": "function", "gas": 2166 }, { "name": "controller", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2081 }, { "name": "transfersEnabled", "outputs": [{ "type": "bool", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2111 }, { "name": "name", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 8543 }, { "name": "symbol", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 7596 }, { "name": "version", "outputs": [{ "type": "string", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 7626 }, { "name": "decimals", "outputs": [{ "type": "uint256", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2231 }, { "name": "future_smart_wallet_checker", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2261 }, { "name": "smart_wallet_checker", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2291 }, { "name": "admin", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2321 }, { "name": "future_admin", "outputs": [{ "type": "address", "name": "" }], "inputs": [], "stateMutability": "view", "type": "function", "gas": 2351 }]


let web3Obj = null;
let walletAddress = null;

let CRVBalance = null;
let veCRVBalance = null;

let CRVINSTANCE = null;
let veCRVINSTANCE = null;
let GTXINSTANCE = null;
let TOKENINSTANCE = null;

document.getElementById('balance').style.display = 'flex';
document.getElementById('mint').style.display = 'none';
document.getElementById('voting').style.display = 'none';

const onTabClick = (name) => {
    document.getElementById('balance').style.display = 'none';
    document.getElementById('mint').style.display = 'none';
    document.getElementById('voting').style.display = 'none';
    document.getElementById('balanceTab').classList.remove("active");
    document.getElementById('mintTab').classList.remove("active");
    document.getElementById('votingTab').classList.remove("active");
    document.getElementById(name).style.display = 'flex';
    document.getElementById(name + 'Tab').classList.add("active");
}
const onConnect = () => {
    if (window.ethereum) {
        window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(handleAccountsChanged)
            .catch((error) => {
                if (error.code === 4001) {
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(error);
                }
            });
    } else {
        notify("Metamask wallet is not installed.", "#ff0000")
    }
}
const handleAccountsChanged = (accounts) => {
    console.log('accounts:', accounts);
    walletAddress = accounts[0]
    web3Obj = new Web3(window.ethereum);
    CRVINSTANCE = new web3Obj.eth.Contract(
        CRVABI,
        CRVADDRESS
    );
    veCRVINSTANCE = new web3Obj.eth.Contract(
        CRVABI,
        CRVADDRESS
    );
    GTXINSTANCE = new web3Obj.eth.Contract(
        GTXABI,
        GTXADDRESS
    );
    TOKENINSTANCE = new web3Obj.eth.Contract(
        TOKENABI,
        TOKENADDRESS
    );
    readValues()
    document.getElementById('connectButton').innerHTML = addrTruncation(walletAddress);
    notify("Wallet Connected Successfully!", "#07bc0c")
}
const onApprove = () => {
    if (!walletAddress) {
        onConnect()
        return;
    }
    TOKENINSTANCE.methods.approve(GTXADDRESS, "1000000000000000000000000000")
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            document.getElementById('approveButton').disabled = true;
            notify("Transaction is submitted to the network", "#07bc0c")
        })
        .on('receipt', (receipt) => {
            readValue();
            console.log("Receipt: ", receipt)
            document.getElementById('approveButton').disabled = true;
            document.getElementById('mintButton').disabled = false;
            notify("Transaction completed successfully", "#07bc0c")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected", "#ff0000")
            document.getElementById('approveButton').disabled = false;
        });
}

const onMint = () => {
    if (!walletAddress) {
        onConnect()
        return;
    }
    let tokenAmount = document.getElementById('tokenAmount').value;
    let weiTokenAmount = web3Obj.utils.toWei(tokenAmount.toString(), "ether");
    console.log('weiTokenAmount:', weiTokenAmount);
    GTXINSTANCE.methods.mintWithOLDCrv(weiTokenAmount)
        .send({
            from: walletAddress,
        })
        .on('transactionHash', (hash) => {
            console.log("Transaction Hash: ", hash)
            document.getElementById('mintButton').disabled = true;
            notify("Transaction is submitted to the network", "#07bc0c")
        })
        .on('receipt', (receipt) => {
            readValue();
            console.log("Receipt: ", receipt)
            document.getElementById('mintButton').disabled = false;
            notify("Transaction completed successfully", "#07bc0c")
        })
        .on('error', (error, receipt) => {
            console.log("Error receipt: ", receipt)
            notify("Transaction rejected", "#ff0000")
            document.getElementById('mintButton').disabled = false;
        });
}

const readValues = () => {
    Promise.all([
        CRVINSTANCE.methods.balanceOf(walletAddress).call(),
        veCRVINSTANCE.methods.balanceOf(walletAddress).call(),
    ]).then(
        ([
            CRVBalance,
            veCRVBalance,
        ]) => {
            console.log("CRVBalance:", CRVBalance);
            console.log("veCRVBalance:", veCRVBalance);

            CRVBalance = CRVBalance
            veCRVBalance = veCRVBalance
            document.getElementById('CRVBalance').innerHTML = humanized(CRVBalance, 4);
            document.getElementById('veCRVBalance').innerHTML = humanized(veCRVBalance, 4);
        }
    );
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

const disconnect = () => {
    web3Obj = null;
    walletAddress = null;
    CRVINSTANCE = null;
    veCRVINSTANCE = null;
    CRVBalance = null;
    veCRVBalance = null;
}

const notify = (msg, code) => {
    Toastify({
        text: msg,
        duration: 5000,
        gravity: "bottom",
        position: "center",
        backgroundColor: code
    }).showToast();
}