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
                v-if="option.chainId == 56"
                height="24px"
                class="mr-3"
                src="@/assets/56.png"
              />
              <img
                v-else-if="option.chainId == 369"
                height="24px"
                class="mr-3"
                src="@/assets/369.png"
              />
              <img
                v-else-if="option.chainId == 400"
                height="24px"
                class="mr-3"
                src="@/assets/400.png"
              />
              <img v-else height="24px" class="mr-3" src="@/assets/1.png" />
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
              <template v-if="chainId == 56">
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="BSC_XBTC"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('XBTC')"
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
                    v-model.number="BSC_BUSD"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('BUSD')"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert BUSD" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
              </template>
              <template v-else-if="chainId == 369">
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="PLS_XBTC"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('XBTC')"
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
                    v-model.number="PLS_USDC"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('USDC')"
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
                    v-model.number="PLS_PLSB"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('PLSB')"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert PLSB" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="PLS_XENC"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('XENC')"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert XENC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
              </template>
              <template v-else-if="chainId == 400">
                <v-btn
                  block
                  x-large
                  color="primary"
                  @click="onSubmit('XBTC')"
                  :disabled="!getUserAddress || isBtnLoading"
                >
                  {{ isBtnLoading ? "Loading.." : "Convert XBTC" }}
                </v-btn>
              </template>
              <template v-else>
                <div>
                  <v-text-field
                    outlined
                    type="number"
                    v-model.number="ETH_XBTC"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('XBTC')"
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
                    v-model.number="ETH_USDC"
                    label="Enter Amount"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-btn
                    block
                    x-large
                    color="primary"
                    @click="onSubmit('USDC')"
                    :disabled="!getUserAddress || isBtnLoading"
                  >
                    {{ isBtnLoading ? "Loading.." : "Convert USDC" }}
                  </v-btn>
                  <v-divider class="my-4"></v-divider>
                </div>
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
                <span>Total XENC submitted: 10</span>
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
                <span>Total XENC submitted: 10</span>
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
export default {
  name: "App",
  data() {
    return {
      provider: null,
      web3Modal: null,
      isAlreadyConnected: false,
      chainId: null,
      BSC_XBTC: 0,
      BSC_BUSD: 0,
      PLS_XBTC: 0,
      PLS_USDC: 0,
      PLS_PLSB: 0,
      PLS_XENC: 0,
      ETH_XBTC: 0,
      ETH_USDC: 0,
      isBtnLoading: false,

      option: { label: "Ethereum Mainnet", chainId: 1, symbol: "ETH" },
      options: [
        { label: "Ethereum Mainnet", chainId: 1, symbol: "ETH" },
        { label: "Binance Smart Chain", chainId: 56, symbol: "BSC" },
        { label: "PulseChain", chainId: 369, symbol: "PLS" },
        { label: "X1 Chain", chainId: 400, symbol: "X1" },
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
      this.option = this.options.find((f) => f.chainId == this.chainId);
      this.SET_WEB3(web3);
      this.SET_USER_ADDRESS(accounts[0]);

      if (this.chainId == 56) {
        let BSC_XBTC_INSTANCE = new web3.eth.Contract(
          ABIS.BSC_XBTC_ABI,
          this.BSC_XBTC_ADDRESS
        );
        let BSC_BUSD_INSTANCE = new web3.eth.Contract(
          ABIS.BSC_BUSD_ABI,
          this.BSC_BUSD_ADDRESS
        );
        let BSC_CONVERTER_INSTANCE = new web3.eth.Contract(
          ABIS.BSC_CONVERTER_ABI,
          this.BSC_CONVERTER_ADDRESS
        );
        this.SET_BSC_XBTC_INSTANCE(BSC_XBTC_INSTANCE);
        this.SET_BSC_BUSD_INSTANCE(BSC_BUSD_INSTANCE);
        this.SET_BSC_CONVERTER_INSTANCE(BSC_CONVERTER_INSTANCE);
      } else if (this.chainId == 369) {
        let PLS_XBTC_INSTANCE = new web3.eth.Contract(
          ABIS.PLS_XBTC_ABI,
          this.PLS_XBTC_ADDRESS
        );
        let PLS_USDC_INSTANCE = new web3.eth.Contract(
          ABIS.PLS_USDC_ABI,
          this.PLS_USDC_ADDRESS
        );
        let PLS_PLSB_INSTANCE = new web3.eth.Contract(
          ABIS.PLS_PLSB_ABI,
          this.PLS_PLSB_ADDRESS
        );
        let PLS_XENC_INSTANCE = new web3.eth.Contract(
          ABIS.PLS_XENC_ABI,
          this.PLS_XENC_ADDRESS
        );
        let PLS_CONVERTER_INSTANCE = new web3.eth.Contract(
          ABIS.PLS_CONVERTER_ABI,
          this.PLS_CONVERTER_ADDRESS
        );
        console.log('PLS_XENC_INSTANCE:',PLS_XENC_INSTANCE);
        this.SET_PLS_XBTC_INSTANCE(PLS_XBTC_INSTANCE);
        this.SET_PLS_USDC_INSTANCE(PLS_USDC_INSTANCE);
        this.SET_PLS_PLSB_INSTANCE(PLS_PLSB_INSTANCE);
        this.SET_PLS_XENC_INSTANCE(PLS_XENC_INSTANCE);
        this.SET_PLS_CONVERTER_INSTANCE(PLS_CONVERTER_INSTANCE);
      } else if (this.chainId == 400) {
        let X1_CONVERTER_INSTANCE = new web3.eth.Contract(
          ABIS.X1_CONVERTER_ABI,
          this.X1_CONVERTER_ADDRESS
        );
        this.SET_X1_CONVERTER_INSTANCE(X1_CONVERTER_INSTANCE);
      } else {
        let ETH_XBTC_INSTANCE = new web3.eth.Contract(
          ABIS.ETH_XBTC_ABI,
          this.ETH_XBTC_ADDRESS
        );
        let ETH_USDC_INSTANCE = new web3.eth.Contract(
          ABIS.ETH_USDC_ABI,
          this.ETH_USDC_ADDRESS
        );
        let ETH_CONVERTER_INSTANCE = new web3.eth.Contract(
          ABIS.ETH_CONVERTER_ABI,
          this.ETH_CONVERTER_ADDRESS
        );
        this.SET_ETH_XBTC_INSTANCE(ETH_XBTC_INSTANCE);
        this.SET_ETH_USDC_INSTANCE(ETH_USDC_INSTANCE);
        this.SET_ETH_CONVERTER_INSTANCE(ETH_CONVERTER_INSTANCE);
      }

      this.$toasted.show("Wallet Connected Successfully");
    },

    async onSelect(option) {
      this.option = option;
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${option.chainId.toString(16)}` }],
        });
        this.onProvider();
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

    async onSubmit(name) {
      this.isBtnLoading = true;

      let contractAddr = this[`${this.option.symbol}_CONVERTER_ADDRESS`];
      let instnceOne = this[`${this.option.symbol}_${name}_INSTANCE`];
      let instnceTwo = this[`${this.option.symbol}_CONVERTER_INSTANCE`];
      let amt = this[`${this.option.symbol}_${name}`];
      let amount = Number(amt) * 1e18;
      console.log("contractAddr:", contractAddr);
      console.log("instnceOne:", instnceOne);
      console.log("instnceOne:", `${this.option.symbol}_${name}_INSTANCE`);
      console.log("instnceTwo:", instnceTwo);
      console.log("instnceTwo:", `${this.option.symbol}_CONVERTER_INSTANCE`);
      console.log("amt:", amt);
      let a = await instnceOne.methods.balanceOf(this.getUserAddress).call();
      console.log("a:", a);
      Promise.all([
        instnceOne.methods.balanceOf(this.getUserAddress).call(),
        instnceOne.methods.allowance(this.getUserAddress, contractAddr).call(),
      ]).then(([balance, allowance]) => {
        console.log(`${this.option.symbol} ${name}`, "balance:", balance);
        console.log(`${this.option.symbol} ${name}`, "allowance:", allowance);
        // if (Number(amount) > Number(balance)) {
        //   this.isBtnLoading = false;
        //   this.$toasted.show("Insufficient balance");
        // } else
        // if (Number(amount) > Number(allowance)) {
        //   instnceOne.methods
        //     .approve(contractAddr, "1")
        //     .send({
        //       from: this.getUserAddress,
        //     })
        //     .on("transactionHash", (hash) => {
        //       console.log("Transaction Hash: ", hash);
        //       this.$toasted.show("Transaction is Submitted!");
        //     })
        //     .on("receipt", (receipt) => {
        //       this.isBtnLoading = false;
        //       this.onDeposit();
        //       console.log("Receipt: ", receipt);
        //       this.$toasted.show("Transaction Completed successfully!");
        //     })
        //     .on("error", (error, receipt) => {
        //       this.isBtnLoading = false;
        //       console.log("Error: ", receipt);
        //       this.$toasted.show("Transaction is Rejected!");
        //     });
        // } else {
        let method = name.includes("USDC")
          ? "depositUSDC"
          : name.includes("BUSD")
          ? "depositUSDC"
          : `burn${name}`;
          console.log('method:',method);
        instnceTwo.methods[method](amount.toString())
          .send({
            from: this.getUserAddress,
          })
          .on("transactionHash", (hash) => {
            console.log("Transaction Hash: ", hash);
            this.$toasted.show("Transaction is Submitted!");
          })
          .on("receipt", (receipt) => {
            this.isBtnLoading = false;
            console.log("Receipt: ", receipt);
            this.$toasted.show("Transaction Completed successfully!");
          })
          .on("error", (error, receipt) => {
            this.isBtnLoading = false;
            console.log("Error: ", receipt);
            this.$toasted.show("Transaction is Rejected!");
          });
        // }
      });
    },
  },
};
</script>
<style>
@import "./styles/main.css";
</style>
