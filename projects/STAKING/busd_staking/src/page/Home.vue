<template>
  <div class="loading loaded">
    <div>
      <section id="home" class="top-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="card border px-sm-5">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 my-4">
                      <div class="text-center pb-3">
                        <p class="fw-bold fs-2">BUSDHarvest</p>
                        <p class="">
                          #1 Stablecoin Community yield farm<br />
                          on Binance Smart Chain
                        </p>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 my-4 text-sm-center">
                      <p class="card-subtitle">Total BUSD Deposited</p>
                      <p class="card-title mb-0">$ {{ totalInvested }}</p>
                    </div>
                    <div class="col-12 col-sm-6 my-4 text-sm-center">
                      <p class="card-subtitle">Total Referral Earnings</p>
                      <p class="card-title mb-0">
                        $ {{ totalReferralEarnings }}
                      </p>
                    </div>
                    <div class="col-12 col-sm-6 my-4 text-sm-center">
                      <div>
                        <router-link
                          to="dashboard"
                          class="btn btn-primary w-100 mt-3"
                        >
                          Dashboard
                        </router-link>
                        <a
                          href="http://busdharvest.com/docs.pdf"
                          target="_blank"
                          class="btn btn-primary w-100 mt-3"
                          >Information
                        </a>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 my-4">
                      <div>
                        <a
                          href="https://bscscan.com/address/0xcfefa22c4823b6b44592d98b18280a846d3524c3#code"
                          target="_blank"
                          class="btn btn-primary w-100 mt-3"
                          >Verified Contract
                        </a>
                        <a
                          href="https://t.me/BUSDHarvest"
                          target="_blank"
                          class="btn btn-primary w-100 mt-3"
                          >Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="community bg-white">
        <div class="container">
          <div class="community-block">
            <p class="mb-3 text-center fs-4">
              Start your yield farm journey <br />
              with BUSDHarvest community
            </p>
            <div class="row">
              <div class="col-md-7 col-lg-4 mx-auto text-center mt-3">
                <img src="../assets/secure.png" class="community-img" />
                <p class="fs-5 fw-light">Ironclad security</p>
                <p class="fw-light mb-0 mt-n1 lh-xs">
                  <small
                    >The smart contract code has been successful audited by
                    independent company HazeCrypto which guarantees the
                    protection of your assets from all external risks.</small
                  >
                </p>
              </div>
              <div class="col-md-7 col-lg-4 mx-auto text-center mt-3">
                <img src="../assets/apr.png" class="community-img" />
                <p class="fs-5 fw-light">High &amp; Stable APR</p>
                <p class="fw-light mb-0 mt-n1 lh-xs">
                  <small
                    >In the code sets the highest APR among all yield farms on
                    BSC, rules of a smart contract can’t be changed, nothing can
                    affect the amount of income.</small
                  >
                </p>
              </div>
              <div class="col-md-7 col-lg-4 mx-auto text-center mt-3">
                <img src="../assets/support.png" class="community-img" />
                <p class="fs-5 fw-light">Customer support</p>
                <p class="fw-light mb-0 mt-n1 lh-xs">
                  <small
                    >BUSDHarvest 24/7 provides you our knowledgable and
                    experienced customer support team in
                    <a
                      href="https://t.me/BUSDHarvest"
                      target="_blank"
                      class="text-dark"
                      >Telegram.</a
                    ></small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      timer: null,
      totalReferralEarnings: "0.000",
      totalInvested: "0.000",
    };
  },
  mounted() {
    this.readValue();
    this.timer = setInterval(() => {
      this.readValue();
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    readValue() {
      const web3 = new Web3("https://bsc-dataseed1.binance.org:443");
      let instance = new web3.eth.Contract(
        this.getContractABI,
        this.getContractAddress
      );
      Promise.all([instance.methods.getSiteInfo().call()]).then(
        ([getSiteInfo]) => {
          this.totalInvested = Number(
            web3.utils.fromWei(getSiteInfo._totalInvested.toString(), "ether")
          ).toFixed(3);
          this.totalReferralEarnings = (
            Number(this.totalInvested * 5) / 100
          ).toFixed(3);
        }
      );
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getReferral",
      "getUserAccount",
      "getInstance",
      "getContractABI",
      "getContractAddress",
      "getBUSDInstance",
      "getBUSDContractABI",
      "getBUSDContractAddress",
    ]),
  },
};
</script>
