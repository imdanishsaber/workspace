<template>
  <section class="withdraw">
    <div class="container-fluid ptb">
      <div class="row">
        <div class="col-12">
          <div class="banner-heading text-center"></div>
        </div>
      </div>
      <div class="container">
        <div class="row ptb">
          <div class="col-lg-6 mx-auto mt-4">
            <div class="withdraw_card">
              <div class="withdraw_card_body text-center">
                <div class="totalReward">
                  <p>Total Reward</p>
                  <h2>
                    {{ payout }}
                    {{ TOKEN_Symbol }}
                  </h2>
                  <h2>
                    <!-- {{ getUSDValue(payout) }} -->
                  </h2>
                </div>
                <div class="text-center mt-4">
                  <button
                    class="btn-common w-100"
                    type="button"
                    @click="onClaim"
                  >
                    Withdraw Reward
                  </button>
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
  name: "referrel",
  data() {
    return {
      payout: 0,
      TOKEN_Symbol: config.TOKEN_Symbol,
    };
  },
  mounted() {
    if (this.getUserAddress) {
      this.readValues();
    }
  },
  methods: {
    readValues() {
      Promise.all([
        this.getStakingInstance.methods.payout(this.getUserAddress).call(),
      ]).then(([payout]) => {
        this.payout = this.formator(payout);
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
  },
};
</script>
