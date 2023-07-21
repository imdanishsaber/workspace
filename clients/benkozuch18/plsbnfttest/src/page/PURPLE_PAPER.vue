<template>
  <div class="stake_card_body">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="mb-2">Purple Paper</h4>
        </div>
        <p class="text-muted">

          "TLDR; You lock up your PLSB in an NFT for a certain number of days, and then later burn that NFT to get your coins back.
          <br /><br />
          The way this app works is quite simple. You choose how many PLSB tokens you want to lock up in the smart contract and how long you want to lock them up. You can also choose whether you want the generated NFT to be transferable or non-transferable. If it is non-transferable, you cannot transfer the NFT to another wallet or sell it on an NFT marketplace like OpenSea. (You might want to do this if you are interested in really locking up your coins and not being able to do anything with them for the chosen time period.)
          <br /><br />
          By default, the NFT will be minted to the wallet connected to the DAPP. However, you can choose to mint the NFT to another wallet, even for a non-transferable NFT.
          <br /><br />
          Then, you click the 'Lock' button at the bottom. (If this is your first NFT for this wallet, you'll need to approve the wallet to interact with your PLSB.) Once you click 'Lock,' the PLSB tokens will be transferred and held in the smart contract, and the smart contract will mint a new NFT to your wallet (or the wallet you specified).
          <br /><br />
          That NFT will be associated with those PLSB tokens. When your lock-up period is over, you can choose to burn your NFT and get your PLSB tokens back. You can also delay burning your NFT as long as you want with no penalty. However, before the lock-up period is over, it is impossible to burn the NFT and get your coins back.
          <br /><br />
          Oh, and by the way, you also get to choose a cool picture and a creative statement that will be (loosely) associated with your NFT.
          <br /><br />
          You can also head over to the gallery, where you can view everyone's NFTs and sort and filter by different attributes. Clicking on any NFT image in the gallery will take you to its OpenSea page."
          <br /><br />

        </p>
        <hr />

        <div class="d-flex justify-content-between align-items-center">
          <h4 class="mb-2">Useful Links</h4>
        </div>
        <ul class="rss">
          <li><a href="https://looksrare.org/collections/0x1f06E2bb54D4d08b0EbD01Be66DB2F7cCB9C814B">looksrare.org PulseBitcoinLock Collection</a></li>
          <li><a :href="`${ETHERSCAN_URL_BASE}address/${CONTRACT_ADDRESS}`">Etherscan -> smart contract</a></li>
          <li><a :href="`${ETHERSCAN_URL_BASE}token/${CONTRACT_ADDRESS}`">Etherscan -> token</a></li>
          <li><a href="https://pulsebitcoin.app">Mine PLSB at PulseBitcoin.app</a></li>
          <li><a href="https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x5EE84583f67D5EcEa5420dBb42b462896E7f8D06&chain=mainnet">Buy more PLSB on Uniswap!</a></li>
          <li><a href="https://twitter.com/PLSBLockWin">Follow me on twitter</a></li>
          <li><a href="https://t.me/PulseBitcoinLock">Join Our telegram group</a></li>
        </ul>

        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="mb-2">F.A.Q.</h4>
        </div>
        <div id="accordion">



          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Can I make more than 1 NFT in the same wallet
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                yes
              </div>
            </div>
          </div>


          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Once my lock up period is over do I have to Burn my NFT?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                Nope. You and your NFT can hang out for all eternity together but you will always have the option to burn it. And as mentioned above, before the lock up period is over, it is impossible to burn your NFT.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Why would I lock up my {{TOKEN_SYMBOL}}?!?!
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                1) Its a great HODL tool, if you're interested in holding long term and want to prevent yourself from
                selling.
                <br>2) Its great for security: If you lock up your PulseBitcoin in a Non-Transferable NFT, then even
                if your wallet gets hacked, then the thief has no way of getting a hold of your PulseBitcoin whatsoever until the locking period
                is over, and by that point he will most likely forget about your wallet.
                <br>3) This is great for giveaways and contests because you can
                mint a Non-Transferable PulseBitcoinLock NFT straight to someones wallet and that will prevent them from selling. And most
                people who recieve a crypto reward giveway, sell right away, so this prevents that.
                <br>4) OTC - Lock up your PulseBitcoin
                and sell the NFT on an open marketplace (like opensea) so that way you dont have to endure slippage.
                <br> 5) Be creative and
                express yourself and your financial goals by choosing your own picture and description that inspires you. You can even
                advertise your own business. Just choose your business logo as the NFT picture and put your pitch in the NFT description.
                <br> 6) By locking up your PulseBitcoin, you are making a statement to the community that you are a long term holder and
                our community is a community of long term holders. #bullish
                <br> 7) Last but not least, I will be releasing a project very soon that will reward PulseBitocinLock NFT holders with some
                YIELD! stay tuned.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                >
                  Can I view my NFT's in MetaMask?
                </button>
              </h5>
            </div>
            <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
            >
              <div class="card-body">
                Yes! In metamask click "Import Tokens" just like you would add any other erc-20,
                then for Token Contract address put in the contract address of the PulseBitcoinLock smart contract...
                at the time of writing, it hasnt been deployed on mainnet so not putting the address here now...
                but once we go to mainnet someone remind to put the address here if you cant figure it out.
                Also for "Token decimal" put 0
              </div>
            </div>
          </div>


          <div class="card">
            <div class="card-header" id="headingSix">
              <h5 class="mb-0">
                <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                >
                  What are the penalties if I Emergency Unlock and Burn my NFT?
                </button>
              </h5>
            </div>
            <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordion"
            >
              <div class="card-body">
                Well, you CANNOT unlock early...its just impossible. This is not like HEX. In hex you can unstake early and get punished.
                Here at PulseBitcoinLock, you cannot unlock/burn early so therefore no penalties. However if you really want or need the money
                you can always sell your NFT on Opensea.io although I hear its a hassle and none of the cool kids are doing that.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSeven">
              <h5 class="mb-0">
                <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                >
                  Can I utilize PulseBitcoinLock as an OTC secondary market?
                </button>
              </h5>
            </div>
            <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordion"
            >
              <div class="card-body">
                Yes, lets say you want to sell a lot of {{TOKEN_SYMBOL}} but dont want to kill the price and face slippage,
                you can lock up that {{TOKEN_SYMBOL}} in an NFT (even for 1 day lock period) and then sell it on Opensea for whatever price you want...
                then call your whale friends on the phone and be like "Hey, I got the stuff, you buyin?" clicking on any NFT image in the gallery will take you to its OpenSea page.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingEight">
              <h5 class="mb-0">
                <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                >
                  What yield can I get on this NFT? (really the MOST frequent question lol) :facepalm"
                </button>
              </h5>
            </div>
            <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordion"
            >
              <div class="card-body">
                <s>People love yield! happens to be, the thing that's gonna make you wealthy in crypto is price appreciation from holding long term...
                  so no yield for PulseBitcoinLock NFT holders, but youll most likely walk away with mad gainz.</s> That was my answer when this project first launched
                however my upcoming project will allow PulseBitcoinLock NFT holders to get some yield so stay tuned for March
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingNine">
              <h5 class="mb-0">
                <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                >
                  How can I burn my NFT and get my {{TOKEN_SYMBOL}} back?
                </button>
              </h5>
            </div>
            <div
                id="collapseNine"
                class="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordion"
            >
              <div class="card-body">
                Once your Lock period is over, go to the Lock & Mint NFT tab and look for your NFT in the "Your NFTs" section,
                there should now be a "Burn" button in your NFT card. Click that button. Remember just because your lock period is over,
                doesnt mean you have to Burn your NFT, you could just chill with your NFT for another couple years if you want.
                OR you can Burn it and lock the {{TOKEN_SYMBOL}} again with a different picture and statement
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTen">
              <h5 class="mb-0">
                <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                >
                  Is @hexinfo or Wolverine involved in this project?
                </button>
              </h5>
            </div>
            <div
                id="collapseTen"
                class="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordion"
            >
              <div class="card-body">
                No, they are not related to this project and you would have to ask them for their opinion on it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
