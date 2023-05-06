<template>
  <div>
    <div class="row align-items-center">
      <div class="col-12 col-lg-5 text-center text-lg-left">
        <img class="ml-lg-5 pl-lg-5" src="@/assets/hero_text.png" alt="" />
      </div>
      <div class="col-12 col-lg-7 text-center text-lg-right">
        <img class="hero_img" src="@/assets/hero_img.png" alt="" />
      </div>
    </div>
    <section class="py-0">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center">Transition</h2>
          <div class="position-relative">
            <img class="bg1" src="@/assets/bg1.png" alt="" />
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 text-center mt-5">
              <h5>Choose your forgotten Lad</h5>
              <img
                class="mx-lg-5 mt-3"
                width="350px"
                src="@/assets/p4.png"
                alt=""
              />
            </div>
            <div class="col-12 col-lg-6 text-center mt-5">
              <h5>Present Lad</h5>
              <img
                class="mx-lg-5 mt-3"
                width="350px"
                src="@/assets/p1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-0">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10">
          <h2 class="text-center">Minting</h2>
          <div class="position-relative">
            <img class="bg2" src="@/assets/bg2.png" alt="" />
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="mb-4">{{ totalSupply }} / {{ maxSupply }}</h3>
              <p class="card-text">
                {{ cost }} BCH per Lad <br />
                (excluding gad fees)
              </p>
              <div class="box mt-5">
                <img
                  class="cursor-pointer"
                  @click="deceaseAmt"
                  src="@/assets/min.png"
                  alt=""
                />
                <small>{{ mintAmount }}</small>
                <img
                  class="cursor-pointer"
                  @click="inceaseAmt"
                  src="@/assets/max.png"
                  alt=""
                />
              </div>
              <br /><br />
              <small
                >Please make sure you are connected to the correct address and
                the correct <br />
                network (SmartBCH Mainnet) before purchasing. The operation
                cannot be undone after purchase.</small
              >
              <br />

              <button
                type="button"
                :disabled="isLoading"
                class="btn btn-primary my-5"
                @click.prevent="mintToken"
              >
                {{ isLoading ? "Pending..." : "BUY" }}
              </button>
              <br /><br /><br />
              <div class="stats">
                <div class="d-flex justify-content-around">
                  <div>
                    <p class="m-0">{{ totalSupply }}</p>
                    <small>Minted</small>
                  </div>
                  <img src="@/assets/line.png" alt="" />
                  <div>
                    <p class="m-0">{{ maxSupply - totalSupply }}</p>
                    <small>Left</small>
                  </div>
                  <img src="@/assets/line.png" alt="" />
                  <div>
                    <p class="m-0">{{ maxSupply }}</p>
                    <small>Total NFT</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="position-relative">
            <img class="bg3" src="@/assets/bg3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="pb-0">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10">
          <h2 class="text-center">Lads Roadmap</h2>
          <p class="text-center">
            The Present Lads project aims to show progressive nature of life by
            bringing light to the <br />
            multiple versions of ourselves that exist. We’ll do this in three
            stages.
          </p>
          <div class="row py-5">
            <div class="col-12 col-lg-6 text-center text-lg-left">
              <h4 class="mt-3 mb-5">Stage 1: Forgotten Lads</h4>
              <p>
                This stage introduces our first drop of NFTs; a generative art
                collection of 7500 Forgotten Lads. Once minted, the holders of
                these NFTs will have the unique opportunity to make them their
                own, by adding their own story as the NFTs description. In a
                purposeful attempt at highlighting your individual journey, each
                holder is encouraged to talk about the trials of their past, and
                what they have been through.
              </p>
            </div>
            <div class="col-12 col-lg-6 text-center text-lg-right">
              <img width="350px" src="@/assets/p3.png" alt="" />
            </div>
          </div>
          <div class="row py-5">
            <div
              class="col-12 col-lg-6 text-center text-lg-left d-none d-lg-block"
            >
              <img width="350px" src="@/assets/p2.png" alt="" />
            </div>
            <div class="col-12 col-lg-6 text-center text-lg-left">
              <h4 class="mt-3 mb-5">Stage 2: Present Lads</h4>
              <p>
                Our next stage of progression involves our second collection of
                NFTs - the Present Lads. These NFTs will be given to current
                holders to match the Forgotten Lads NFTs that they hold. In a
                similar fashion to the Forgotten Lads NFTs, holders will be able
                to provide a description for their Present Lads. Holders are now
                encouraged to include details of where they are in their life
                right now, and how that has changed since the events described
                in their Forgotten Lad descriptions.
              </p>
            </div>
            <div
              class="col-12 col-lg-6 text-center text-lg-left d-block d-lg-none"
            >
              <img width="350px" src="@/assets/p2.png" alt="" />
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-lg-6 text-center text-lg-left">
              <h4 class="mt-3 mb-5">Stage 3: The Future</h4>
              <p>
                The final stage on our journey is the introduction of our $LADS
                token, and a staking mechanic. At this point, holders will be
                given the opportunity to stake their Forgotten Lads and Present
                Lads NFTs in order to earn a number of $LADS tokens every month,
                for the next 20 years. This offers a means of passive income for
                our community, and displays a commitment to the future. By
                staking your NFTs, you’re deciding to put all of your effort
                into your future and releasing the weight of your past struggles
                and present-day stresses. Just as we all should
              </p>
            </div>
            <div class="col-12 col-lg-6 text-center text-lg-right">
              <img width="350px" src="@/assets/furute.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-0">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 text-center">
          <a href="https://twitter.com/LadNFTs" target="_blank">
            <img class="mx-lg-4" src="@/assets/twitter_btn.png" alt="" />
          </a>
          <a href="https://t.me/ladsnft" target="_blank">
            <img class="mx-lg-4" src="@/assets/telegram_btn.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Web3 from "web3";
