<template>
  <div id="balance" class="row justify-content-center">
    <div class="col-12 col-sm-6">
      <div class="message anim" style="--delay: 0s">
        <div class="author-img__wrapper video-author video-p">
          <img class="author-img" src="@/assets/eth.png" />
        </div>
        <div class="msg-wrapper">
          <div class="msg__name video-p-name">GTX Balance</div>
          <div class="msg__content video-p-sub">
            <div id="GTXBalance" class="video-p-subtitle">0.0</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="message anim" style="--delay: 0s">
        <div class="author-img__wrapper video-author video-p">
          <img class="author-img" src="@/assets/btc.png" />
        </div>
        <div class="msg-wrapper">
          <div class="msg__name video-p-name">veGTX Balance</div>
          <div class="msg__content video-p-sub">
            <div id="veGTXBalance" class="video-p-subtitle">0.0</div>
          </div>
        </div>
      </div>
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
