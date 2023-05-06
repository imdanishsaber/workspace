const CONTRACT_ADDRESS = "0x06c6a03c40dAEdA4FB9d2978a7B3050e11195Fe5";
const CONTRACT_ABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "aAmt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aETime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aSTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aTot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "airdropClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "clear", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_refer", "type": "address" }], "name": "getAirdrop", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sETime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sSTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sTot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }], "name": "safeTransferToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "safeTransferTokenWithAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }], "name": "start", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_aSTime", "type": "uint256" }, { "internalType": "uint256", "name": "_aETime", "type": "uint256" }, { "internalType": "uint256", "name": "_aAmt", "type": "uint256" }, { "internalType": "uint256", "name": "_aCap", "type": "uint256" }], "name": "startAirdrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_sSTime", "type": "uint256" }, { "internalType": "uint256", "name": "_sETime", "type": "uint256" }, { "internalType": "uint256", "name": "_sPrice", "type": "uint256" }, { "internalType": "uint256", "name": "_sCap", "type": "uint256" }], "name": "startSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }], "name": "tokenBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_refer", "type": "address" }], "name": "tokenSale", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewAirdrop", "outputs": [{ "internalType": "uint256", "name": "StartTime", "type": "uint256" }, { "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "internalType": "uint256", "name": "DropCap", "type": "uint256" }, { "internalType": "uint256", "name": "DropCount", "type": "uint256" }, { "internalType": "uint256", "name": "DropAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewSale", "outputs": [{ "internalType": "uint256", "name": "StartTime", "type": "uint256" }, { "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "internalType": "uint256", "name": "Price", "type": "uint256" }, { "internalType": "uint256", "name": "Cap", "type": "uint256" }, { "internalType": "uint256", "name": "Total", "type": "uint256" }], "stateMutability": "view", "type": "function" }];

var app = new Vue({
    el: "#page",
    data() {
        return {
            getWeb3: null,
            tokenSaleAmount: 0.01,
            selectedAccount: null,
            contractInstance: null,
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
                        56: "https://bsc-dataseed1.binance.org:443",
                    },
                    network: "binance",
                    chainId: 56,
                    infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
                    pollingInterval: "10000",
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
        async onConnect(flag) {
            try {
                let provider = await this.web3Modal.connect();
                this.onProvider(provider, flag);
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },
        async onProvider(provider, flag) {
            try {
                this.getWeb3 = new Web3(provider);
                let accounts = await this.getWeb3.eth.getAccounts();

                this.selectedAccount = accounts[0]
                this.contractInstance = new this.getWeb3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
                console.log("Wallet Connected Successfully!");
                this.notify("Wallet Connected Successfully!")
                if (flag == 'one')
                    this.getAirdrop()
                else if (flag == 'two')
                    this.tokenSale()
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },
        async getAirdrop() {
            if (!this.selectedAccount) {
                this.onConnect('one')
                return;
            }

            this.contractInstance.methods.getAirdrop(this.selectedAccount)
                .send({
                    from: this.selectedAccount,
                })
                .on('transactionHash', (hash) => {
                    console.log("Transaction Hash: ", hash)
                    this.notify("Transaction is submitted to the network")
                })
                .on('receipt', (receipt) => {
                    this.isDisabled = false;
                    console.log("Receipt: ", receipt)
                    this.notify("Transaction Completed Successfully")
                })
                .on('error', (error, receipt) => {
                    this.isDisabled = false;
                    console.log("Error receipt: ", receipt)
                    this.notify("Transaction Rejected")
                });
        },
        async tokenSale() {
            if (!this.selectedAccount) {
                this.onConnect('two')
                return;
            }
            if (this.tokenSaleAmount <= 0) {
                this.$toasted.error("Enter Amount!");
                return;
            }

            let value = this.getWeb3.utils.toHex(
                this.getWeb3.utils.toWei(this.tokenSaleAmount.toString(), "ether")
            );
            this.contractInstance.methods.tokenSale(this.selectedAccount)
                .send({
                    from: this.selectedAccount,
                    value: value
                })
                .on('transactionHash', (hash) => {
                    console.log("Transaction Hash: ", hash)
                    this.notify("Transaction is submitted to the network")
                })
                .on('receipt', (receipt) => {
                    this.isDisabled = false;
                    console.log("Receipt: ", receipt)
                    this.notify("Transaction Completed Successfully")
                })
                .on('error', (error, receipt) => {
                    this.isDisabled = false;
                    console.log("Error receipt: ", receipt)
                    this.notify("Transaction Rejected")
                });
        },
        addrTruncation(addr) {
            return (
                addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length)
            );
        },
        copyText() {
            this.notify("Referral address Copied!")
            let text = "https://crickettoken.cc/?address=" + this.selectedAccount
            navigator.clipboard.writeText(text);
        },
        disconnect() {
            this.getWeb3 = null;
            this.tokenSaleAmount = null;
            this.selectedAccount = null;
            this.contractInstance = null;
        },
        notify(msg) {
            Toastify({
                text: msg,
                duration: 3000,
                gravity: "bottom",
                position: "right",
            }).showToast();
        }
    }
});