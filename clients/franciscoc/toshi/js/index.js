// testnet
// const SaleAddress = "0xa9ccee11cb5bd65a7a23790624173d116a99eafa";

// mainnet
const SaleAddress = "0x492fA40F7577950632623B2Ba51a8Ed29397cB23";
const SaleABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokensBought", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "purchaseToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountPaid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "addHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "addTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "baseDecimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "buyWithETH", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "buyWithUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }], "name": "changeClaimStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "changeManuallyStep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "changeMinimumtokenAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }], "name": "changeSaleTimes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_hardcapSize", "type": "uint256" }], "name": "changehardcapSize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentStep", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getETHAmount", "outputs": [{ "internalType": "uint256", "name": "ETHAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getETHLatestPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "gettotalAmount", "outputs": [{ "internalType": "uint256", "name": "usdPrice", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapsizeUSD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSaleUSDvalue", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPresalePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumtokenAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "removeHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "removeTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "salePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "saleToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_dAddress", "type": "address" }], "name": "setDaddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "uint256", "name": "_valuenext", "type": "uint256" }], "name": "setSalePrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "settotalTokensForPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }, { "internalType": "uint256", "name": "tokensAmount", "type": "uint256" }, { "internalType": "address", "name": "_saleToken", "type": "address" }], "name": "startClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalTokensForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUsdValueForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawETHs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

// testnet
// const USDTAddress = "0x509Ee0d083DdF8AC028f2a56731412edD63223B9";
// mainnet
const USDTAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const USDTABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }];

