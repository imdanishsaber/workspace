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
import reward from "@/contracts/reward.json";
import ERC20Staking from "@/contracts/ERC20Staking.json";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ERC20Staking",
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

      let rewardInstance = new web3.eth.Contract(
        reward.contractABI,
        reward.contractAddress
      );
      console.log(rewardInstance);
      rewardInstance.methods
        .pendingTotalReward(this.getUserAccount)
        .call()
        .then((pendingTotalReward) => {
          console.log(pendingTotalReward);
          this.isApproved = pendingTotalReward;
        });
    },

    onApprove() {
      if (!this.getUserAccount) {
        this.$toasted.show("Wallet not Connected!");
        return;
      }
      this.isApproveLoading = true;
      this.tokenInstance.methods
        .setApprovalForAll(ERC20Staking.contractAddress, true)
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
      if (!this.stakeAmount) {
        this.$toasted.show("Enter amount of token you want to withdraw!");
        return;
      }
      this.isStakeLoading = true;
      this.getERC20StakingInstance.methods
        .stake(this.stakeAmount)
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
      if (!this.unStakeAmount) {
        this.$toasted.show("Enter amount of token you want to withdraw!");
        return;
      }
      this.isUnstakeLoading = true;
      this.getERC20StakingInstance.methods
        .withdraw(this.unStakeAmount)
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
      this.getRewardInstance.methods
        .claim()
        .send({
          from: this.getUserAccount,
          to: reward.contractAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Reward Claimed transaction is submitted!");
        })
        .on("receipt", (receipt) => {
          this.isClaimLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Reward Claimed Successfully!");
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
