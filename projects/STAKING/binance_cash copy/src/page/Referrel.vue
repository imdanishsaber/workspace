<template>
  <section class="referrel">
    <div class="container-fluid ptb">
      <div class="row">
        <div class="col-12">
          <div class="banner-heading text-center">
            <h1>
              Invite a friend & earn 10 percent referral bonus. <br />
              You also earn 2 percent of your referrals earning.
            </h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row ptb">
          <div class="col-xl-8 col-lg-10 mx-auto mt-4">
            <div class="staking_card">
              <div class="staking_card_body">
                <ul class="list-inline d-flex align-items-center">
                  <li class="list-inline-item">
                    <div class="noDiv">1</div>
                  </li>
                  <li class="list-inline-item">
                    <p class="ms-2">
                      Stake your $BCASH tokens & Generate a referral link.
                    </p>
                  </li>
                </ul>
                <ul class="list-inline d-flex align-items-center">
                  <li class="list-inline-item">
                    <div class="noDiv">2</div>
                  </li>
                  <li class="list-inline-item">
                    <p class="ms-2">
                      Share your referral link to family & friends who stake &
                      earn 10 percent of their deposit plus 2 percent of their
                      earnings.
                    </p>
                  </li>
                </ul>
                <ul class="list-inline d-flex align-items-center">
                  <li class="list-inline-item">
                    <div class="noDiv">3</div>
                  </li>
                  <li class="list-inline-item">
                    <p class="ms-2">
                      Congratulations, you can start making your daily harvest.
                      Keep sharing
                    </p>
                  </li>
                </ul>
                <div class="inputMax">
                  <div type="text" class="textttttt">
                    <h6 class="hjkjhjk" style="font-size: 14px;margin: 0;width: 100%;">
                      {{ referrelLink }}
                    </h6>
                  </div>
                  <button class="btn-common" @click="copyStringToClipboard">
                    <img src="@/assets/copy-icon.svg" alt="" />
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
      referrelLink: "",
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
        this.getStakingInstance.methods.users(this.getUserAddress).call(),
      ]).then(([users]) => {
        if (this.getUserAddress && Number(users.totalInvested))
          this.referrelLink =
            window.location.origin + "?id=" + this.getUserAddress;
        else this.referrelLink = `Stake your ${this.TOKEN_Symbol} coins first`;
      });
    },
    copyStringToClipboard() {
      var el = document.createElement("textarea");
      el.value = this.referrelLink;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.$toasted.show("Copied!");
    },
  },
  watch: {
    getUserAddress() {
      this.readValues();
    },
  },
};
</script>
