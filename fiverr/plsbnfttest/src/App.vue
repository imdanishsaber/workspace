<template>
  <div id="root">
    <div class="bg-dark">
      <section class="navbar_main">
        <div class="container">
          <nav class="navbar navbar-expand-sm navbar-dark bg-transparent">
            <router-link class="navbar-brand" to="/">
              <img
                src="@/assets/logo_gold_lock.jpeg"
                alt=""
                style="width: 40px"
                class="img-fluid logoMobileHeight"
              />
              <span class="ml-2">Pulse<b>{{this.NAME}}</b></span>
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item"></li>
              </ul>
              <form class="d-flex align-items-center">
                <button
                  v-if="!getUserAddress"
                  type="button"
                  class="btn-common"
                  @click="onConnect"
                >
                  Connect Wallet
                </button>
                <template v-else>
                  <a>
                    <p>{{ formator(tokenBalance, 2) }} {{ TOKEN_SYMBOL }}</p>
                  </a>
                  <button type="button" class="btn-common">
                    {{ addrTruncation(getUserAddress) }}
                  </button>
                </template>
              </form>
            </div>
          </nav>
        </div>
      </section>
    </div>
    <section class="staking_main stake_main">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="stake_card">
              <div class="stake_card_header">
                <div class="topLinearCard">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/" exact
                        ><img src="@/assets/padlock.png" />Lock & Mint NFT</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/gallery" exact>
                        <img src="@/assets/photo-gallery.png" />NFT Gallery</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/purple_paper" exact>
                        <img src="@/assets/question-mark.png" />Purple Paper</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid m-0 p-2 bg-dark">
      <section class="footer_main py-2">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <router-link class="navbar-brand" to="/">
                <img
                    src="@/assets/logo_gold_lock.jpeg"
                    alt=""
                    style="width: 30px"
                    class="img-fluid logoMobileHeight"
                />
                <span class="ml-2" style="color: #fff"
                >Pulse<b>{{ this.NAME }}</b></span
                >
              </router-link>
            </div>
            <div>
              <a href="https://twitter.com/PLSBLockWin" target="_blank" class="rightReserved">
                <img src="@/assets/twitter.png" width="40px" alt="" />
              </a>
              <a href="https://t.me/PulseBitcoinLock" target="_blank" class="rightReserved">
                <img src="@/assets/telegram.png" width="40px" alt="" />
              </a>
            </div>

            <div>
              <a href="##" class="rightReserved">
                <p>© 2023 Pulse{{ this.NAME }}. All Right Reserved.</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="modal-backdrop" class="modal-backdrop fade"></div>
    <div
      class="modal fade"
      id="captchaModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="captchaModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="col-12 col-sm-7">
              <vue-recaptcha
                ref="recaptcha"
                @verify="onCaptchaVerify"
                :sitekey="sitekey"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import { VueRecaptcha } from "vue-recaptcha";
import config from "@/config/config";

// TOKEN CONTRACT
const TOKEN_ABI = config.TOKEN_ABI;

// LOCKUP CONTRACT
const CONTRACT_ABI = config.CONTRACT_ABI;

export default {
  name: "App",
  components: { VueRecaptcha },
  data() {
    return {
      provider: null,
      web3Modal: null,
      tokenBalance: 0,
      maxSupply: 0,
      isAlreadyConnected: false,
      isCaptchaVerifed: false,
      sitekey: "6Ldv4KAjAAAAAJczfC6DGtN4s9qfgncrjCU2TUx0",
    };
  },

  beforeMount() {
    this.web3Modal = new Web3Modal({
      cacheProvider: false,
      disableInjectedProvider: false,
    });
  },
  mounted() {
    document.getElementById("captchaModal").classList.add("show");
    document.getElementById("modal-backdrop").classList.add("show");
  },
  methods: {
    onCaptchaVerify() {
      this.isCaptchaVerifed = true;
      document.getElementById("captchaModal").classList.remove("show");
      document.getElementById("modal-backdrop").classList.remove("show");
    },
    async onConnect() {
      try {
        this.provider = await this.web3Modal.connect();
        this.onProvider();
        if (!this.isAlreadyConnected) {
          this.provider.on("accountsChanged", (accounts) => {
            console.log(accounts);
            this.onProvider();
          });

          this.provider.on("chainChanged", (chainId) => {
            console.log(chainId);
            this.onProvider();
          });
        }
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },

    async onProvider() {
      this.isAlreadyConnected = true;
      let web3 = new Web3(this.provider);
      let accounts = await web3.eth.getAccounts();
      let chainId = await web3.eth.getChainId();
      if (chainId !== this.CHAIN_ID) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${this.CHAIN_ID.toString(16)}` }],
          });
          this.onProvider();
          return;
        } catch (switchError) {
          this.$toasted.show(
            `Only Ethereum ${this.NETWORK} Network is supported`
          );
          return;
        }
      }
      let TOKEN_INSTANCE = new web3.eth.Contract(TOKEN_ABI, this.TOKEN_ADDRESS);
      let CONTRACT_INSTANCE = new web3.eth.Contract(
        CONTRACT_ABI,
        this.CONTRACT_ADDRESS
      );

      this.SET_WEB3(web3);
      this.SET_USER_ADDRESS(accounts[0]);
      this.SET_CONTRACT_INSTANCE(CONTRACT_INSTANCE);
      this.SET_TOKEN_INSTANCE(TOKEN_INSTANCE);

      this.$toasted.show("Wallet Connected Successfully");
      this.readValues();
    },

    readValues() {
      this.getTokenInstance.methods
        .balanceOf(this.getUserAddress)
        .call()
        .then((balance) => {
          this.tokenBalance = balance;
        });
      this.getTokenInstance.methods
          .totalSupply()
          .call()
          .then((mSupply) => {
            this.maxSupply = mSupply;
          })
    },
  },
};
</script>
<style>
@import "./styles/main.css";
.modal.fade.show {
  display: block;
}
.modal-backdrop {
  opacity: 0;
  display: none;
}
.modal-backdrop.show {
  opacity: 0.6;
  display: block;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
}
</style>
