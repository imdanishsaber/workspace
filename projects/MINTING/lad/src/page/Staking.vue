<template>
  <div>
    <div class="row align-items-center">
      <div class="col-12 col-lg-6 text-center text-lg-left">
        <img
          class="ml-lg-5 pl-lg-5 my-5"
          src="@/assets/staking_text.png"
          alt=""
        />
      </div>
      <div class="col-12 col-lg-6 text-left">
        <img class="hero_img" src="@/assets/staking.png" alt="" />
      </div>
    </div>
    <section class="py-0">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8">
          <h2 class="text-center">Lads NFT Staking</h2>
          <div class="position-relative">
            <img class="bg2" src="@/assets/bg2.png" alt="" />
          </div>
          <div class="card">
            <div v-if="unstaked.length" class="card-body">
              <h5 class="mb-5">Not Stacked</h5>
              <carousel
                :loop="true"
                :autoplay="false"
                :speed="1000"
                :perPage="1"
                :navigationEnabled="true"
              >
                <slide v-for="(item, i) in unstaked" :key="i">
                  <div>
                    <div
                      class="d-flex justify-content-around align-items-center"
                    >
                      <img
                        @click="item.selected = !item.selected"
                        :class="item.selected ? 'person-bordered' : ''"
                        class="person rounded cursor-pointer"
                        :src="item.metadatas"
                        alt=""
                      />
                    </div>
                    <p class="mt-2">{{ item.tokenId }}</p>
                  </div>
                </slide>
              </carousel>
              <br />
              <small>
                SELECT NFTs YOU WOULD LIKE TO STAKE AND <br />
                CLICK THE STAKE BUTTON BELOW.</small
              >
              <br />
              <br />
              <strong
                >Selected:
                <template v-for="(item, i) in unstaked">
                  <span v-if="item.selected" :key="i + 'selected'">
                    {{ i === 0 ? "" : "-" }}
                    {{ item.tokenId }}
                  </span>
                </template>
              </strong>
              <br />
              <button
                v-if="isApproved"
                type="button"
                class="btn btn-primary mt-5"
                :disabled="isStakeLoading"
                @click.prevent="onStake"
              >
                {{ isStakeLoading ? "Pending..." : "Stake" }}
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary mt-5"
                :disabled="isApproveLoading"
                @click.prevent="onApprove"
              >
                {{ isApproveLoading ? "Pending..." : "Approve" }}
              </button>
            </div>
            <div v-else class="card-body">
              <h5>You do not minted any NFT.</h5>
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
        <div class="col-12 col-sm-8">
          <div class="position-relative">
            <img class="bg2" src="@/assets/bg3.png" alt="" />
          </div>
          <div class="card">
            <div v-if="staked.length" class="card-body">
              <h5 class="mb-5">Stacked</h5>
              <carousel
                :loop="true"
                :autoplay="false"
                :speed="1000"
                :perPage="1"
                :navigationEnabled="true"
              >
                <slide v-for="(item, i) in staked" :key="i">
                  <div>
                    <div
                      class="d-flex justify-content-around align-items-center"
                    >
                      <img
                        @click="item.selected = !item.selected"
                        :class="item.selected ? 'person-bordered' : ''"
                        class="person rounded cursor-pointer"
                        :src="item.metadatas"
                        alt=""
                      />
                    </div>
                    <p class="mt-2">{{ item.tokenId }}</p>
                  </div>
                </slide>
              </carousel>
              <br />
              <small>
                SELECT NFTs YOU WOULD LIKE TO STAKE AND <br />
                CLICK THE STAKE BUTTON BELOW.</small
              >
              <br />
              <br />
              <strong
                >Selected:
                <template v-for="(item, i) in staked">
                  <span v-if="item.selected" :key="i + 'selected'">
                    {{ i === 0 ? "" : "-" }}
                    {{ item.tokenId }}
                  </span>
                </template>
              </strong>
              <br />
              <button
                type="button"
                class="btn btn-secondary mt-5"
                :disabled="isUnstakeLoading"
                @click.prevent="onUnstake"
              >
                {{ isUnstakeLoading ? "Pending..." : "Unstake" }}
              </button>
            </div>
            <div v-else class="card-body">
              <h5>No NFT Stacked Yet</h5>
            </div>
          </div>
          <div class="position-relative">
            <img class="bg3" src="@/assets/bg4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8">
          <div class="card">
            <div class="card-body">
              <h3>$Lads EARNED: {{ pendingTotalReward }}</h3>
              <button
                type="button"
                class="btn btn-primary mt-5"
                :disabled="isClaimLoading"
                @click.prevent="onClaim"
              >
                {{ isClaimLoading ? "Pending..." : "Claim" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-0">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 text-center">
          <a href="https://app.mistswap.fi/swap" target="_blank">
            <img class="mx-lg-4" src="@/assets/binance_btn.png" alt="" />
          </a>
          <a href="https://oasis.cash" target="_blank">
            <img class="mx-lg-4" src="@/assets/nft_btn.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Web3 from "web3";
import minting from "@/contracts/minting.json";
import staking from "@/contracts/staking.json";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Staking",
  data() {
    return {
      // inputs
      stakeTokenId: null,
      unStakeTokenId: null,

      // loader
      isApproved: false,
      isApproveLoading: false,
      isStakeLoading: false,
      isUnstakeLoading: false,
      isClaimLoading: false,
      staked: [],
      unstaked: [],
      // readValues
      pendingTotalReward: null,
    };
  },
  mounted() {
    if (this.getUserAccount) this.readValues();
  },
  methods: {
    ...mapActions("wallet", [
      "SET_WEB3",
      "SET_USER_ACCOUNT",
      "SET_MINTING_INSTANCE",
      "SET_STAKING_INSTANCE",
    ]),

    addrTruncation(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },

    readValues() {
      const web3 = new Web3("https://smartbch.fountainhead.cash/mainnet");
      let mintingInstance = new web3.eth.Contract(
        minting.contractABI,
        minting.contractAddress
      );
      let stakingInstance = new web3.eth.Contract(
        staking.contractABI,
        staking.contractAddress
      );

      Promise.all([
        stakingInstance.methods.pendingTotalReward(this.getUserAccount).call(),
        mintingInstance.methods
          .isApprovedForAll(this.getUserAccount, staking.contractAddress)
          .call(),
      ]).then(([pendingTotalReward, isApprovedForAll]) => {
        console.log(pendingTotalReward, isApprovedForAll);
        this.isApproved = isApprovedForAll;
        this.pendingTotalReward = pendingTotalReward;
      });

      this.fetchUnStakedInfo(mintingInstance, stakingInstance);
      this.fetchStakedInfo(mintingInstance, stakingInstance);
    },

    async fetchUnStakedInfo(mintingInstance) {
      const balance = await mintingInstance.methods
        .balanceOf(this.getUserAccount)
        .call();
      console.log("UnStaked balance:", balance);

      for (let count = 0; count < balance; count++) {
        var result = {};
        const tokenId = await mintingInstance.methods
          .tokenOfOwnerByIndex(this.getUserAccount, count)
          .call();

        console.log("UnStaked tokenId:", tokenId);

        const metadata = await mintingInstance.methods.tokenURI(tokenId).call();

        console.log("UnStaked metadata:", metadata);

        const image = await this.getImageHash(metadata);

        result.tokenId = tokenId;
        result.metadatas = image;
        result.selected = false;
        this.unstaked.push(result);
      }

      console.log("UnStaked :", this.unstaked);
    },

    async fetchStakedInfo(mintingInstance, stakingInstance) {
      const balance = await stakingInstance.methods
        .stakingAmount(this.getUserAccount)
        .call();

      console.log("Staked balance:", balance);

      for (let count = 0; count < balance; count++) {
        var result = {};

        const stakedInfo = await stakingInstance.methods
          .getUserStakedInfo(this.getUserAccount)
          .call();

        console.log("Staked stakedInfo:", stakedInfo);

        const tokenInfo = stakedInfo[count];

        console.log("Staked tokenInfo:", tokenInfo);

        const metadata = await mintingInstance.methods
          .tokenURI(tokenInfo.tokenId)
          .call();

        console.log("Staked metadata:", metadata);

        const image = await this.getImageHash(metadata);

        result.tokenId = tokenInfo.tokenId;
        result.metadatas = image;
        result.selected = false;
        this.staked.push(result);
      }

      console.log("Staked:", this.staked);
    },

    async getImageHash(hashVal) {
      try {
        let response = await fetch(hashVal);
        let responseJson = await response.json();
        return responseJson.image;
      } catch (error) {
        console.error(error);
      }
    },

    onApprove() {
      if (!this.getUserAccount) {
        this.$toasted.show("Wallet not Connected!");
        return;
      }
      this.isApproveLoading = true;
      this.getMintingInstance.methods
        .setApprovalForAll(staking.contractAddress, true)
        .send({
          from: this.getUserAccount,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to network!");
        })
        .on("receipt", (receipt) => {
          this.isApproved = true;
          this.isApproveLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Claimed Successfully!");
        })
        .on("error", (error, receipt) => {
          this.isApproveLoading = false;
          console.log("Error receipt: ", error, receipt);
          this.$toasted.show("Transaction Rejected!");
        });
    },

    onStake() {
      if (!this.getUserAccount) {
        this.$toasted.show("Wallet not Connected!");
        return;
      }
      let ids = [];
      this.unstaked.forEach((nft) => {
        if (nft.selected) ids.push(nft.tokenId);
      });
      console.log(ids);
      if (!ids.length) {
        this.$toasted.show("Select NFTs to stake!");
        return;
      }
      this.isStakeLoading = true;
      this.getStakingInstance.methods
        .stake(ids)
        .send({
          from: this.getUserAccount,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to network!");
        })
        .on("receipt", (receipt) => {
          this.isStakeLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Staked Successfully!");
        })
        .on("error", (error, receipt) => {
          this.isStakeLoading = false;
          console.log("Error receipt: ", error, receipt);
          this.$toasted.show("Transaction Rejected!");
        });
    },

    onUnstake() {
      if (!this.getUserAccount) {
        this.$toasted.show("Wallet not Connected!");
        return;
      }
      let ids = [];
      this.staked.forEach((nft) => {
        if (nft.selected) ids.push(nft.tokenId);
      });
      console.log(ids);
      if (!ids.length) {
        this.$toasted.show("Select NFTs to Unstake!");
        return;
      }
      this.isUnstakeLoading = true;
      this.getStakingInstance.methods
        .unstake(ids)
        .send({
          from: this.getUserAccount,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to network!");
        })
        .on("receipt", (receipt) => {
          this.isUnstakeLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Unstaked Successfully!");
        })
        .on("error", (error, receipt) => {
          this.isUnstakeLoading = false;
          console.log("Error receipt: ", error, receipt);
          this.$toasted.show("Transaction Rejected!");
        });
    },

    onClaim() {
      if (!this.getUserAccount) {
        this.$toasted.show("Wallet not Connected!");
        return;
      }
      this.isClaimLoading = true;
      this.getStakingInstance.methods
        .claim()
        .send({
          from: this.getUserAccount,
          to: minting.contractAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to network!");
        })
        .on("receipt", (receipt) => {
          this.isClaimLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Claimed Successfully!");
        })
        .on("error", (error, receipt) => {
          this.isClaimLoading = false;
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
  watch: {
    getUserAccount() {
      this.readValues();
    },
  },
};
</script>
