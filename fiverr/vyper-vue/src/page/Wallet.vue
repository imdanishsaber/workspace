<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="d-flex align-center anim" style="--delay: 0s">
        <div class="mr-4">
          <img class="c-icon" src="@/assets/eth.png" />
        </div>
        <div>
          <b>GTX Balance</b> <br />
          <span class="text-red">{{ GTXBalance }}</span>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="d-flex align-center anim" style="--delay: 0s">
        <div class="mr-4">
          <img class="c-icon" src="@/assets/btc.png" />
        </div>
        <div>
          <b>veGTX Balance</b> <br />
          <span class="text-red">{{ veGTXBalance }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  data() {
    return {
      GTXBalance: 0,
      veGTXBalance: 0,
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
        this.getGTXInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getLOCKERInstance.methods.balanceOf(this.getUserAddress).call(),
      ]).then(([GTXBalance, veGTXBalance]) => {
        console.log("GTXBalance:", GTXBalance);
        console.log("veGTXBalance:", veGTXBalance);
        this.GTXBalance = this.humanized(GTXBalance, 2);
        this.veGTXBalance = this.humanized(veGTXBalance, 2);
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
