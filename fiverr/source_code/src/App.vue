<template>
  <div id="app">
    <header class="bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark mx-auto">
        <div class="container-fluid">
          <router-link
            to="/"
            class="
              navbar-logo
              d-flex
              align-items-center
              nuxt-link-exact-active nuxt-link-active
            "
          >
            <img src="./assets/logo.png" alt="logo" class="navbar-brand p-0" />
            <span class="text-primary fw-bold navbar-brand-text">
              EBRYHarvest
            </span>
          </router-link>
          <template v-if="getUserAccount">
            <div class="d-none d-sm-flex">
              <p class="mb-0 text-primary">
                {{ addrTruncation(getUserAccount) }}
              </p>
              <button class="btn btn-primary btn-connect" @click="disconnect">
                Disconnect
              </button>
            </div>
            <div class="d-flex w-100 justify-content-between d-sm-none">
              <p class="mb-0 text-primary">
                {{ addrTruncation(getUserAccount) }}
              </p>
              <button class="btn btn-primary btn-connect" @click="disconnect">
                Disconnect
              </button>
            </div>
          </template>
          <button
            v-else
            class="btn btn-primary btn-connect"
            @click="showModal = !showModal"
          >
            Connect
          </button>
        </div>
      </nav>
    </header>
    <router-view />
    <footer class="py-3">
      <div class="footer m-auto">
        <div class="container-fluid">
          <div
            class="
              d-md-flex
              justify-content-center
              text-center
              align-items-center
            "
          >
            <a href="https://twitter.com/BinaryEth" target="_blank"
              ><img
                src="./assets/twitter.095df65.png"
                class="mx-2"
                style="height: 40px"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
    <div class="modal" :class="showModal ? 'show' : ''">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content mx-auto">
          <div class="modal-header">
            <h5 class="modal-title">Connect to a wallet</h5>
            <button
              type="button"
              class="btn-close"
              @click="showModal = !showModal"
            ></button>
          </div>
          <div class="modal-body">
            <button
              v-if="isMetamaskInstalled"
              type="button"
              class="
                btn-connect
                bg-primary
                rounded
                d-flex
                align-items-center
                justify-content-between
                w-100
              "
              @click="onConnect('metamask')"
            >
              <p class="mb-0 fw-bold">Metamask</p>
              <img
                src="./assets/967323a536688d01da885bdf5a58daa0.svg"
                alt="Metamask"
                class="provider-icon bg-white rounded-circle"
              /></button
            ><button
              v-if="isBinanceInstalled"
              type="button"
              class="
                btn-connect
                bg-primary
                rounded
                d-flex
                align-items-center
                justify-content-between
                w-100
              "
              @click="onConnect('binance')"
            >
              <p class="mb-0 fw-bold">Binance smart chain Wallet</p>
              <img
                src="./assets/3b337921e04b6b4474d30684bfa430b9.svg"
                alt="Binance Chain Wallet"
                class="provider-icon bg-white rounded-circle"
              /></button
            ><button
              type="button"
              class="
                btn-connect
                bg-primary
                rounded
                d-flex
                align-items-center
                justify-content-between
                w-100
              "
              @click="onConnect('connect')"
            >
              <p class="mb-0 fw-bold">Wallet Connect</p>
              <img
                src="./assets/2c2a5dc61de30babc08fb5e796cf1673.svg"
                alt="Wallet Connect"
                class="provider-icon bg-white rounded-circle"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { BscConnector } from "@binance-chain/bsc-connector";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
      isMetamaskInstalled: false,
      isBinanceInstalled: false,
    };
  },
  mounted() {
    this.isMetamaskInstalled = window.ethereum ? true : false;
    this.isBinanceInstalled = window.BinanceChain ? true : false;
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            this.onConnect("metamask");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  methods: {
    ...mapActions("wallet", [
      "SET_REFERRAL",
      "SET_WEB3",
      "SET_USER_ACCOUNT",
      "SET_INSTANCE",
      "SET_EBRYINSTANCE",
    ]),
    async onConnect(name) {
      if (name === "metamask") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.onProvider(window.ethereum);
        window.ethereum.on("accountsChanged", (accounts) => {
          this.SET_USER_ACCOUNT(accounts[0]);
          this.onProvider(window.ethereum);
        });
      } else if (name === "binance") {
        const bsc = new BscConnector({
          supportedChainIds: [56, 97],
        });
        let provider = await bsc.activate();
        this.onProvider(provider.provider);
        bsc.on("accountsChanged", (accounts) => {
          this.SET_USER_ACCOUNT(accounts[0]);
          this.onProvider(provider.provider);
        });
      } else if (name === "connect") {
        const provider = new WalletConnectProvider({
          rpc: {
            56: "https://bsc-dataseed.binance.org/",
          },
        });
        await provider.enable();
        this.onProvider(provider);
        provider.on("accountsChanged", (accounts) => {
          this.SET_USER_ACCOUNT(accounts[0]);
          this.onProvider(provider);
        });
      }
    },
    async onProvider(provider) {
      this.showModal = false;
      try {
        let web3 = new Web3(provider);
        this.SET_WEB3(web3);

        let accounts = await web3.eth.getAccounts();
        this.SET_USER_ACCOUNT(accounts[0]);

        let instance = new this.getWeb3.eth.Contract(
          this.getContractABI,
          this.getContractAddress
        );
        let EBRYInstance = new this.getWeb3.eth.Contract(
          this.getEBRYContractABI,
          this.getEBRYContractAddress
        );
        this.SET_INSTANCE(instance);
        this.SET_EBRYINSTANCE(EBRYInstance);

        let referral = this.getQueryVariable()
          ? this.getQueryVariable()
          : accounts[0];
        this.SET_REFERRAL(referral);
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },
    addrTruncation(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },
    getQueryVariable() {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      if (vars) {
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == "ref") {
            return pair[1];
          }
        }
      }
      return false;
    },
    disconnect() {
      this.SET_WEB3(null);
      this.SET_INSTANCE(null);
      this.SET_REFERRAL(null);
      this.SET_USER_ACCOUNT(null);
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
      "getEBRYInstance",
      "getEBRYContractABI",
      "getEBRYContractAddress",
    ]),
  },
};
</script>

<style>
@import "./css/e7acf1d.css";
@import "./css/cafc13f.css";
@import "./css/1c3ac9d.css";
</style>
