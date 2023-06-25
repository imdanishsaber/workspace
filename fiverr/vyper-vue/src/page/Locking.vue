<template>
  <div id="locking" class="row justify-content-center anim" style="--delay: 0s">
    <div class="col-12">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="video-p-title">
            GTX Balance:
            <span id="GTXBalance2" class="video-p-subtitle">{{
              GTXBalance
            }}</span>
          </div>
          <div class="video-p-title">
            My GTX Lock:
            <span id="lockedAmount" class="video-p-subtitle">{{
              lockedAmount
            }}</span>
          </div>
          <div class="video-p-title">
            Locked Till:
            <span id="lockedTime" class="video-p-subtitle">{{
              lockedTime
            }}</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex h-100 justify-content-center align-items-center">
            <v-btn large class="mr-5" color="primary" @click="onGTXApprove">
              Approve GTX First
            </v-btn>
            <v-btn large class="mr-5" color="secondary" @click="onWithdraw">
              Withdraw
            </v-btn>
          </div>
        </div>
      </div>
      <div id="lockDiv">
        <div class="mt-4">
          <v-text-field
            outlined
            v-model.number="lockAmount"
            label="GTX Lock Amount"
            placeholder="Amount to Lock"
          ></v-text-field>
        </div>
        <v-select
          outlined
          v-model="lockTime"
          :items="lockTimes"
          item-text="label"
          item-value="value"
          label="Lock Time"
        ></v-select>
        <v-btn large color="primary" class="mr-5" @click="onLock">
          Create Lock
        </v-btn>
      </div>
      <hr />
    </div>
    <div class="col-12">
      <div>
        <v-text-field
          outlined
          v-model.number="incLockAmount"
          label="Increase GTX Lock Amount"
          placeholder="Amount to Lock"
        ></v-text-field>
      </div>
      <v-btn large color="primary" class="mr-5" @click="onIncLockAmount">
        Increase Lock Amount
      </v-btn>
      <hr />
    </div>
    <div class="col-12">
      <v-select
        outlined
        v-model="incLockTime"
        :items="lockTimes"
        item-text="label"
        item-value="value"
        label="Increase Lock Time"
      ></v-select>

      <v-btn large color="primary" class="mr-5" @click="onIncLockTime">
        Increase Lock Time
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  data() {
    return {
      GTXBalance: 0,
      lockedAmount: 0,
      lockedTime: 0,

      lockAmount: 0,
      lockTime: 'Choose...',
      
      incLockAmount: 0,
      incLockTime: 'Choose...',
      
      lockTimes: [
        { label: "Choose...", value: "Choose...", disabled: true },
        { label: "2 Week", value: "2 Week", disabled: false },
        { label: "1 Month", value: "1 Month", disabled: false },
        { label: "3 Months", value: "3 Months", disabled: false },
        { label: "6 Months", value: "6 Months", disabled: false },
        { label: "1 Year", value: "1 Year", disabled: false },
      ],
    };
  },
  mounted() {
    if (this.getUserAddress) {
      this.readValues();
    }
  },
  methods: {
    onGTXApprove() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      }
      this.getGTXInstance.methods
        .approve(this.LOCKER_ADDRESS, "1000000000000000000000000000")
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction rejected");
        });
    },

    onLock() {
      let timeText = this.lockTime;
      let time = this.calculateEpochTimestamp(timeText);
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      } else if (!Number(this.lockAmount)) {
        this.$toasted.show("Enter Locking Amount");
        return;
      } else if (!Number(time)) {
        this.$toasted.show("Select Locking period");
        return;
      }
      let amount = this.getWeb3.utils.toWei(
        this.lockAmount.toString(),
        "ether"
      );
      this.getLOCKERInstance.methods
        .createLock(amount, time)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction rejected");
        });
    },

    onIncLockAmount() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      } else if (!Number(this.incLockAmount)) {
        this.$toasted.show("Enter Locking Amount");
        return;
      }

      let amount = this.getWeb3.utils.toWei(
        this.incLockAmount.toString(),
        "ether"
      );

      this.getLOCKERInstance.methods
        .increaseAmount(amount)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction rejected");
        });
    },

    onIncLockTime() {
      let timeText = this.incLockTime;
      let time = this.calculateEpochTimestamp(timeText);

      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      } else if (!Number(time)) {
        this.$toasted.show("Select Locking period");
        return;
      }

      this.getLOCKERInstance.methods
        .increaseUnlockTime(time)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction rejected");
        });
    },

    onWithdraw() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first");
        return;
      }
      this.getLOCKERInstance.methods
        .withdraw()
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted to the network");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
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
