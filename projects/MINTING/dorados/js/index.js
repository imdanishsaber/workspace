const NETWORK = 'main';
let selectedAccount = null;
let mintAddress = "0x3E93F61423516d36623c1A0651f7626690B4EAe9";
let mintABI = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "string", "name": "baseURI_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "startWith", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "times", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CLAIM_MAX_WALLET", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CURRENT_SUPPLY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_PUDGY_CLAIM", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PUDGY_CLAIMS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_contractAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBatch", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_times", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pudgyAddress", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "pudgyClaim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_pudgyAddress", "type": "address" }], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_start", "type": "bool" }], "name": "setPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_start", "type": "bool" }], "name": "setStart", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "tokensOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]


$('#mint').hide();
$("#connect").click(async function () {
    if (window.ethereum) {
        let accounts = await window.ethereum.request({
            'method': 'eth_requestAccounts'
        });
        window.web3 = new Web3(window.ethereum);
        await window.web3.eth.net.getNetworkType()
            .then((network) => {
                console.log(network);
                if (network !== NETWORK) {
                    alert("You are on " + network + " network. Change network to " + NETWORK + " or you won't be able to do anything here")
                    return
                } else {
                    $('#connect').hide();
                    $('#mint').show();
                    selectedAccount = accounts[0];
                    if (accounts.length) {
                        notify("Wallet Connected Successfully")
                    }
                }
            })
            .catch((e) => {
                console.log(e)
            })
    } else {
        notify("Please install metamask wallet")
    }
})
$("#mint").click(function () {
    let mint_amount = $(".count").html()
    let mint_price = Number(mint_amount) * Number(0.03)
    let amount = Number(mint_price) * 1e18

    let mintInstance = new window.web3.eth.Contract(mintABI, mintAddress)
    mintInstance.methods.mint(Number(mint_amount))
        .send({
            from: selectedAccount,
            value: amount
        })
        .on('transactionHash', function (hash) {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', function (receipt) {
            console.log("Receipt: ", receipt)
            notify("Transaction Completed Successfully")
        })
        .on('error', function (error, receipt) {
            console.log("Error receipt: ", receipt)
            notify("Transaction Rejected")
        });
})
$("#addOne").click(function () {
    let value = $(".count").html()
    if (value == 5) return
    value = Number(value) + 1
    $('.count').html(value);
})

$("#subOne").click(function () {
    console.log('Danish ')
    let value = $(".count").html()
    if (value == 1) return
    value = Number(value) - 1
    $('.count').html(value);

})
$(document).ready(function () {
    $('.card-slider').slick({
        slidesToShow: 3,
        dots: false,
        infinite: true,
        centerMode: true,
        // the magic
        responsive: [
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
// $(document).ready(function() {
//     $('.demo').slick();
// });
// $(document).ready(function() {
//     console.log($('.card-slider'))
//     $('.card-slider').slick({
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 800,
//         speed: 300,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2
//             }
//         }, {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1
//             }
//         }]
//     });
// });

$('.slide-right').click(function () {
    $('.card-slider').slick('slickNext');
});
$('.slide-left').click(function () {
    $('.card-slider').slick('slickPrev');
});

function notify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            color: '#fff',
            background: '#ff9233',
            fontWeight: '400',
            fontSize: '15px',
            border: '1px solid #c3e6cb',
        }
    }).showToast();
}