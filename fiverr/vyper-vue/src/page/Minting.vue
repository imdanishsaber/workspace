<template>
  <div id="mint" class="row justify-content-center anim" style="--delay: 0s">
    <div class="col-12">
      <div class="video-p-title">
        Link Token Balance:
        <span id="TOKENBalance" class="video-p-subtitle">0.0</span>
      </div>
      <v-text-field
        outlined
        id="tokenAmount"
        label="Minting Amount"
        placeholder="Token to mint"
      ></v-text-field>
      <v-btn large color="primary" class="mr-5" @click="onTokenApprove">
        Approve
      </v-btn>
      <v-btn large color="secondary" class="mr-5" @click="onMint" disabled>
        Mint Token
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  comouted: {},
};
</script>
