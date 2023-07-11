<template>
  <v-app id="inspire" :class="isLoading ? 'loading' : ''">
    <div class="main-loader" v-if="isLoading">
      <img src="@/assets/loader.webp" />
    </div>
    <v-navigation-drawer v-model="drawer" :width="300" app>
      <v-list nav>
        <v-list-item>
          <img
            src="@/assets/PulseChainCarnival.jpg"
            style="width: 100%; height: 100%; margin: auto"
          />
        </v-list-item>
        <v-list-item-group color="primary">
          <template v-for="(item, i) in items">
            <v-list-item
              :key="i + 'link'"
              exact
              :to="{ name: item.link }"
              :disabled="item.disable"
            >
              <v-list-item-content>
                <img width="45px" :src="getImgUrl(item.icon)" />
              </v-list-item-content>
            </v-list-item>
          </template>
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x488Db574C77dd27A07f9C97BAc673BC8E9fC6Bf3&chain=mainnet"
            style="text-decoration: none"
            target="_blank"
          >
            <v-list-item>
              <v-list-item-content>
                <img width="45px" :src="getImgUrl('lit_carnuniswap.png')" />
              </v-list-item-content>
            </v-list-item>
          </a>
          <a
            href="https://twitter.com/KB_Dev_Official"
            style="text-decoration: none"
            target="_blank"
          >
            <v-list-item>
              <v-list-item-content>
                <img width="45px" :src="getImgUrl('lit_twitter.png')" />
              </v-list-item-content>
            </v-list-item>
          </a>
          <a
            href="https://t.me/waatca"
            style="text-decoration: none"
            target="_blank"
          >
            <v-list-item>
              <v-list-item-content>
                <img width="45px" :src="getImgUrl('lit_telegram.png')" />
              </v-list-item-content>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        style="background-color: #faf9f6"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h1 v-if="$route.name == 'Hex'">
        This is just a preview of whats to come
      </h1>
      <v-btn
        v-if="
          $route.name !== 'WhitePaper' &&
          $route.name !== 'Faq' &&
          $route.name !== 'PulseBitcoinFaucet' &&
          $route.name !== 'LotteriesHour' &&
          $route.name !== 'LotteriesWeek'
        "
        color="primary"
        class="mr-4"
      >
        <a :href="dynamicLink" target="_blank" class="white--text">
          Contract
        </a>
      </v-btn>
      <v-btn v-if="$route.name === 'WhitePaper'" color="primary" class="mr-4">
        <a
          class="white--text"
          href="./PulseDogecoin_Staking_Carnival_White_PaperV3.pdf"
          download="PulseDogecoin_Staking_Carnival_White_PaperV3.pdf"
        >
          <v-icon left> mdi-download </v-icon>
          Download
        </a>
      </v-btn>
      <v-btn @click="onConnect" color="primary" :readonly="!!getUserAddress">
        {{ getUserAddress ? addrTruncation(getUserAddress) : "Connect Wallet" }}
      </v-btn>
    </v-app-bar>

    <v-main :class="$route.name">
      <div class="pa-5 pa-sm-8" style="height: 100%">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import ABIS from "@/config/ABIS.json";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drawer: null,
      showSubLinks: false,
      items: [
        {
          text: "PulseChain Lock",
          icon: "lit_pulsebitcoinlock.png",
          link: "PulseBitcoinLockApp",
          disable: false,
        },
        {
          text: "Minting",
          icon: "lit_pulsebitcoinlock.png",
          link: "Minting",
          disable: false,
        },
        {
          text: "White Paper",
          icon: "lit_wp.png",
          link: "WhitePaper",
          disable: false,
        },
        { text: "F.A.Q.", icon: "lit_faq.png", link: "Faq", disable: false },
        {
          text: "Disclaimer",
          icon: "lit_disclaimer.png",
          link: "Disclaimer",
          disable: false,
        },
      ],
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
      // let RIDE_INSTANCE = new web3.eth.Contract(
      //   ABIS.RIDE_ABI,
      //   this.RIDE_ADDRESS
      // );

      // let LOCK_INSTANCE = new web3.eth.Contract(
      //   ABIS.LOCK_ABI,
      //   this.LOCK_ADDRESS
      // );
      let MINTING_INSTANCE = new web3.eth.Contract(
        ABIS.MINTING_ABI,
        this.MINTING_ADDRESS
      );
      let USDC_INSTANCE = new web3.eth.Contract(
        ABIS.USDC_ABI,
        this.USDC_ADDRESS
      );
      let HEX_INSTANCE = new web3.eth.Contract(ABIS.HEX_ABI, this.HEX_ADDRESS);
      let eHEX_INSTANCE = new web3.eth.Contract(
        ABIS.eHEX_ABI,
        this.eHEX_ADDRESS
      );
      let PLSX_INSTANCE = new web3.eth.Contract(
        ABIS.PLSX_ABI,
        this.PLSX_ADDRESS
      );
      this.SET_WEB3(web3);
      this.SET_USER_ADDRESS(accounts[0]);

      // this.SET_RIDE_INSTANCE(RIDE_INSTANCE);
      // this.SET_LOCK_INSTANCE(LOCK_INSTANCE);
      this.SET_MINTING_INSTANCE(MINTING_INSTANCE);
      this.SET_USDC_INSTANCE(USDC_INSTANCE);
      this.SET_HEX_INSTANCE(HEX_INSTANCE);
      this.SET_eHEX_INSTANCE(eHEX_INSTANCE);
      this.SET_PLSX_INSTANCE(PLSX_INSTANCE);

      this.$toasted.show("Wallet Connected Successfully");
    },

    downloadPDF() {
      var link = document.createElement("a");
      link.href = "./PulseDogecoin_Staking_Carnival_White_PaperV3.pdf";
      link.download = "PulseDogecoin_Staking_Carnival_White_PaperV3.pdf";
    },

    getImgUrl(pet) {
      var images = require.context("./assets/", false, /\.png$/);
      return images("./" + pet);
    },
  },
  computed: {
    ...mapGetters("wallet", ["isLoading"]),
    dynamicLink() {
      let url = "";
      switch (this.$route.name) {
        case "StakePulseDogecoin":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.STAKING_ADDRESS;
          break;
        case "CommunityCarnivalAsicMiner":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.ASIC_MINER_ADDRESS;
          break;
        case "FreeCarn":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.NFT_REWARDS_ADDRESS;
          break;
        case "FreeHex":
          url =
            this.ETHERSCAN_URL_BASE + "address/" + this.NFT_HEX_REWARDS_ADDRESS;
          break;
        case "Hex":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.HEX_STAKER_ADDRESS;
          break;
        case "CarnTicketBooth":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.CARN_ADDRESS;
          break;
        case "BuyAndBurn":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.BURN_ADDRESS;
          break;
        case "Lotteries":
          url = this.ETHERSCAN_URL_BASE + "address/";
          break;
        case "WAATCA":
          url = this.ETHERSCAN_URL_BASE + "address/" + this.WAATCA_ADDRESS;
      }
      return url;
    },
  },
};
</script>
<style>
@import "./styles/main.css";
</style>
