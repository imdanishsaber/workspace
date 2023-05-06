<template>
  <div id="root">
    <div class="container-fluid bg-dark">
      <section class="navbar_main">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div class="container-fluid">
              <router-link class="navbar-brand" to="/">
                <img
                  src="@/assets/logo.png"
                  alt=""
                  class="img-fluid logoMobileHeight"
                />
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
                  <router-link to="/withdraw">
                    <p>Withdraw</p>
                  </router-link>
                  <router-link to="/referrel">
                    <p>Referral</p>
                  </router-link>
                  <router-link to="/migration">
                    <p>Migrate</p>
                  </router-link>
                  <a
                    :href="`https://pancakeswap.finance/swap?outputCurrency=${TOKEN_ADDRESS}`"
                    target="_blank"
                    >Buy BCASH</a
                  >
                  <button
                    v-if="!getUserAddress"
                    type="button"
                    class="btn-common"
                    @click="onConnect"
                  >
                    Connect Wallet
                  </button>
                  <button
                    v-else
                    type="button"
                    class="btn-common"
                    @click="onDisconnect"
                  >
                    Disconnect
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
    <router-view></router-view>
    <div class="container-fluid m-0 p-2 bg-dark">
      <section class="footer_main">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-md-start text-center">
              <img
                src="@/assets/logo.png"
                style="width: 200px"
                class="mt-2"
                alt=""
              />
            </div>
            <div class="col-md-6 mt-3 text-md-end text-center">
              <a href="##" class="rightReserved">
                <p>© 2022 Binance Cash. All Right Reserved.</p>
              </a>
            </div>
            <div class="col-12 text-center my-3">
              <small style="color: white">
                Investing in any cryptocurrency asset is risky, and you may be
                exposed to price volatility and loss. Always conduct your own
                research.
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import v1 from "@/ABIs/V1_ABI.json";
import nft from "@/ABIs/TOKEN_ABI.json";
import staking from "@/ABIs/STAKING_ABI.json";
import migration from "@/ABIs/MIGRATION_ABI.json";
import config from "@/config/config.json";

export default {
  name: "App",
  data() {
    return {
      provider: null,
      web3Modal: null,
      isAlreadyConnected: false,
      TOKEN_ADDRESS: config.TOKEN_ADDRESS,
    };
  },
  beforeMount() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: "https://bsc-dataseed.binance.org/",
          },
          chainId: 56,
          network: "binance",
          infuraId: "bb72841c409242c18b89a2dd61a0acb4",
        },
      },
    };

    this.web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider: false,
      disableInjectedProvider: false,
    });
  },

  async mounted() {
    console.log("Version: 1.0.1");
    const url = new URL(config.NOMICS);
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const opts = {
      method: "GET",
      headers: {
        // "Access-Control-Allow-Origin": "http://localhost:8080",
      },
    };

    let result = await fetch(proxyUrl + url, opts).then((res) => res.json());
    console.log("Price:", result[0].price);

    let price = result[0].price;
    this.SET_PRICE(price);
  },

  // async mounted() {
  //   console.log("Version: 1.0.0");

  //   try {
  //     let result = await fetch(
  //       `https://api.pancakeswap.info/api/v2/tokens/${this.TOKEN_ADDRESS}`
  //     ).then((res) => res.json());
  //     console.log("Price:", result);
  //     this.SET_PRICE(result.data.price);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // },

  methods: {
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

          this.provider.on("disconnect", (error) => {
            console.log(error);
            this.onDisconnect();
          });
        }
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },

    async onProvider() {
      let web3 = new Web3(this.provider);

      let accounts = await web3.eth.getAccounts();
      let chainId = await web3.eth.getChainId();

      if (chainId != config.Network_Id) {
        this.$toasted.show("Connect your Wallet to " + config.Network_Name);
        return;
      }

      let TOKEN_INSTANCE = new web3.eth.Contract(nft.ABI, config.TOKEN_ADDRESS);
      let V1_INSTANCE = new web3.eth.Contract(v1.ABI, config.V1_ADDRESS);
      let STAKING_INSTANCE = new web3.eth.Contract(
        staking.ABI,
        config.STAKING_ADDRESS
      );

      let MIGRATION_INSTANCE = new web3.eth.Contract(
        migration.ABI,
        config.MIGRATION_ADDRESS
      );

      this.SET_WEB3(web3);
      this.SET_USER_ADDRESS(accounts[0]);
      this.SET_V1_INSTANCE(V1_INSTANCE);
      this.SET_TOKEN_INSTANCE(TOKEN_INSTANCE);
      this.SET_STAKING_INSTANCE(STAKING_INSTANCE);
      this.SET_MIGRATION_INSTANCE(MIGRATION_INSTANCE);

      this.isAlreadyConnected = true;
      this.$toasted.show("Wallet Connected Successfully");
    },

    async onDisconnect() {
      this.isApproved = false;
      this.stakedNFTs = [];
      this.unStakedNFTs = [];
      this.rewardBalance = 0;
      this.pendingTotalRewards = 0;

      localStorage.clear();
      this.SET_WEB3(null);
      this.SET_USER_ADDRESS(null);
      this.SET_TOKEN_INSTANCE(null);
      this.SET_STAKING_INSTANCE(null);
    },
  },
};
</script>
<style>
@import "./styles/main.css";
</style>
