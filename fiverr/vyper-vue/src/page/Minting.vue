<template>
  <div class="row anim" style="--delay: 0s">
    <div class="col-12">
      <b>
        Link Token Balance:
        <span id="tokenBalance" class="text-red">{{ tokenBalance }}</span>
      </b>
      <br /><br />
      <v-text-field
        outlined
        id="tokenAmount"
        v-model.number="tokenAmount"
        label="Minting Amount"
        placeholder="Token to mint"
      ></v-text-field>
      <v-btn
        large
        color="primary"
        class="mr-5"
        @click="onTokenApprove"
        :disabled="isLoading || isApproved"
      >
        {{ isApproved ? `Already Approved: ${tokenAllowance}` : "Approve" }}
      </v-btn>
      <v-btn
        large
        color="secondary"
        class="mr-5"
        @click="onMint"
        :disabled="isLoading || !isApproved"
      >
        Mint Token
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  data() {
    return {
      tokenAmount: 0,
      isLoading: false,

      isApproved: false,
      tokenBalance: 0,
      tokenAllowance: 0,
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
        this.getTOKENInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getTOKENInstance.methods
          .allowance(this.getUserAddress, this.GTX_ADDRESS)
          .call(),
      ]).then(([tokenBalance, tokenAllowance]) => {
        console.log("tokenBalance:", tokenBalance);
        console.log("tokenAllowance:", tokenAllowance);
        this.tokenBalance = this.humanized(tokenBalance, 2);
        this.isApproved = !!Number(tokenAllowance);
        this.tokenAllowance = this.humanized(tokenAllowance, 2);
      });
    },
    onTokenApprove() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      } else if (!Number(this.tokenAmount)) {
        this.$toasted.show("Enter Minting Amount");
        return;
      }

      this.isLoading = true;
      this.getTOKENInstance.methods
        .approve(this.GTX_ADDRESS, "1000000000000000000000000000")
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          this.isApproved = true;
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          this.isApproved = true;
          this.isLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          this.isApproved = false;
          this.isLoading = false;
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction rejected");
        });
    },

    onMint() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      } else if (!Number(this.tokenAmount)) {
        this.$toasted.show("Enter Minting Amount");
        return;
      }

      let tokenAmount = this.getWeb3.utils.toWei(
        this.tokenAmount.toString(),
        "ether"
      );
      this.isLoading = true;
      this.getGTXInstance.methods
        .mintWithOLDCrv(tokenAmount)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          this.isLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          this.isLoading = false;
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction rejected");
        });
    },
  },
  watch: {
    async getUserAddress() {
      this.readValues();
    },
  },
};
</script>
