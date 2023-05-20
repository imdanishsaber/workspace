const CONTRACT_ADDRESS = "0xa94F7d64C7953D5FBdf9b7556819c495B4d08670";
const CONTRACT_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [], "name": "CanceledLpWithdrawRequest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newWallet", "type": "address" }, { "indexed": true, "internalType": "address", "name": "oldWallet", "type": "address" }], "name": "DevWalletUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isExcluded", "type": "bool" }], "name": "ExcludeFromFees", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isExcluded", "type": "bool" }], "name": "ExcludedMaxTransactionAmount", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "newValue", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "oldValue", "type": "uint256" }], "name": "GasForProcessingUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newWallet", "type": "address" }, { "indexed": true, "internalType": "address", "name": "oldWallet", "type": "address" }], "name": "OperationsWalletUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "iterations", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "claims", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lastProcessedIndex", "type": "uint256" }, { "indexed": true, "internalType": "bool", "name": "automatic", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "gas", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "processor", "type": "address" }], "name": "ProcessedDividendTracker", "type": "event" }, { "anonymous": false, "inputs": [], "name": "RequestedLPWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "SendDividends", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "pair", "type": "address" }, { "indexed": true, "internalType": "bool", "name": "value", "type": "bool" }], "name": "SetAutomatedMarketMakerPair", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "WithdrewLPForMigration", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_isExcludedMaxTransactionAmount", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "automatedMarketMakerPairs", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "dividendTokenBalanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "dividendTracker", "outputs": [{ "internalType": "contract DividendTracker", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "enableTrading", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromDividends", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "excluded", "type": "bool" }], "name": "excludeFromFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "updAds", "type": "address" }, { "internalType": "bool", "name": "isEx", "type": "bool" }], "name": "excludeFromMaxTransaction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "feeDivisor", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gasForProcessing", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getClaimWait", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLastProcessedIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getNumberOfDividendTokenHolders", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getNumberOfDividends", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "rewardToken", "type": "address" }], "name": "getTotalDividendsDistributed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInDividends", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFees", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "limitsInEffect", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidityActiveBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquidityBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "liquiditySellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lpPercToWithDraw", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lpWithdrawRequestDuration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lpWithdrawRequestPending", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lpWithdrawRequestTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTransactionAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxWallet", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextAvailableLpWithdrawDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "operationsBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "operationsSellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "operationsWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "gas", "type": "uint256" }], "name": "processDividendTracker", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "removeLimits", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardsBuyFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardsSellFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pair", "type": "address" }, { "internalType": "bool", "name": "value", "type": "bool" }], "name": "setAutomatedMarketMakerPair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "swapTokensAtAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokensForLiquidity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokensForOperations", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokensForRewards", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalBuyFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSellFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tradingActive", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tradingActiveBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_operationsFee", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardsFee", "type": "uint256" }, { "internalType": "uint256", "name": "_liquidityFee", "type": "uint256" }], "name": "updateBuyFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "claimWait", "type": "uint256" }], "name": "updateClaimWait", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newValue", "type": "uint256" }], "name": "updateGasForProcessing", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newNum", "type": "uint256" }], "name": "updateMaxTxnAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newNum", "type": "uint256" }], "name": "updateMaxWalletAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOperationsWallet", "type": "address" }], "name": "updateOperationsWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_operationsFee", "type": "uint256" }, { "internalType": "uint256", "name": "_rewardsFee", "type": "uint256" }, { "internalType": "uint256", "name": "_liquidityFee", "type": "uint256" }], "name": "updateSellFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "updateSwapEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawRequestedLP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawStuckEth", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "rewardToken", "type": "address" }], "name": "withdrawableDividendOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]