var app = new Vue({
  el: "#app",
  data() {
    return {
      isLoading: false,
      web3Object: null,
      metamaskAccount: null,
      SaleObj: null,
      USDTObj: null,

      type: 1,
      amount: 0,

      inSale: 0,
      salePrice: 0,
      nextPrice: 0,
      salePriceETH: 0,
      inSaleUSDvalue: 0,
      userDeposits: 0,
      totalTokensForPresale: 0,
      totalUsdValueForPresale: 0,

      ETHbalance: 0,
      USDTbalance: 0,
      USDTAllowance: 0,

      // timer
      timer: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  beforeMount() {
    const Web3Modal = window.Web3Modal.default;
    // const WalletConnectProvider = window.WalletConnectProvider.default;
    // const providerOptions = {
    //   walletconnect: {
    //     package: WalletConnectProvider,
    //     options: {
    //       rpc: {
    //         56: "https://bsc-dataseed.binance.org/",
    //       },
    //       chainId: 56,
    //       infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
    //       pollingInterval: "10000",
    //     },
    //   },
    // };

    this.web3Modal = new Web3Modal({
      // providerOptions,
      cacheProvider: false,
      disableInjectedProvider: false,
    });
  },
  mounted() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length) {
            let provider = window.ethereum;
            this.onProvider(provider);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    this.isLoading = true;

    var countDownDate = new Date("July 16, 2023 04:00:00").getTime();

    var x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        this.timer = false
      }
    }, 1000);
  },
  methods: {
    async readValues() {
      Promise.all([
        this.web3Object.eth.getBalance(this.metamaskAccount),
        this.USDTObj.methods.balanceOf(this.metamaskAccount).call(),
        this.USDTObj.methods
          .allowance(this.metamaskAccount, SaleAddress)
          .call(),
        this.SaleObj.methods.inSale().call(),
        this.SaleObj.methods.salePrice().call(),
        this.SaleObj.methods.nextPrice().call(),
        this.SaleObj.methods.inSaleUSDvalue().call(),
        this.SaleObj.methods.getETHLatestPrice().call(),
        this.SaleObj.methods.totalTokensForPresale().call(),
        this.SaleObj.methods.totalUsdValueForPresale().call(),
        this.SaleObj.methods.userDeposits(this.metamaskAccount).call(),
      ]).then(
        ([
          ETHbalance,
          USDTbalance,
          USDTAllowance,
          inSale,
          salePrice,
          nextPrice,
          inSaleUSDvalue,
          getETHLatestPrice,
          totalTokensForPresale,
          totalUsdValueForPresale,
          userDeposits
        ]) => {
          console.log("ETHbalance:", ETHbalance);
          console.log("USDTbalance:", USDTbalance);
          console.log("USDTAllowance:", USDTAllowance);

          if (ETHbalance == 0) {
            this.ETHbalance = ETHbalance;
          } else {
            this.ETHbalance = this.fixedDecimal(parseFloat(ETHbalance / 1e18), 3);
          }

          if (USDTbalance == 0) {
            this.USDTbalance = USDTbalance;
          } else {
            this.USDTbalance = this.fixedDecimal(parseFloat(USDTbalance / 1e18), 3);
          }

          this.USDTAllowance = Number(
            this.fixedDecimal(parseFloat(USDTAllowance / 1e18), 3)
          );

          console.log('inSale:', inSale);
          console.log('salePrice:', salePrice);
          console.log('nextPrice:', nextPrice);
          console.log('inSaleUSDvalue:', inSaleUSDvalue);
          console.log('getETHLatestPrice:', getETHLatestPrice);
          console.log('totalTokensForPresale:', totalTokensForPresale);
          console.log('totalUsdValueForPresale:', totalUsdValueForPresale);
          console.log('userDeposits:', userDeposits);


          this.salePrice =
            this.fixedDecimal(parseFloat(salePrice / 1e18), 3)

          this.nextPrice =
            this.fixedDecimal(parseFloat(nextPrice / 1e18), 3)

          this.getETHLatestPrice = Number(
            this.fixedDecimal(parseFloat(getETHLatestPrice / 1e18), 3)
          );

          this.salePriceETH = this.salePrice / this.getETHLatestPrice

          this.inSaleUSDvalue = Number(
            this.fixedDecimal(parseFloat(inSaleUSDvalue / 1e18), 0)
          );

          this.userDeposits = Number(
            this.fixedDecimal(parseFloat(userDeposits / 1e18), 0)
          );


          this.inSale = Number(inSale)
          this.totalTokensForPresale = Number(totalTokensForPresale)
          this.totalUsdValueForPresale = Number(totalUsdValueForPresale);
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

      let chainId = await this.web3Object.eth.getChainId();
      if (chainId !== 1 && chainId !== 5) {
        this.notify("Please Connect You Wallet to Ethereum Network");
        return;
      }

      let accounts = await this.web3Object.eth.getAccounts();
      this.metamaskAccount = accounts[0];

      this.SaleObj = new this.web3Object.eth.Contract(SaleABI, SaleAddress);
      this.USDTObj = new this.web3Object.eth.Contract(
        USDTABI,
        USDTAddress
      );

      this.readValues();
      this.isLoading = false;
    },

    onAction() {
      if (!this.metamaskAccount) {
        this.notify("Connect Your wallet first!");
        return;
      } else if (!this.amount) {
        this.notify("Enter Amount!");
        return;
      }

      this.isLoading = true;
      if (this.type == 1) {
        this.onETHDeposit();
      }
      else {
        if (this.USDTAllowance >= this.amount)
          this.onUSDTDeposit();
        else this.onApprove();
      }
    },

    onETHDeposit() {
      if (Number(this.ETHbalance) < Number(this.amount)) {
        this.notify("Insufficient balance");
        return;
      }

      let quantity = parseFloat(this.quantity * 1e18);
      let value = parseFloat(this.amount * 1e18);

      this.SaleObj.methods
        .buyWithETH(quantity)
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
    },

    onApprove() {
      this.USDTObj.methods
        .approve(SaleAddress, "1000000000000000000000000000")
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
    },

    onUSDTDeposit() {
      if (Number(this.USDTbalance) < Number(this.amount)) {
        this.notify("Insufficient balance");
        return;
      }
      let quantity = parseFloat(this.quantity * 1e18);

      this.SaleObj.methods
        .buyWithUSD(this.amount, quantity)
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
    },

    onClaim() {
      if (!this.metamaskAccount) {
        this.notify("Connect your wallet first!");
        return;
      }
      this.isLoading = true;
      this.SaleObj.methods
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
      if (this.type === 1)
        return (Number(this.amount) / Number(this.salePriceETH)).toFixed()
      else
        return (Number(this.amount) / Number(this.salePrice)).toFixed()
    }
  },
});
