const CONTRACT_ADDRESS = "0x9baeb260907a001f95000736e55dcb41a20be428";
const CONTRACT_ABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "aAmt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aETime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aSTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "aTot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "airdropClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "clear", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_refer", "type": "address" }], "name": "getAirdrop", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sETime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sSTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sTot", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }], "name": "safeTransferToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "safeTransferTokenWithAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }], "name": "start", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_aSTime", "type": "uint256" }, { "internalType": "uint256", "name": "_aETime", "type": "uint256" }, { "internalType": "uint256", "name": "_aAmt", "type": "uint256" }, { "internalType": "uint256", "name": "_aCap", "type": "uint256" }], "name": "startAirdrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_sSTime", "type": "uint256" }, { "internalType": "uint256", "name": "_sETime", "type": "uint256" }, { "internalType": "uint256", "name": "_sPrice", "type": "uint256" }, { "internalType": "uint256", "name": "_sCap", "type": "uint256" }], "name": "startSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }], "name": "tokenBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_refer", "type": "address" }], "name": "tokenSale", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewAirdrop", "outputs": [{ "internalType": "uint256", "name": "StartTime", "type": "uint256" }, { "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "internalType": "uint256", "name": "DropCap", "type": "uint256" }, { "internalType": "uint256", "name": "DropCount", "type": "uint256" }, { "internalType": "uint256", "name": "DropAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "viewSale", "outputs": [{ "internalType": "uint256", "name": "StartTime", "type": "uint256" }, { "internalType": "uint256", "name": "EndTime", "type": "uint256" }, { "internalType": "uint256", "name": "Price", "type": "uint256" }, { "internalType": "uint256", "name": "Cap", "type": "uint256" }, { "internalType": "uint256", "name": "Total", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

var app = new Vue({
    el: "#app",
    data() {
        return {
            web3: null,
            buyAmount: 0.01,
            walletAddress: null,
            instance: null,

            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            text7: "",
            text8: "",
            text9: "",
            text10: "",
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
        // this.onConnect()
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
                console.log("Wallet Connected Successfully!");
                this.notify("Wallet Connected Successfully!", "#07bc0c")
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },
        async getAirdrop() {
            if (!this.walletAddress) {
                this.onConnect()
                return;
            }

            this.instance.methods.getAirdrop(this.walletAddress)
                .send({
                    from: this.walletAddress,
                })
                .on('transactionHash', (hash) => {
                    console.log("Transaction Hash: ", hash)
                    this.notify("Transaction is submitted to the network", "#07bc0c")
                })
                .on('receipt', (receipt) => {
                    this.isDisabled = false;
                    console.log("Receipt: ", receipt)
                    this.notify("Transaction Completed Successfully", "#07bc0c")
                })
                .on('error', (error, receipt) => {
                    this.isDisabled = false;
                    console.log("Error receipt: ", receipt)
                    this.notify("Transaction Rejected", "#ff0000")
                });
        },
        async tokenSale() {
            if (!this.walletAddress) {
                this.onConnect()
                return;
            }
            if (this.buyAmount <= 0) {
                this.$toasted.error("Enter Amount!");
                return;
            }

            let value = this.web3.utils.toHex(
                this.web3.utils.toWei(this.buyAmount.toString(), "ether")
            );
            this.instance.methods.tokenSale(this.walletAddress)
                .send({
                    from: this.walletAddress,
                    value: value
                })
                .on('transactionHash', (hash) => {
                    console.log("Transaction Hash: ", hash)
                    this.notify("Transaction is submitted to the network", "#07bc0c")
                })
                .on('receipt', (receipt) => {
                    this.isDisabled = false;
                    console.log("Receipt: ", receipt)
                    this.notify("Transaction Completed Successfully", "#07bc0c")
                })
                .on('error', (error, receipt) => {
                    this.isDisabled = false;
                    console.log("Error receipt: ", receipt)
                    this.notify("Transaction Rejected", "#ff0000")
                });
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