import { mapGetters } from "vuex";
import minting from "@/contracts/minting.json";

export default {
  name: "Home",
  data() {
    return {
      cost: "0.026",
      mintAmount: 1,
      maxSupply: 0,
      totalSupply: 0,
      isLoading: false,
    };
  },
  mounted() {
    this.readValues();
  },
  methods: {
    deceaseAmt() {
      if (this.mintAmount === 1) return;
      this.mintAmount = this.mintAmount - 1;
    },

    inceaseAmt() {
      if (this.mintAmount === 10) return;
      this.mintAmount = this.mintAmount + 1;
    },

    readValues() {
      const web3 = new Web3("https://smartbch.fountainhead.cash/mainnet");
      let instance = new web3.eth.Contract(
        minting.contractABI,
        minting.contractAddress
      );
      Promise.all([
        instance.methods.maxSupply().call(),
        instance.methods.totalSupply().call(),
      ]).then(([maxSupply, totalSupply]) => {
        console.log(maxSupply, totalSupply);
        this.maxSupply = maxSupply;
        this.totalSupply = totalSupply;
      });
    },

    mintToken() {
      if (!this.getUserAccount) {
        this.$toasted.show("Wallet not Connected!");
        return;
      }
      let mintPrice = Number(this.mintAmount) * Number(this.cost);

      let value = this.getWeb3.utils.toHex(
        this.getWeb3.utils.toWei(mintPrice.toString(), "ether")
      );
      this.isLoading = true;
      this.getMintingInstance.methods
        .mint(this.getUserAccount, Number(this.mintAmount))
        .send({
          from: this.getUserAccount,
          to: minting.contractAddress,
          value: value,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to network!");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          this.isLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Minted Successfully!");
        })
        .on("error", (error, receipt) => {
          this.isLoading = false;
          console.log("Error receipt: ", error, receipt);
          this.$toasted.show("Transaction Rejected!");
        });
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getUserAccount",
      "getMintingInstance",
      "getStakingInstance",
      "getTokenInstance",
      "getERC20StakingInstance",
      "getRewardInstance",
    ]),
  },
};
</script>