var app = new Vue({
    el: "#app",
    data() {
        return {
            web3: null,
            buyAmount: 0.01,
            walletAddress: null,
            instance: null,
            rewardAddress: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",

            isDisabled: false,

            // Calculator Fields
            totalSupply: "",
            held: "",
            heldPercentage: "",
            dailyVolume: "",
            dailyEarning: "",
            rewardPaid: "",

            // Claim Fields
            balance: "",
            claimedRewards: "",
            unclaimedRewards: "",
            distributedRewards: "",
        };
    },
    beforeMount() {
        const Web3Modal = window.Web3Modal.default;
        const WalletConnectProvider = window.WalletConnectProvider.default;

        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    rpc: {
                        1: "https://mainnet.infura.io/v3/",
                    },
                    chainId: 1,
                    infuraId: "2af64799935b4be086c072d13f0dad73",
                    // infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
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
        this.onConnect()
    },
    methods: {
        async onConnect() {
            try {
                let provider = await this.web3Modal.connect();
                this.onProvider(provider);
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },
        async onProvider(provider) {
            try {
                this.web3 = new Web3(provider);
                let accounts = await this.web3.eth.getAccounts();

                this.walletAddress = accounts[0]
                this.instance = new this.web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
                this.notify("Wallet Connected Successfully!", "#07bc0c")
                this.readValue();
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },
        readValue() {
            Promise.all([
                this.instance.methods.totalSupply().call(),
                this.instance.methods.tokensForRewards().call(),
                this.instance.methods.balanceOf(this.walletAddress).call(),
                this.instance.methods.dividendTokenBalanceOf(this.walletAddress).call(),
                this.instance.methods.withdrawableDividendOf(this.walletAddress, this.rewardAddress).call(),
                this.instance.methods.getTotalDividendsDistributed(this.rewardAddress).call(),
            ]).then(
                ([totalSupply, tokensForRewards, balanceOf, dividendTokenBalanceOf, withdrawableDividendOf, getTotalDividendsDistributed]) => {

                    console.log('totalSupply:', totalSupply);
                    console.log('tokensForRewards:', tokensForRewards);
                    console.log('balanceOf:', balanceOf);
                    console.log('dividendTokenBalanceOf:', dividendTokenBalanceOf);
                    console.log('withdrawableDividendOf:', withdrawableDividendOf);
                    console.log('getTotalDividendsDistributed:', getTotalDividendsDistributed);
                    this.totalSupply = this.humanized(totalSupply, 0);
                    this.rewardPaid = this.humanized(tokensForRewards, 0);
                    this.balance = this.humanized(balanceOf, 3);
                    this.claimedRewards = this.humanized(dividendTokenBalanceOf, 3);
                    this.unclaimedRewards = this.humanized(withdrawableDividendOf, 3);
                    this.distributedRewards = this.humanized(getTotalDividendsDistributed, 3);
                    this.heldPercentage = ((Number(this.balance) / Number(this.totalSupply)) * 100).toFixed(2)
                }
            );
        },

        onClaim() {
            if (!this.walletAddress) {
                this.onConnect()
                return;
            }
            this.isDisabled = true;
            this.instance.methods.claim()
                .send({
                    from: this.walletAddress,
                })
                .on('transactionHash', (hash) => {
                    console.log("Transaction Hash: ", hash)
                    this.notify("Claim rewards transaction is submitted to the network", "#07bc0c")
                })
                .on('receipt', (receipt) => {
                    this.isDisabled = false;
                    this.readValue();
                    console.log("Receipt: ", receipt)
                    this.notify("Claim rewards transaction completed successfully", "#07bc0c")
                })
                .on('error', (error, receipt) => {
                    this.isDisabled = false;
                    console.log("Error receipt: ", receipt)
                    this.notify("Claim rewards transaction rejected", "#ff0000")
                });
        },

        humanized(number, fix) {
            return Number(
                this.web3.utils.fromWei(number.toString(), "ether")
            ).toFixed(number == 0 ? 3 : fix);
        },

        addrTruncation(addr) {
            return (
                addr.slice(0, 6) + ". . . . . ." + addr.slice(addr.length - 6, addr.length)
            );
        },

        disconnect() {
            this.web3 = null;
            this.buyAmount = null;
            this.walletAddress = null;
            this.instance = null;
        },

        notify(msg, code) {
            Toastify({
                text: msg,
                duration: 5000,
                gravity: "bottom",
                position: "center",
                backgroundColor: code
            }).showToast();
        }
    }
});