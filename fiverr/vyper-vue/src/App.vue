<template>
  <v-app>
    <Sidebar :isOpen="isOpen"></Sidebar>
    <Header @onOpen="isOpen = !isOpen" @onConnect="onConnect"></Header>
    <v-main>
      <div class="row pa-8">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import ABIS from "@/config/ABIS.json";

import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {
      isOpen: true,
      provider: null,
      web3Modal: null,
      isAlreadyConnected: false,
    };
  },
  beforeMount() {
    const providerOptions = {
      walletconnect: {
        options: {
          rpc: {
            1: "https://mainnet.infura.io/v3/",
          },
          chainId: 1,
          network: "binance",
          infuraId: "2af64799935b4be086c072d13f0dad73",
        },
      },
    };
    this.web3Modal = new Web3Modal({
      providerOptions,
      cacheProvider: false,
      disableInjectedProvider: false,
    });
  },
  mounted() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length) {
            this.provider = window.ethereum;
            this.onProvider();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
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

      let GTX_INSTANCE = new web3.eth.Contract(ABIS.GTX_ABI, this.GTX_ADDRESS);

      let TOKEN_INSTANCE = new web3.eth.Contract(
        ABIS.TOKEN_ABI,
        this.TOKEN_ADDRESS
      );

      let LOCKER_INSTANCE = new web3.eth.Contract(
        ABIS.LOCKER_ABI,
        this.LOCKER_ADDRESS
      );

      this.SET_WEB3(web3);
      this.SET_USER_ADDRESS(accounts[0]);
      this.SET_GTX_INSTANCE(GTX_INSTANCE);
      this.SET_TOKEN_INSTANCE(TOKEN_INSTANCE);
      this.SET_LOCKER_INSTANCE(LOCKER_INSTANCE);

      this.$toasted.show("Wallet Connected Successfully");
    },
  },
  components: { Sidebar, Header },
};
</script>
<style>
@import "./styles/style.css";
</style>
