<template>
  <v-app>
    <v-app-bar app>
      <img
        height="64px"
        src="@/assets/banner.png"
        style="scale: 1.7; margin-left: 20px"
      />
      <v-spacer></v-spacer>
      <template>
        <v-menu offset-y :nudge-width="80">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              outlined
              color="primary"
              class="px-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <img
                v-if="option.chainId == 1"
                height="24px"
                class="mr-3"
                src="@/assets/1.png"
              />
              <img
                v-if="option.chainId == 56"
                height="24px"
                class="mr-3"
                src="@/assets/56.png"
              />
              <img
                v-if="option.chainId == 369"
                height="24px"
                class="mr-3"
                src="@/assets/369.png"
              />
              <img
                v-if="option.chainId == 400"
                height="24px"
                class="mr-3"
                src="@/assets/400.png"
              />
              {{ option.label }}
              <v-icon style="font-size: 15px; margin-left: 15px"
                >mdi-arrow-down-drop-circle</v-icon
              >
            </v-btn>
          </template>

          <v-card class="pa-3">
            <v-list>
              <template v-for="(chain, i) in options">
                <v-list-item :key="i" @click="onSelect(chain)">
                  <v-list-item-title>{{ chain.label }}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-menu>
      </template>
      <v-spacer></v-spacer>
      <v-btn @click="onConnect" color="secondary" :disabled="!!getUserAddress">
        <img
          v-if="getUserAddress"
          height="24px"
          class="mr-3"
          src="@/assets/metamask.webp"
        />
        {{ getUserAddress ? addrTruncation(getUserAddress) : "Connect Wallet" }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="pa-10">
        <v-row class="justify-center">
          <div class="col-12 col-md-5">
            <v-card>
              <h1 class="mb-5 text-primary">Instructions</h1>
              <p class="mb-3">
                Instructions: Lorem ipsum dolor sit amet, consecteur adipiscing
                elit. Aenean massa magna, pharetra ac ex eu, cursus dapibus
                augue. Pellentesque mauris velit, dapibus non auctor a, bibendum
                vel dolor. Cras quis mollis mi. Integer ac elit enim.
                <br /><br />
                Duis vitae ligula eros. Cras scelerisque laoreet hendrerit. Nam
                eu leo eget leo molestie facilisis. Curabitur sit amet ipsum
                euismod, tempus erat a, rhoncus ligula. <br />
                <br />
                in volutpat tristique massa, id congue justo vulputate a. Nunc
                leo lectus, dictum sit amet orci eget, hendrerit gravida ex.
                Praesent non neque metus. Nullam facilisis libero orci, in
                laoreet leo dictum id. Donec magna eros, lacinia vitae finibus
                in, efficitur nec mi.
                <br /><br />
                Duis vitae ligula eros. Cras scelerisque laoreet hendrerit. Nam
                eu leo eget leo molestie facilisis. Curabitur sit amet ipsum
                euismod, tempus erat a, rhoncus ligula.
              </p>
            </v-card>
          </div>
          <div class="col-12 col-md-5">
            <v-card>
              <template v-if="chainId == 1">
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="ETH_ip1"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onETHBtn1"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert XBTC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="ETH_ip2"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onETHBtn2"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert USDC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
              </template>
              <template v-else-if="chainId == 56">
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="BSC_ip1"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onBSCBtn1"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert XBTC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="BSC_ip2"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onBSCBtn2"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert USDC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
              </template>
              <template v-else-if="chainId == 369">
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="PLS_ip1"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onPLSBtn1"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert XBTC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="PLS_ip2"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onPLSBtn2"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert USDC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="PLS_ip3"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onPLSBtn3"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert XBTC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="PLS_ip4"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onPLSBtn4"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert USDC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
              </template>
              <template v-else>
                <v-btn
                  block
                  x-large
                  color="primary"
                  @click="onX1Btn"
                  :disabled="!getUserAddress || isBtnLoading"
                >
                  {{ isBtnLoading ? "Loading.." : "Convert XBTC" }}
                </v-btn>
              </template>
            </v-card>
          </div>
        </v-row>
        <v-row class="justify-center">
          <div class="col-12 col-md-5">
            <v-card>
              <h1 class="text-primary mb-5">Your WALLET DATA</h1>
              <p class="text-primary mt-7 mb-1"><b> PulseChain: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total PLSB submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total XEN submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> ETH: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> BSC: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> X1 </b></p>
              <p class="d-flex justify-space-between">
                <span>Total X1-XBTC recieved: 40</span>
              </p>
            </v-card>
          </div>
          <div class="col-12 col-md-5">
            <v-card>
              <h1 class="text-primary mb-5">TOTAL COMMUNITY DATA</h1>
              <p class="text-primary mt-7 mb-1"><b> PulseChain: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total PLSB submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total XEN submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> ETH: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> BSC: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: 10</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> X1 </b></p>
              <p class="d-flex justify-space-between">
                <span>Total X1-XBTC recieved: 40</span>
              </p>
            </v-card>
          </div>
        </v-row>
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
      provider: null,
      web3Modal: null,
      isAlreadyConnected: false,
      chainId: null,
      ETH_ip1: 0,
      ETH_ip2: 0,
      BSC_ip1: 0,
      BSC_ip2: 0,
      PLS_ip1: 0,
      PLS_ip2: 0,
      PLS_ip3: 0,
      PLS_ip4: 0,
      isBtnLoading: false,

      option: { label: "Ethereum Mainnet", chainId: 1 },
      options: [
        { label: "Ethereum Mainnet", chainId: 1 },
        { label: "Binance Smart Chain", chainId: 56 },
        { label: "PulseChain", chainId: 369 },
        { label: "X1 Chain", chainId: 400 },
      ],
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
      this.chainId = await web3.eth.getChainId();
      console.log("this.chainId:", this.chainId);

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

      this.SET_MINTING_INSTANCE(MINTING_INSTANCE);
      this.SET_USDC_INSTANCE(USDC_INSTANCE);
      this.SET_HEX_INSTANCE(HEX_INSTANCE);
      this.SET_eHEX_INSTANCE(eHEX_INSTANCE);
      this.SET_PLSX_INSTANCE(PLSX_INSTANCE);

      this.$toasted.show("Wallet Connected Successfully");
    },

    async onSelect(option) {
      this.option = option;
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${option.chainId.toString(16)}` }],
        });
        return;
      } catch (switchError) {
        this.$toasted.show(
          "Please first add this network to your metamask wallet."
        );
        // if (switchError.code === 4902) {
        //   try {
        //     await window.ethereum.request({
        //       method: "wallet_addEthereumChain",
        //       params: [
        //         {
        //           chainId: web3.utils.toHex(config.CHAIN_ID),
        //           chainName: "PulseChain",
        //           rpcUrls: [config.RPC_URL],
        //           nativeCurrency: {
        //             name: "tPLS",
        //             symbol: "tPLS",
        //             decimals: 18,
        //           },
        //           blockExplorerUrls: [config.SCAN_LINK],
        //         },
        //       ],
        //     });
        //     return;
        //   } catch (addError) {}
        // }
      }
    },

    onETHBtn1() {},
    onETHBtn2() {},
    onBSCBtn1() {},
    onBSCBtn2() {},
    onPLSBtn1() {},
    onPLSBtn2() {},
    onPLSBtn3() {},
    onPLSBtn4() {},
    onX1Btn() {},
    onSubmit() {},
  },
  computed: {
    ...mapGetters("wallet", ["isLoading"]),
  },
};
</script>
<style>
@import "./styles/main.css";
</style>
