<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :width="300" app>
      <div class="sidebar">
        <a class="logo-expand" href="#">Vote Escrowed</a>
        <div class="side-wrapper">
          <div class="side-menu">
            <router-link :to="{name: 'Wallet'}" class="sidebar-link discover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.313h-4.231c-1.964 0-3.556-1.552-3.556-3.466 0-1.915 1.592-3.467 3.556-3.467v-.034zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74zm.151 2.661h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746h-.329a.766.766 0 00-.54.213.727.727 0 00-.224.524c0 .413.34.75.764.754zM6.738 8.382h5.644a.755.755 0 00.765-.746.755.755 0 00-.765-.745H6.738a.755.755 0 00-.765.737c0 .413.341.75.765.754z"
                ></path>
              </svg>
              Wallet
            </router-link>
            <router-link :to="{name: 'Minting'}" class="sidebar-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M11.23 7.29V3.283c0-.427.34-.782.77-.782.385 0 .711.298.763.677l.007.104v4.01h4.78c2.38 0 4.335 1.949 4.445 4.38l.005.215v5.04c0 2.447-1.887 4.456-4.232 4.569l-.208.005H6.44c-2.38 0-4.326-1.94-4.435-4.379L2 16.905v-5.03c0-2.447 1.878-4.466 4.222-4.58l.208-.004h4.8v6.402l-1.6-1.652a.755.755 0 00-1.09 0 .81.81 0 00-.22.568c0 .157.045.32.14.459l.08.099 2.91 3.015c.14.155.34.237.55.237a.735.735 0 00.465-.166l.075-.071 2.91-3.015c.3-.31.3-.816 0-1.126a.755.755 0 00-1.004-.077l-.086.077-1.59 1.652V7.291h-1.54z"
                ></path>
              </svg>
              Mint
            </router-link>
            <router-link :to="{name: 'Locking'}" class="sidebar-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1535 16.64L14.995 13.77C15.2822 13.47 15.2822 13 14.9851 12.71C14.698 12.42 14.2327 12.42 13.9455 12.71L12.3713 14.31V9.49C12.3713 9.07 12.0446 8.74 11.6386 8.74C11.2327 8.74 10.896 9.07 10.896 9.49V14.31L9.32178 12.71C9.03465 12.42 8.56931 12.42 8.28218 12.71C7.99505 13 7.99505 13.47 8.28218 13.77L11.1139 16.64C11.1832 16.71 11.2624 16.76 11.3515 16.8C11.4406 16.84 11.5396 16.86 11.6386 16.86C11.7376 16.86 11.8267 16.84 11.9158 16.8C12.005 16.76 12.0842 16.71 12.1535 16.64ZM19.3282 9.02561C19.5609 9.02292 19.8143 9.02 20.0446 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5 22 16.0446 22H8.17327C5.58911 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.4901 2 7.96535 2H13.2525C13.5 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.1931 9.01 17.0149 9.02C17.4333 9.02 17.8077 9.02318 18.1346 9.02595C18.3878 9.02809 18.6125 9.03 18.8069 9.03C18.9479 9.03 19.1306 9.02789 19.3282 9.02561ZM19.6045 7.5661C18.7916 7.5691 17.8322 7.5661 17.1421 7.5591C16.047 7.5591 15.145 6.6481 15.145 5.5421V2.9061C15.145 2.4751 15.6629 2.2611 15.9579 2.5721C16.7203 3.37199 17.8873 4.5978 18.8738 5.63395C19.2735 6.05379 19.6436 6.44249 19.945 6.7591C20.2342 7.0621 20.0223 7.5651 19.6045 7.5661Z"
                ></path>
              </svg>
              Locking
            </router-link>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        style="background-color: #faf9f6"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn @click="onConnect" color="primary" :readonly="!!getUserAddress">
        <img
          src="@/assets/metamask.webp"
          width="25px"
          style="
            background: white;
            border-radius: 20px;
            padding: 2px;
            margin-right: 5px;
          "
          alt=""
        />
        {{ getUserAddress ? addrTruncation(getUserAddress) : "Connect Wallet" }}
      </v-btn>
      <button class="like red" id="connectButton" onclick="onConnect()">
        <img
          src="@/assets/metamask.webp"
          width="25px"
          style="
            background: white;
            border-radius: 20px;
            padding: 2px;
            margin-right: 5px;
          "
          alt=""
        />
        Connect Wallet
      </button>
    </v-app-bar>

    <v-main :class="$route.name">
      <div class="pa-8" style="height: 100%">
        <div class="row">
          <div class="col-12">
            <div class="card pa-10">
              <div class="card-body">
                <router-view />
              </div>
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
export default {
  name: "App",
  data() {
    return {
      drawer: null,
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
          this.$toasted.show(`Only Ethereum Network is supported`);
          return;
        }
      }

      let TOKEN_INSTANCE = new web3.eth.Contract(
        ABIS.TOKEN_ABI,
        this.TOKEN_ADDRESS
      );

      let LOCKER_INSTANCE = new web3.eth.Contract(
        ABIS.LOCKER_ABI,
        this.LOCKER_ADDRESS
      );

      let GTX_INSTANCE = new web3.eth.Contract(ABIS.GTX_ABI, this.GTX_ADDRESS);

      this.SET_WEB3(web3);
      this.SET_USER_ADDRESS(accounts[0]);
      this.SET_TOKEN_INSTANCE(TOKEN_INSTANCE);
      this.SET_LOCKER_INSTANCE(LOCKER_INSTANCE);
      this.SET_GTX_INSTANCE(GTX_INSTANCE);
      this.$toasted.show("Wallet Connected Successfully");
    },
  },
};
</script>
<style>
@import "./styles/style.css";
</style>
