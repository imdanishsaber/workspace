<template>
  <v-app>
    <Sidebar @onClose="onClose" :isOpen="isOpen"></Sidebar>
    <Header @onOpen="isOpen = !isOpen" @onConnect="onConnect"></Header>
    <v-main>
      <v-row class="start">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <router-view />
            </div>
          </div>
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Web3 from "web3";
// import Web3Modal from "web3modal";
import abis from "@/config/abis.json";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: { Sidebar, Header },
  data() {
    return {
      isOpen: true,
      provider: null,
      web3Modal: null,
    };
  },
  beforeMount() {
    // this.isOpen = !this.$vuetify.breakpoint.mobile;
    // const providerOptions = {
    //   walletconnect: {
    //     package: WalletConnectProvider,
    //     options: {
    //       rpc: {
    //         11155111:
    //           "https://sepolia.infura.io/v3/d85fda7b424b4212ba72f828f48fbbe1",
    //         // 1: "https://mainnet.infura.io/v3/d85fda7b424b4212ba72f828f48fbbe1",
    //       },
    //     },
    //   },
    // };

    // this.web3Modal = new Web3Modal({
    //   providerOptions,
    //   cacheProvider: false,
    //   disableInjectedProvider: false,
    // });
  },
  methods: {
    onClose(isClose) {
      if (!isClose) this.isOpen = false;
    },
    async onConnect() {
      try {
        this.provider = await this.web3Modal.connect();
        this.onProvider();
        this.provider.on("accountsChanged", (accounts) => {
          console.log(accounts);
          this.onProvider();
        });
        this.provider.on("chainChanged", (chainId) => {
          console.log(chainId);
          this.onProvider();
        });
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },
    async onProvider() {
      let web3 = new Web3(this.provider);
      let accounts = await web3.eth.getAccounts();
      let chainId = await web3.eth.getChainId();
      let CHAIN_IDs = Object.keys(this.NETWORKS);
      if (!CHAIN_IDs.includes(chainId.toString())) {
        this.$toasted.show(`Only Ethereum or Polygon Network Supported`);
        return;
      }

      this.SET_WEB3(web3);
      this.SET_CHAIN_ID(chainId);
      this.SET_USER_ADDRESS(accounts[0]);

      if (this.isEthereum) {
        let GTX_INSTANCE = new web3.eth.Contract(
          abis.GTX_ABI,
          this.GTX_ADDRESS
        );
        let TOKEN_INSTANCE = new web3.eth.Contract(
          abis.TOKEN_ABI,
          this.TOKEN_ADDRESS
        );
        let LOCKER_INSTANCE = new web3.eth.Contract(
          abis.LOCKER_ABI,
          this.LOCKER_ADDRESS
        );
        this.SET_GTX_INSTANCE(GTX_INSTANCE);
        this.SET_TOKEN_INSTANCE(TOKEN_INSTANCE);
        this.SET_LOCKER_INSTANCE(LOCKER_INSTANCE);
      } else {
        let TOKEN_INSTANCE = new web3.eth.Contract(
          abis.TOKEN_ABI,
          this.TOKEN_POLYGON_ADDRESS
        );
        this.SET_GTX_INSTANCE(null);
        this.SET_TOKEN_INSTANCE(TOKEN_INSTANCE);
        this.SET_LOCKER_INSTANCE(null);
      }
    },
  },
  watch: {
    async getUserAddress() {
      if (!this.getUserAddress) {
        this.provider = null;
      }
    },
  },
};
</script>