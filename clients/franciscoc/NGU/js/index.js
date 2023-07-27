// testnet
// const SaleAddress = "0xa9ccee11cb5bd65a7a23790624173d116a99eafa";

// mainnet
const SaleAddress = "0xE7ec3d790639588b913B6bAf32102956825B3EcE";
const SaleABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "referrer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "ReferralBonusClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokensBought", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "purchaseToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountPaid", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "addHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "addTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "baseDecimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "referrer", "type": "address" }], "name": "buyWithBNB", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }, { "internalType": "address", "name": "referrer", "type": "address" }], "name": "buyWithUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }], "name": "changeClaimStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "changeManuallyStep", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "changeMinimumBuyAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }], "name": "changeSaleTimes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_hardcapSize", "type": "uint256" }], "name": "changehardcapSize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimStart", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentStep", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "getBNBAmount", "outputs": [{ "internalType": "uint256", "name": "BNBAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBNBLatestPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "purchaseToken", "type": "uint256" }], "name": "getTokenAmount", "outputs": [{ "internalType": "uint256", "name": "usdPrice", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "hardcapsizeUSD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inSaleUSDvalue", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isPresalePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumBuyAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "referralBonusPercentage", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "referrers", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_valuehard", "type": "uint256" }, { "internalType": "uint256", "name": "_valuetotal", "type": "uint256" }, { "internalType": "uint256", "name": "_valueinsale", "type": "uint256" }], "name": "removeHardcapsizeUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "removeTokensInSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "salePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "saleToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_dAddress", "type": "address" }], "name": "setDaddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "percentage", "type": "uint256" }], "name": "setReferralBonusPercentage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "uint256", "name": "_valuenext", "type": "uint256" }], "name": "setSalePrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "settotalTokensForPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_claimStart", "type": "uint256" }, { "internalType": "uint256", "name": "tokensAmount", "type": "uint256" }, { "internalType": "address", "name": "_saleToken", "type": "address" }], "name": "startClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalTokensForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalUsdValueForPresale", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userDeposits", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawBNBs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
// testnet
// const BUSDAddress = "0x509Ee0d083DdF8AC028f2a56731412edD63223B9";
// mainnet
const BUSDAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const USDTABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

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
      referrelAddr: "",
      referralLink: "",
      BNBbalance: 0,
      BUSDbalance: 0,
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
    var countDownDate = new Date("Oct 06, 2023 04:00:00").getTime();
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
        this.SaleObj.methods.getBNBLatestPrice().call(),
        this.SaleObj.methods.totalTokensForPresale().call(),
        this.SaleObj.methods.totalUsdValueForPresale().call(),
        this.SaleObj.methods.userDeposits(this.metamaskAccount).call(),
      ]).then(
        ([
          BNBbalance,
          BUSDbalance,
          USDTAllowance,
          inSale,
          salePrice,
          nextPrice,
          inSaleUSDvalue,
          getBNBLatestPrice,
          totalTokensForPresale,
          totalUsdValueForPresale,
          userDeposits
        ]) => {
          console.log("BNBbalance:", BNBbalance);
          console.log("BUSDbalance:", BUSDbalance);
          console.log("USDTAllowance:", USDTAllowance);

          if (BNBbalance == 0) {
            this.BNBbalance = BNBbalance;
          } else {
            this.BNBbalance = this.fixedDecimal(parseFloat(BNBbalance / 1e18), 3);
          }

          if (BUSDbalance == 0) {
            this.BUSDbalance = BUSDbalance;
          } else {
            this.BUSDbalance = this.fixedDecimal(parseFloat(BUSDbalance / 1e18), 3);
          }

          this.USDTAllowance = Number(
            this.fixedDecimal(parseFloat(USDTAllowance / 1e18), 3)
          );

          console.log('inSale:', inSale);
          console.log('salePrice:', salePrice);
          console.log('nextPrice:', nextPrice);
          console.log('inSaleUSDvalue:', inSaleUSDvalue);
          console.log('getBNBLatestPrice:', getBNBLatestPrice);
          console.log('totalTokensForPresale:', totalTokensForPresale);
          console.log('totalUsdValueForPresale:', totalUsdValueForPresale);
          console.log('userDeposits:', userDeposits);


          this.salePrice =
            this.fixedDecimal(parseFloat(salePrice / 1e18), 3)

          this.nextPrice =
            this.fixedDecimal(parseFloat(nextPrice / 1e18), 3)

          this.getBNBLatestPrice = Number(
            this.fixedDecimal(parseFloat(getBNBLatestPrice / 1e18), 3)
          );

          this.salePriceETH = this.salePrice / this.getBNBLatestPrice

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
      if (chainId !== 56 && chainId !== 5) {
        this.notify("Please Connect You Wallet to Binance Network");
        return;
      }

      let accounts = await this.web3Object.eth.getAccounts();
      this.metamaskAccount = accounts[0];
      this.referrelAddr = this.metamaskAccount;

      // if (window.location.search) {
      //   this.referrelAddr = window.location.search.slice(5);
      // } else {
      //   this.referrelAddr = this.metamaskAccount;
      // }
      this.referralLink = window.location.origin + "/?ref=" + this.metamaskAccount;
      this.SaleObj = new this.web3Object.eth.Contract(SaleABI, SaleAddress);
      this.USDTObj = new this.web3Object.eth.Contract(
        USDTABI,
        BUSDAddress
      );

      this.readValues();
    },

    onAction() {
      if (!this.metamaskAccount) {
        this.notify("Connect Your wallet first!");
        return;
      } else if (!this.amount) {
        this.notify("Enter Amount!");
        return;
      } else if (this.quantity < 1) {
        this.notify("Minimum Buy is 1 NGU.");
        return;
      }

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
      if (Number(this.BNBbalance) < Number(this.amount)) {
        this.notify("Insufficient balance");
        return;
      }
      try {
        this.isLoading = true;
        const value = this.web3Object.utils.toWei(this.amount.toString(), 'ether');

        this.SaleObj.methods
          .buyWithBNB(this.quantity.toString(), this.referrelAddr)
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
      if (Number(this.BUSDbalance) < Number(this.amount)) {
        this.notify("Insufficient BUSD balance");
        return;
      }
      try {
        this.isLoading = true;
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
      } catch (error) {
        console.log('error:', error);
        this.isLoading = false;
        this.notify("Error found!");
      }
    },

    onUSDTDeposit() {
      if (Number(this.BUSDbalance) < Number(this.amount)) {
        this.notify("Insufficient USDT balance");
        return;
      }
      try {
        this.isLoading = true;
        this.SaleObj.methods
          .buyWithUSD(this.quantity.toString(), 0, this.referrelAddr)
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
    copyStringToClipboard() {
      var el = document.createElement("textarea");
      el.value = this.referralLink;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.notify("Copied!");
    },
  },
  computed: {
    quantity() {
      if (this.type === 1)
        return this.fixedDecimal((Number(this.amount) / Number(this.salePriceETH)), 0)
      else
        return this.fixedDecimal((Number(this.amount) / Number(this.salePrice)), 0)
    },
    progress() {
      return ((Number(this.totalUsdValueForPresale) - Number(this.inSaleUSDvalue)) / 3000000) * 100
    }
  },
});
