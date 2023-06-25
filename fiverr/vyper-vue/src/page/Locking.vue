<template>
  <div id="locking" class="row justify-content-center anim" style="--delay: 0s">
    <div class="col-12">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="video-p-title">
            GTX Balance:
            <span id="GTXBalance2" class="video-p-subtitle">0.0</span>
          </div>
          <div class="video-p-title">
            My GTX Lock:
            <span id="lockedAmount" class="video-p-subtitle">0.0</span>
          </div>
          <div class="video-p-title">
            Locked Till:
            <span id="lockedTime" class="video-p-subtitle">---</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex h-100 justify-content-center align-items-center">
            <v-btn
              large
              id="GTXApproveButton"
              color="primary"
              class="mr-5"
              @click="onGTXApprove"
            >
              Approve GTX First
            </v-btn>
            <v-btn
              large
              id="withdrawButton"
              color="secondary"
              class="mr-5"
              @click="onWithdraw"
            >
              Withdraw
            </v-btn>
          </div>
        </div>
      </div>
      <div id="lockDiv">
        <div class="mt-4">
          <v-text-field
            outlined
            id="lockAmount"
            label="GTX Lock Amount"
            placeholder="Amount to Lock"
          ></v-text-field>
        </div>
        <v-select
          outlined
          id="lockTime"
          :items="lockTime"
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
          id="incLockAmount"
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
        id="incLockTime"
        :items="lockTime"
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
      lockTime: [
        { label: "2 Week", value: "2 Week" },
        { label: "1 Month", value: "1 Month" },
        { label: "3 Months", value: "3 Months" },
        { label: "6 Months", value: "6 Months" },
        { label: "1 Year", value: "1 Year" },
      ],
    };
  },
  mounted() {},
  methods: {},
  comouted: {},
};
</script>
