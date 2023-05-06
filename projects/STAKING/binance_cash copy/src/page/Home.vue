<template>
  <section class="staking_main stake_main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="banner-heading text-center ptb">
            <h2>
              <strong class="text-light"
                >Join {{ TOKEN_Symbol }} STAKING FARM & Earn a guaranteed 720%
                APY</strong
              >
            </h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 mt-4">
            <div class="stake_card">
              <div class="stake_card_header">
                <div class="topLinearCard">
                  <div class="row"></div>
                </div>
              </div>
              <div class="stake_card_body">
                <div class="row pb-3">
                  <div class="col-lg-4 col-12">
                    <div class="nav-link daysDiv">
                      <div class="text-center">
                        <h5>Total Value Locked</h5>
                        <p>
                          <strong>
                            {{ totalDeposit }}
                            {{ TOKEN_Symbol }}
                            <!-- {{ getUSDValue(totalDeposit) }} -->
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-lg-3 col-12">
                    <div class="nav-link daysDiv">
                      <div class="text-center">
                        <h5>{{ TOKEN_Symbol }} Price</h5>
                        <p>
                          <strong> ${{ getPrice }}</strong>
                        </p>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-lg-4 col-12">
                    <div class="nav-link daysDiv">
                      <div class="text-center">
                        <h5>Personal Total staked</h5>
                        <p>
                          <strong>
                            {{ totalInvested }}
                            <!-- {{ getUSDValue(totalInvested) }} -->
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-lg-3 col-12">
                    <div class="nav-link daysDiv">
                      <div class="text-center">
                        <h5>USD value Staked</h5>
                        <p>
                          <strong>
                            {{ getUSDValue(totalInvested) }}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-lg-4 col-12">
                    <div class="nav-link daysDiv">
                      <div class="text-center">
                        <h5>Referral Reward</h5>
                        <p>
                          <strong>
                            {{ referralEarnings }}
                            {{ TOKEN_Symbol }}
                            <!-- {{ getUSDValue(referralEarnings) }} -->
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="col-12">
                    <ul class="list-inline StakeUnstakeNavigation d-flex">
                      <li class="list-inline-item">
                        <button
                          type="submit"
                          :class="step == 1 ? 'activenesssssss' : ''"
                          @click="step = 1"
                          class="common_btn_btn"
                        >
                          STAKE
                        </button>
                      </li>
                      <li class="list-inline-item ms-3">
                        <button
                          class="common_btn_btn"
                          :class="step == 2 ? 'activenesssssss' : ''"
                          @click="step = 2"
                        >
                          UNSTAKE
                        </button>
                      </li>
                      <li class="list-inline-item ms-3">
                        <button
                          class="common_btn_btn"
                          :class="step == 3 ? 'activenesssssss' : ''"
                          @click="step = 3"
                        >
                          HARVEST
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="step == 1" class="row">
                  <div class="col-12 col-lg-6 mb-4">
                    <div class="d-flex justify-content-between">
                      <p class="color_gl">Stake Amount</p>
                      <p>
                        Available Amount
                        <strong>{{ tokenBalance }} {{ TOKEN_Symbol }}</strong>
                      </p>
                    </div>
                    <div class="inputMax">
                      <input
                        type="number"
                        placeholder="0"
                        value=""
                        v-model="stakeAmount"
                      />
                      <button
                        class="btn-common"
                        type="button"
                        @click="stakeAmount = tokenBalance"
                      >
                        MAX
                      </button>
                    </div>
                    <p class="color_gl">2% Tax on Deposits</p>
                  </div>
                  <div class="col-12 col-lg-6 mb-4">
                    <div class="d-flex justify-content-between">
                      <p class="color_gl">Referral Address</p>
                    </div>
                    <div class="inputMax">
                      <input
                        type="text"
                        v-model="referralAddress"
                        placeholder="Enter your referral"
                        style="font-size: 15px; padding-right: 0"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 my-auto summaryBackground">
                    <div class="row">
                      <div class="col-12">
                        <h3>USER DASHBOARD</h3>
                      </div>
                    </div>
                    <div class="row stake_card_body_1 py-4">
                      <div class="col-6">
                        <p>Stake Date</p>
                      </div>
                      <div class="col-6 text-end">
                        <strong>
                          <p>
                            {{ timeConverter(stakeDate) }}
                          </p>
                        </strong>
                      </div>
                      <div class="col-6">
                        <p>Interest End Date</p>
                      </div>
                      <div class="col-6 text-end">
                        <strong>
                          <p>
                            {{ timeConverter(interestEndDate) }}
                          </p>
                        </strong>
                      </div>
                      <div class="col-6">
                        <p>Withdrawal Delay Time</p>
                      </div>
                      <div class="col-6 text-end">
                        <strong>
                          <p>None</p>
                        </strong>
                      </div>
                    </div>
                    <div class="row py-4">
                      <div class="col-6">
                        <strong>
                          <p>Yield Per Month</p>
                        </strong>
                      </div>
                      <div class="col-6 text-end">
                        <strong>
                          <p>60 %</p>
                        </strong>
                      </div>
                      <div class="col-6">
                        <strong>
                          <p>Estimated Interests</p>
                        </strong>
                      </div>
                      <div class="col-6 text-end">
                        <strong>
                          <p>{{ interests }}{{ TOKEN_Symbol }}</p>
                        </strong>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-12 col-sm-8 mx-auto">
                        <button
                          class="btn-common w-100"
                          type="button"
                          @click="onApprove"
                          :disabled="processing"
                        >
                          {{ processing ? "Loading.." : "Approve &amp; Stake" }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="step == 2" class="row">
                  <div class="col-md-6 mx-auto py-5">
                    <div class="d-flex justify-content-between">
                      <p class="color_gl">Unstake Amount</p>
                      <p>
                        Available Amount
                        <strong>{{ totalInvested }} {{ TOKEN_Symbol }}</strong>
                      </p>
                    </div>
                    <div class="inputMax">
                      <input
                        type="number"
                        placeholder="0"
                        v-model="unStakeAmount"
                      />
                      <button
                        class="btn-common"
                        @click="unStakeAmount = totalInvested"
                      >
                        MAX
                      </button>
                    </div>
                    <div class="row ptb20 mt-5 mb-5">
                      <div class="col-8 mx-auto">
                        <button
                          class="btn-common w-100"
                          type="button"
                          @click="onUnstake"
                          :disabled="processing"
                        >
                          {{ processing ? "Loading.." : "Unstake" }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="step == 3" class="row">
                  <div class="col-md-8 mx-auto py-5">
                    <div
                      class="d-flex confirm-withdraw-div justify-content-center align-items-center flex-column"
                    >
                      <h2 class="color_gd">Confirm Withdraw</h2>
                      <h3 class="color_gd my-3">Available Reward</h3>
                      <strong class="text-center" style="font-size: 24px"
                        >{{ payout }} {{ TOKEN_Symbol }}
                        <!-- {{ getUSDValue(payout) }} -->
                      </strong>
                      <p class="color_gl text-center mt-2">
                        In this step, you complete the transaction that withdraw
                        <br class="d-md-block d-none" />
                        your {{ TOKEN_Symbol }} tokens
                      </p>
                      <button
                        class="btn-common mt-5"
                        type="button"
                        @click="onClaim"
                        :disabled="processing"
                      >
                        {{ processing ? "Loading.." : "HARVEST" }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from "@/config/config.json";

export default {
  name: "Home",
  data() {
    return {
      step: 1,
      Yield: 60,
      interests: 0,
      referralAddress: null,
      TOKEN_Name: config.TOKEN_Name,
      TOKEN_Symbol: config.TOKEN_Symbol,

      processing: false,

      stakeAmount: 0,
      unStakeAmount: 0,

      tokenBalance: 0,

      totalDeposit: 0,

      payout: 0,

      totalInvested: 0,

      stakeDate: 0,
      interestEndDate: 0,

      referralEarnings: 0,
    };
  },
  mounted() {
    let search = window.location.search;
    this.referralAddress = search.substr(4);
    if (this.getUserAddress) {
      this.readValues();
    }
  },
  methods: {
    readValues() {
      Promise.all([
        this.getTokenInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getStakingInstance.methods.pool().call(),
        this.getStakingInstance.methods.payout(this.getUserAddress).call(),
        this.getStakingInstance.methods.users(this.getUserAddress).call(),
      ]).then(([balance, pool, payout, users]) => {
        console.log(
          "balance: ",
          balance,
          "pool: ",
          pool,
          "payout: ",
          payout,
          "users: ",
          users
        );
        this.tokenBalance = this.formator(balance);

        this.totalDeposit = this.formator(pool.totalDeposit);

        this.payout = this.formator(payout);

        this.totalInvested = this.formator(users.totalInvested);

        if (Number(users.depositTime)) {
          this.stakeDate = Number(users.depositTime);
          this.interestEndDate = Number(users.depositTime) + 15552000;
        } else {
          this.stakeDate = 0;
          this.interestEndDate = 0;
        }
        let earning =
          Number(users.firstLevelEarning) + Number(users.directEarning);
        this.referralEarnings = earning/1e18;
      });
    },

    onApprove() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }
      if (!this.stakeAmount) {
        this.$toasted.show("Enter Stake amount");
        return;
      }

      let amount = this.getWeb3.utils.toWei(
        this.stakeAmount.toString(),
        "ether"
      );
      this.processing = true;
      this.getTokenInstance.methods
        .approve(config.STAKING_ADDRESS, amount)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          this.onStake();
          console.log(receipt);
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    onStake() {
      let referral = this.referralAddress
        ? this.referralAddress
        : "0x1e938C6812Db544450cE1432889063aDb3D6566B";

      let amount = this.getWeb3.utils.toWei(
        this.stakeAmount.toString(),
        "ether"
      );

      this.getStakingInstance.methods
        .stake(amount, referral)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
          this.readValues();
          this.processing = false;
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    onUnstake() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }
      if (!this.unStakeAmount) {
        this.$toasted.show("Enter unStake amount");
        return;
      }
      if (!this.totalInvested) {
        this.$toasted.show("You have not staked any token!");
        return;
      }
      if ((new Date().getTime() > Number(this.interestEndDate)) & 1000) {
        this.$toasted.show("Staking Period is not over yet!");
        return;
      }
      let amount = this.getWeb3.utils.toWei(
        this.unStakeAmount.toString(),
        "ether"
      );

      this.processing = true;
      this.getStakingInstance.methods
        .unStake(amount)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
          this.readValues();
          this.processing = false;
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    onClaim() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }
      this.processing = true;
      this.getStakingInstance.methods
        .claim()
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
          return;
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
          this.readValues();
          this.processing = false;
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error) => {
          console.log(error);
          this.processing = false;
          this.$toasted.show("Transaction is Failed");
          return;
        });
    },
  },
  watch: {
    getUserAddress() {
      this.readValues();
    },
    stakeAmount() {
      this.interests = (this.stakeAmount * this.Yield) / 100;
    },
  },
};
</script>
