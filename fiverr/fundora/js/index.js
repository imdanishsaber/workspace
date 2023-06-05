// Smart Contract Details
const P1Address = "0x06019489f894e0fb4da698e4de2ed0776290adbc";
const P2Address = "0x3e90ee79fcf9121134a41960dea6d04418d68fa8";
const POOLABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "partner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "PositionUpdate", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "PERCENTAGES", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "compoundRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "partner", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "depositPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getInvestmentData", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauseDeposits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pauseWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "pendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "stake", "type": "uint256" }, { "internalType": "uint256", "name": "unclaimedReward", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "address", "name": "partner", "type": "address" }, { "internalType": "uint256", "name": "lockTimestamp", "type": "uint256" }, { "internalType": "uint256", "name": "claimedRewards", "type": "uint256" }, { "internalType": "uint256", "name": "claimLockTimestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "start", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "started", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalInvested", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalInvestors", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPaid", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "tradingTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpauseDeposits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpauseWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]
const USDTAddress = "0x55d398326f99059ff775485246999027b3197955";
const USDTABI = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]

var app = new Vue({
    el: "#app",
    data() {
        return {
            contest: false,
            web3Object: null,
            metamaskAccount: null,
            P1Instance: null,
            P2Instance: null,
            USDTInstance: null,

            yourInvestment: 0,
            yourRewards: 0,

            P1totalInvested: 0,
            P1totalRewardsPaid: 0,
            P2totalInvested: 0,
            P2totalRewardsPaid: 0,
            P1Allowance: false,
            P2Allowance: false,
            P1Stake: null,
            P2Stake: null,
            P1Reward: null,
            P2Reward: null,

            // calc
            pool: 1,
            isWithdraw: false,
            calAmount: 10,
            calTime: 1,
            calType: 'weekly',


            balance: 0,
            buyAmount: 0,
            getBalance: 0,
            getMyEggs: 0,
            claimedEggs: 0,
            referral: window.location.href,
            referrarAddr: null,

            // timer
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            timer: true,
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
                        56: "https://bsc-dataseed.binance.org/",
                    },
                    chainId: 56,
                    infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
                    pollingInterval: "10000",
                },
            },
        };

        console.log('providerOptions:', providerOptions);
        this.web3Modal = new Web3Modal({
            // providerOptions,
            theme: {
                background: "#f9c34e",
                main: "#000",
                secondary: "#000",
                border: "#49221a",
                hover: "#fff"
            },
            cacheProvider: false,
            disableInjectedProvider: false,
        });
    },
    mounted() {
        this.onConnect()
    },
    methods: {
        async readValues() {
            Promise.all([
                this.USDTInstance.methods.balanceOf(this.metamaskAccount).call(),
                this.USDTInstance.methods
                    .allowance(this.metamaskAccount, P1Address)
                    .call(),
                this.USDTInstance.methods
                    .allowance(this.metamaskAccount, P2Address)
                    .call(),
                this.P1Instance.methods.stake(this.metamaskAccount).call(),
                this.P1Instance.methods.totalInvested().call(),
                this.P1Instance.methods.totalRewardsPaid().call(),
                this.P2Instance.methods.stake(this.metamaskAccount).call(),
                this.P2Instance.methods.totalInvested().call(),
                this.P2Instance.methods.totalRewardsPaid().call(),
            ]).then(([balance, P1Allowance, P2Allowance, P1Stake, P1totalInvested, P1totalRewardsPaid, P2Stake, P2totalInvested, P2totalRewardsPaid]) => {
                console.log('balance:', balance);

                console.log('P1Allowance:', P1Allowance);
                console.log('P1Stake:', P1Stake);
                console.log('P1totalInvested:', P1totalInvested);
                console.log('P1totalRewardsPaid:', P1totalRewardsPaid);
                console.log('-------------------');
                console.log('P2Allowance:', P2Allowance);
                console.log('P2Stake:', P2Stake);
                console.log('P2totalInvested:', P2totalInvested);
                console.log('P2totalRewardsPaid:', P2totalRewardsPaid);

                if (balance == 0) {
                    this.balance = balance;
                } else {
                    this.balance = this.fixedDecimal(parseFloat(balance / 1e18), 2);
                }
                this.P1Allowance = Number(P1Allowance) > 0 ? true : false;
                this.P2Allowance = Number(P2Allowance) > 0 ? true : false;

                this.P1totalInvested = this.fixedDecimal(parseFloat(P1totalInvested / 1e18));
                this.P1totalRewardsPaid = this.fixedDecimal(parseFloat(P1totalRewardsPaid / 1e18));
                this.P2totalInvested = this.fixedDecimal(parseFloat(P2totalInvested / 1e18));
                this.P2totalRewardsPaid = this.fixedDecimal(parseFloat(P2totalRewardsPaid / 1e18));
                this.P1Stake = this.fixedDecimal(parseFloat(P1Stake.stake / 1e18));
                this.P1Reward = this.fixedDecimal(parseFloat(P1Stake.unclaimedReward / 1e18));
                this.P2Stake = this.fixedDecimal(parseFloat(P2Stake.stake / 1e18));
                this.P2Reward = this.fixedDecimal(parseFloat(P2Stake.unclaimedReward / 1e18));
            });
        },
        fixedDecimal(num, dig) {
            if (dig)
                return num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
            else
                return num.toString().match(/^-?\d+(?:\.\d{0,-1})?/)[0]
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
            if (this.chainId !== 56) {
                this.notify("Please Connect You Wallet to Binance Smart Chain");
                return;
            }

            let accounts = await this.web3Object.eth.getAccounts();
            this.metamaskAccount = accounts[0]
            this.referral = window.location.href + '?ref=' + this.metamaskAccount
            this.referrarAddr = window.location.search ? window.location.search.slice(5) : this.metamaskAccount

            this.P1Instance = new this.web3Object.eth.Contract(
                POOLABI,
                P1Address
            );
            this.P2Instance = new this.web3Object.eth.Contract(
                POOLABI,
                P2Address
            );
            this.USDTInstance = new this.web3Object.eth.Contract(
                USDTABI,
                USDTAddress
            );

            this.readValues();
        },

        onAction() {
            let instance = null
            let address = null

            if (this.pool == 1) {
                instance = this.P1Instance;
                address = P1Address;
                if (this.P1Allowance)
                    this.isWithdraw ? this.onWithdraw(instance, address) : this.onDeposit(instance, address)
                else this.onApprove(instance, address)
            } else {
                instance = this.P2Instance;
                address = P2Address;
                if (this.P2Allowance)
                    this.isWithdraw ? this.onWithdraw(instance, address) : this.onDeposit(instance, address)
                else this.onApprove(instance, address)
            }
        },

        onApprove(instance, address) {
            this.USDTInstance.methods
                .approve(address, "1000000000000000000000000000")
                .send({
                    from: this.metamaskAccount,
                })
                .on("transactionHash", (hash) => {
                    console.log("Transaction Hash: ", hash);
                    this.notify("Transaction is Submitted!");
                })
                .on("receipt", (receipt) => {
                    this.readValue();
                    console.log("Receipt: ", receipt);
                    this.notify("Transaction is Completed!");
                })
                .on("error", (error, receipt) => {
                    console.log("Error receipt: ", receipt);
                    this.notify("Transaction is Rejected!");
                });
        },

        onDeposit(instance) {
            if (Number(this.balance) < Number(this.buyAmount)) {
                this.notify("Insufficient balance");
                return
            }

            let amount = parseFloat(this.buyAmount * 1e18)

            instance.methods
                .deposit(this.referrarAddr, amount.toString())
                .send({
                    from: this.metamaskAccount,
                })
                .on("transactionHash", (hash) => {
                    console.log("Transaction Hash: ", hash);
                    this.notify("Transaction is Submitted!");
                })
                .on("receipt", (receipt) => {
                    this.readValue();
                    console.log("Receipt: ", receipt);
                    this.notify("Transaction is Completed!");
                })
                .on("error", (error, receipt) => {
                    console.log("Error receipt: ", receipt);
                    this.notify("Transaction is Rejected!");
                });
        },

        onWithdraw(instance) {
            let amount = parseFloat(this.buyAmount * 1e18)
            instance.methods
                .withdraw(amount.toString())
                .send({
                    from: this.metamaskAccount,
                })
                .on("transactionHash", (hash) => {
                    console.log("Transaction Hash: ", hash);
                    this.notify("Transaction is Submitted!");
                })
                .on("receipt", (receipt) => {
                    this.readValue();
                    console.log("Receipt: ", receipt);
                    this.notify("Transaction is Completed!");
                })
                .on("error", (error, receipt) => {
                    console.log("Error receipt: ", receipt);
                    this.notify("Transaction is Rejected!");
                });
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
                    maxWidth: "90%"
                },
            }).showToast();
        },

        toggleContest() {
            this.contest = !this.contest
            document.getElementById("contest").styles.display = "flex"
        },
        addrTruncation(addr) {
            return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
        },
        onDisconnect() {
            localStorage.clear();
            this.web3Object = null;
            this.metamaskAccount = null
        },

        copyStringToClipboard() {
            var el = document.createElement('textarea');
            el.value = this.referral;
            el.setAttribute('readonly', '');
            el.style = { position: 'absolute', left: '-9999px' };
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.notify("Copied!");
        },

        copyToClipBoard() {
            var content = document.getElementById('refArea');
            console.log(content)
            content.select();
            document.execCommand('copy');
            this.notify("Copied!");
        }
    },
    computed: {
        profitCal() {
            let totalDays = this.calTime * 7;
            if (this.calAmount)
                return (totalDays * 2 * this.calAmount / Number(100)).toFixed(2)
            else return ""
        },
        stakeCal() {
            if (this.calAmount)
                return (this.calAmount + Number(this.profitCal)).toFixed(2)
            else return ""
        }
    }
});