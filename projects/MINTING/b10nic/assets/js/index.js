// Smart Contract Details
const contractAddress = "0x76E4aF25B648994092Bce2Df860dd5836708a8B3";
const contractABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPriceInWei","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
var app = new Vue({
    el: "#app",
    data() {
        return {
            cost: "0.08",
            mintAmount: 1,
            web3Object: '',
            metamaskAccount: '',
            maxSupply: null,
            totalSupply: null,
        };
    },
    mounted() {
        this.readValues();
        
        // [ILLUM 1 IMAGE ON SCROLL]
        const uniqueImage = document.querySelector('.unique_example_img');
        window.addEventListener('scroll', () => {
            let x = uniqueImage.getBoundingClientRect().top;
            if (x <= 500 && x >= -500) {
                uniqueImage.classList.add('active_illum');
            } else {
                uniqueImage.classList.remove('active_illum');
            }
        })

        const teamSec = document.querySelector('#team');
        const bot = document.querySelector('.bot')
        window.addEventListener('scroll', () => {
            let x = teamSec.getBoundingClientRect().top;
            if (x <= 500 && x >= -500) {
                bot.classList.add('active-bot');
            } else {
                bot.classList.remove('active-bot');
            }
        })


        // [SLIDER]
        var slider = tns({
            container: '.slider-actor',
            slideBy: 1,
            items: 2,
            gutter: 10,
            speed: 500,
            center: true,
            autoplay: false,
            navAsThumbnails: true,
            controls: false,
            navContainer: '.slider-actor-pagination',
            "responsive": {
                "700": {
                    "items": 3,
                    gutter: 20,
                },
                "1100": {
                    "items": 4,
                    gutter: 20,
                },

            },
        });

        slider.events.on("transitionStart", function (info) {
            info.slideItems[info.indexCached].classList.remove(
                "active-slide"
            );

            info.slideItems[info.index].classList.add(
                "active-slide"
            );
        });



        // [FIXED SIDEBAR]
        const sidebar = document.querySelector('#roadmap');
        const fixedItem = document.querySelector('#helmet');

        window.addEventListener('scroll', () => {
            let x = sidebar.getBoundingClientRect();
            let y = x.top;
            let z = x.height;
            if (y <= 0) {
                fixedItem.style.transform = `translateY(${-y}px)`
            }
            if (-(y - 300) >= z) {
                fixedItem.style.transform = `translateY(${z - 300}px)`
            }
            if (y <= -200 && -(y - 600) <= z) {
                fixedItem.classList.add('active-illum');
            } else {
                fixedItem.classList.remove('active-illum');
            }
        })



        // [PLAY VIDEO]
        var video = document.querySelectorAll('video');
        video.forEach(el => {
            el.muted = true;
            el.loop = true;
            el.play();
            el.controls = false;
        })
    },
    methods: {
        async onConnect() {
            if (window.ethereum) {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                this.web3Object = new Web3(window.ethereum);

                let accounts = await this.web3Object.eth.getAccounts();
                this.metamaskAccount = accounts[0];
                this.contractInstance = new this.web3Object.eth.Contract(
                    contractABI,
                    contractAddress
                );
                this.notify("Wallet Connected!");
            } else {
                this.notify("Please install metamask!");
            }
        },
        readValues() {
            const web3 = new Web3("https://mainnet.infura.io/v3/d85fda7b424b4212ba72f828f48fbbe1");
            let instance = new web3.eth.Contract(
                contractABI,
                contractAddress
            );
            Promise.all([
                instance.methods.maxSupply().call(),
                instance.methods.totalSupply().call()
            ]).then(([maxSupply, totalSupply]) => {
                console.log(maxSupply, totalSupply);
                this.maxSupply = maxSupply;
                this.totalSupply = totalSupply;
            });
        },
        mintToken() {
            if(Number(this.mintAmount) > 4){
                this.notify("Maximum minting quantity is 4.");
                return
            }
            let mintPrice = Number(this.mintAmount) * Number(this.cost);
            let value = this.web3Object.utils.toHex(
                this.web3Object.utils.toWei(mintPrice.toString(), "ether")
            );
            this.contractInstance.methods
                .mint(Number(this.mintAmount))
                .send({
                    from: this.metamaskAccount,
                    to: contractAddress,
                    value: value,
                })
                .on("transactionHash", (hash) => {
                    console.log("Transaction Hash: ", hash);
                    this.notify("Transaction is submitted");
                })
                .on("receipt", (receipt) => {
                    this.readValue();
                    console.log("Receipt: ", receipt);
                    this.notify("Token Minted Successfully");
                })
                .on("error", (error, receipt) => {
                    console.log("Error receipt: ", receipt);
                    this.notify("Transaction Rejected");
                });
        },
        notify(msg) {
            Toastify({
                text: msg,
                duration: 3000,
                gravity: "bottom",
                position: "right",
            }).showToast();
        }
    },
});