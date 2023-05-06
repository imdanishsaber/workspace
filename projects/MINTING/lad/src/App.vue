<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <router-link class="nav-link" exact to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact to="/staking"
              >Staking</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact to="/erc20-staking"
              >ERC20 Staking</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact to="/endless"
              >Endless Possibilities</router-link
            >
          </li>
        </ul>
        <button
          v-if="getUserAccount"
          @click="onDisconnect"
          type="button"
          :class="getUserAccount ? 'btn-secondary' : 'btn-primary'"
          class="btn mt-4 mt-lg-0"
        >
          {{ addrTruncation(getUserAccount) }}
        </button>
        <button
          v-else
          type="button"
          @click="onConnect"
          class="btn btn-primary mt-4 mt-lg-0"
        >
          Connect Wallet
        </button>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view />
    </div>
    <footer class="py-4 mt-5">
      <div class="text-center">
        <router-link to="/#">
          <img class="social-icons mx-4 py-2" src="@/assets/1.png" alt="" />
        </router-link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScXLOAsY0amAVPLCM9ck55qtahcY3IVRDgB7G1Lgd1Ep95qZQ/closedform"
          target="_blank"
        >
          <img class="social-icons mx-4 py-2" src="@/assets/2.png" alt="" />
        </a>
        <a
          href="https://oasis.cash/collection/0x62587576142bd5b73F71d6DA51389Fb6b92216AE/"
          target="_blank"
        >
          <img class="social-icons mx-4 py-2" src="@/assets/3.png" alt="" />
        </a>
      </div>
      <div class="text-center">
        <p class="mt-3 mb-0">© 2022 Present Lads</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Web3 from "web3";
import minting from "@/contracts/minting.json";
import staking from "@/contracts/staking.json";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions("wallet", [
      "SET_WEB3",
      "SET_USER_ACCOUNT",
      "SET_MINTING_INSTANCE",
      "SET_STAKING_INSTANCE",
      "SET_ERC20_STAKING_INSTANCE",
      "SET_REWARD_INSTANCE",
      "SET_TOKEN_INSTANCE",
    ]),
    async onConnect() {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let web3 = new Web3(window.ethereum);
        let accounts = await web3.eth.getAccounts();

        let mintingInstance = new web3.eth.Contract(
          minting.contractABI,
          minting.contractAddress
        );

        let stakingInstance = new web3.eth.Contract(
          staking.contractABI,
          staking.contractAddress
        );

        this.SET_WEB3(web3);
        this.SET_USER_ACCOUNT(accounts[0]);
        this.SET_MINTING_INSTANCE(mintingInstance);
        this.SET_STAKING_INSTANCE(stakingInstance);
        this.$toasted.show("Wallet Connected Successfully!");
      } else {
        this.$toasted.show("Please install metamask!");
      }
    },
    addrTruncation(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },
    onDisconnect() {
      this.SET_WEB3(null);
      this.SET_USER_ACCOUNT(null);
      this.SET_MINTING_INSTANCE(null);
      this.SET_STAKING_INSTANCE(null);
      this.$toasted.show("Wallet Disconnected!");
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getUserAccount",
      "getMintingInstance",
      "getStakingInstance",
      "getERC20StakingInstance",
      "getRewardInstance",
      "getTokenInstance",
    ]),
  },
};
</script>
<style>
@import "./styles/styles.css";
</style>