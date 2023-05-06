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
                  <p>Migrate</p>
                  <h2>Migration from V1 to V2</h2>
                  <div class="d-flex justify-content-between">
                    <div class="inputMax">
                      <input
                        type="text"
                        v-model="amount"
                        placeholder="Enter amount"
                        style="font-size: 15px; padding-right: 0"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <button
                    class="btn-common w-100"
                    type="button"
                    @click="onApprove"
                    :disabled="processing"
                  >
                    {{ processing ? "Loading.." : "Approve &amp; Migrate" }}
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
  name: "migration",
  data() {
    return {
      amount: 0,
      processing: false,
      TOKEN_Symbol: config.TOKEN_Symbol,
    };
  },
  mounted() {},
  methods: {
    onApprove() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }

      if (!this.amount) {
        this.$toasted.show("Enter token amount");
        return;
      }

      let amount = this.getWeb3.utils.toWei(this.amount.toString(), "ether");

      this.processing = true;
      console.log(this.getV1Instance.methods);
      this.getV1Instance.methods
        .approve(config.MIGRATION_ADDRESS, amount)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          setTimeout(() => {
            this.onMigrate();
            console.log(receipt);
            this.$toasted.show("Transaction is Successful");
          }, 5000);
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    onMigrate() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }
      this.processing = true;
      this.getMigrationInstance.methods
        .migrateToBcashV2(this.amount)
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
};
</script>
