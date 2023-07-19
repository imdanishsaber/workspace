<template>
  <v-app>
    <v-app-bar app>
      <img
        height="64px"
        src="@/assets/banner.png"
        style="scale: 1.7; margin-left: 20px"
      />

      <v-spacer v-if="!$vuetify.breakpoint.smAndDown"></v-spacer>
      <template>
        <v-menu offset-y :nudge-width="80">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="!$vuetify.breakpoint.smAndDown"
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
                <v-list-item
                  :key="i"
                  @click="onSelect(chain)"
                  :disabled="chain.isDisabled"
                >
                  <v-list-item-title>{{ chain.label }}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-menu>
      </template>
      <v-spacer v-if="!$vuetify.breakpoint.smAndDown"></v-spacer>
      <v-btn
        v-if="!$vuetify.breakpoint.smAndDown"
        @click="onConnect"
        color="primary"
        :disabled="!!getUserAddress"
      >
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
      <div class="pa-5 pa-sm-10">
        <v-row v-if="$vuetify.breakpoint.smAndDown" class="justify-center">
          <div class="col-12">
            <div class="ex-as">
              <v-menu offset-y :nudge-width="80">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="primary"
                    class="px-2 mb-4"
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
                    <img
                      v-else
                      height="24px"
                      class="mr-3"
                      src="@/assets/1.png"
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
                      <v-list-item
                        :key="i"
                        @click="onSelect(chain)"
                        :disabled="chain.isDisabled"
                      >
                        <v-list-item-title>{{ chain.label }}</v-list-item-title>
                      </v-list-item>
                    </template>
                  </v-list>
                </v-card>
              </v-menu>
              <v-btn
                @click="onConnect"
                color="primary"
                :disabled="!!getUserAddress"
              >
                <img
                  v-if="getUserAddress"
                  height="24px"
                  class="mr-3"
                  src="@/assets/metamask.webp"
                />
                {{
                  getUserAddress
                    ? addrTruncation(getUserAddress)
                    : "Connect Wallet"
                }}
              </v-btn>
            </div>
          </div>
        </v-row>
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(BSC_XBTC_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(BSC_BUSD_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(PLS_XBTC_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(PLS_USDC_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(PLS_PLSB_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(PLS_XENC_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(ETH_XBTC_BAL, 3) }}</small
                  >
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
                  <small class="d-inline-block ml-auto mb-2"
                    >Balance: {{ eighteenFormat(ETH_USDC_BAL, 3) }}</small
                  >
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
                <span>Total XBTC submitted: {{ PLS_amountXBTCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: {{ PLS_amountUSDCDeposited }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total PLSB submitted: {{ PLS_amountPLSBBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total XENC submitted: {{ PLS_amountXENCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> ETH: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: {{ ETH_amountXBTCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: {{ ETH_amountUSDCDeposited }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> BSC: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: {{ BSC_amountXBTCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: {{ BSC_amountUSDCDeposited }}</span>
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
                <span>Total XBTC submitted: {{ PLS_totalXBTCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: {{ PLS_totalUSDCDeposited }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total PLSB submitted: {{ PLS_totalPLSBBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total XENC submitted: {{ PLS_totalXENCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> ETH: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: {{ ETH_totalXBTCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: {{ ETH_totalUSDCDeposited }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <v-divider></v-divider>
              <p class="text-primary mt-7 mb-1"><b> BSC: </b></p>
              <p class="d-flex justify-space-between">
                <span>Total XBTC submitted: {{ BSC_totalXBTCBurned }}</span>
                <span>(X1-XBTC recieved: 5)</span>
              </p>
              <p class="d-flex justify-space-between">
                <span>Total USDC submitted: {{ BSC_totalUSDCDeposited }}</span>
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

        <v-row class="justify-center">
          <div class="col-12">
            <v-card>
              <h1 class="text-primary mb-5">Disclaimer</h1>

              <p class="text-primary mt-7 mb-1">General Disclaimer:</p>
              <small>
                PLEASE READ THIS DISCLAIMER CAREFULLY. BY ACCESSING OR USING
                THIS WEBSITE, PARTICIPATING IN ANY CRYPTO-RELATED PROJECT, OR
                ENGAGING WITH ANY ASSOCIATED PRODUCTS, SERVICES, OR TOKENS, YOU
                AGREE TO BE BOUND BY THE TERMS AND CONDITIONS SET FORTH BELOW.
              </small>
              <br /><br />
              <p class="text-primary mt-7 mb-1">
                <b> General Risks </b>
              </p>
              <small>
                Investing in cryptocurrencies and blockchain-related projects
                carries inherent risks due to the speculative nature of the
                market, technological uncertainties, and regulatory
                complexities. There is no guarantee of returns or profits, and
                the value of your investment may fluctuate significantly,
                potentially resulting in partial or total loss.
              </small>

              <br /><br />
              <p class="text-primary mt-7 mb-1">
                <b> No Investment Advice </b>
              </p>
              <small>
                The information provided on this website, in any associated
                materials, or by the project team does not constitute financial,
                investment, legal, or tax advice. You should consult with your
                own professional advisors before making any decisions related to
                your participation in this project or any related transactions.
              </small>
              <br /><br />

              <p class="text-primary mt-7 mb-1">
                <b> Regulatory Compliance </b>
              </p>
              <small>
                The regulatory environment surrounding cryptocurrencies and
                blockchain technology is continually evolving. Compliance with
                any applicable laws and regulations is the responsibility of
                each participant. You should consult with legal and financial
                advisors to understand the legal and tax implications of
                participating in this project, as well as any potential risks
                associated with regulatory changes.
              </small>
              <br /><br />

              <p class="text-primary mt-7 mb-1">
                <b> No Guarantee of Project Success </b>
              </p>
              <small>
                The project team makes no guarantees, promises, or warranties,
                express or implied, regarding the success, adoption, or future
                value of the project, its tokens, products, or services. The
                project's roadmap, objectives, and milestones may be subject to
                change, delays, or cancellations without notice. You assume all
                risks associated with your participation in this project. </small
              >small> <br /><br />

              <p class="text-primary mt-7 mb-1">
                <b> Liability Limitations </b>
              </p>
              <small>
                In no event shall the project team, its affiliates, or any of
                their respective officers, directors, employees, or agents be
                liable for any direct, indirect, incidental, special,
                consequential, or exemplary damages, including but not limited
                to damages for loss of profits, goodwill, use, data, or other
                intangible losses resulting from your participation in this
                project or any related activities.
              </small>
              <br /><br />
              <small>
                By participating in this project or engaging with any associated
                products, services, or tokens, you acknowledge and agree that
                you have read, understood, and accepted the risks and conditions
                outlined in this disclaimer.
              </small>
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
      BSC_XBTC_BAL: 0,
      BSC_BUSD_BAL: 0,
      PLS_XBTC_BAL: 0,
      PLS_USDC_BAL: 0,
      PLS_PLSB_BAL: 0,
      PLS_XENC_BAL: 0,
      ETH_XBTC_BAL: 0,
      ETH_USDC_BAL: 0,
      isBtnLoading: false,

      option: {
        label: "Ethereum Mainnet",
        chainId: 1,
        symbol: "ETH",
        isDisabled: false,
      },
      options: [
        { label: "PulseChain", chainId: 369, symbol: "PLS", isDisabled: false },
        {
          label: "Ethereum Mainnet",
          chainId: 1,
          symbol: "ETH",
          isDisabled: false,
        },
        {
          label: "Binance Smart Chain",
          chainId: 56,
          symbol: "BSC",
          isDisabled: false,
        },
        { label: "X1 Chain", chainId: 400, symbol: "X1", isDisabled: true },
      ],

      // readValues
      ETH_amountXBTCBurned: 0,
      ETH_totalXBTCBurned: 0,
      ETH_amountUSDCDeposited: 0,
      ETH_totalUSDCDeposited: 0,
      BSC_amountXBTCBurned: 0,
      BSC_totalXBTCBurned: 0,
      BSC_amountUSDCDeposited: 0,
      BSC_totalUSDCDeposited: 0,
      PLS_amountXBTCBurned: 0,
      PLS_totalXBTCBurned: 0,
      PLS_amountUSDCDeposited: 0,
      PLS_totalUSDCDeposited: 0,
      PLS_amountPLSBBurned: 0,
      PLS_totalPLSBBurned: 0,
      PLS_amountXENCBurned: 0,
      PLS_totalXENCBurned: 0,
    };
  },

  beforeMount() {
    this.web3Modal = new Web3Modal({
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
    readValues() {
      const ETH_WEB3 = new Web3(
        "https://mainnet.infura.io/v3/2J6LT9OJUuoE2jThQiwsRVhBdn5/"
      );
      const BSC_WEB3 = new Web3("https://bsc-dataseed.binance.org/");
      const PLS_WEB3 = new Web3("https://rpc.pulsechain.com/");

      let ETHINSTANCE = new ETH_WEB3.eth.Contract(
        ABIS.ETH_CONVERTER_ABI,
        this.ETH_CONVERTER_ADDRESS
      );
      let BSCINSTANCE = new BSC_WEB3.eth.Contract(
        ABIS.BSC_CONVERTER_ABI,
        this.BSC_CONVERTER_ADDRESS
      );
      let PLSINSTANCE = new PLS_WEB3.eth.Contract(
        ABIS.PLS_CONVERTER_ABI,
        this.PLS_CONVERTER_ADDRESS
      );

      let addr = this.getUserAddress;
      Promise.all([
        ETHINSTANCE.methods.amountXBTCBurned(addr).call(),
        ETHINSTANCE.methods.totalXBTCBurned().call(),
        ETHINSTANCE.methods.amountUSDCDeposited(addr).call(),
        ETHINSTANCE.methods.totalUSDCDeposited().call(),

        BSCINSTANCE.methods.amountXBTCBurned(addr).call(),
        BSCINSTANCE.methods.totalXBTCBurned().call(),
        BSCINSTANCE.methods.amountUSDCDeposited(addr).call(),
        BSCINSTANCE.methods.totalUSDCDeposited().call(),

        PLSINSTANCE.methods.amountXBTCBurned(addr).call(),
        PLSINSTANCE.methods.totalXBTCBurned().call(),
        PLSINSTANCE.methods.amountUSDCDeposited(addr).call(),
        PLSINSTANCE.methods.totalUSDCDeposited().call(),
        PLSINSTANCE.methods.amountPLSBBurned(addr).call(),
        PLSINSTANCE.methods.totalPLSBBurned().call(),
        PLSINSTANCE.methods.amountXENCBurned(addr).call(),
        PLSINSTANCE.methods.totalXENCBurned().call(),
      ]).then(
        async ([
          ETH_amountXBTCBurned,
          ETH_totalXBTCBurned,
          ETH_amountUSDCDeposited,
          ETH_totalUSDCDeposited,
          BSC_amountXBTCBurned,
          BSC_totalXBTCBurned,
          BSC_amountUSDCDeposited,
          BSC_totalUSDCDeposited,
          PLS_amountXBTCBurned,
          PLS_totalXBTCBurned,
          PLS_amountUSDCDeposited,
          PLS_totalUSDCDeposited,
          PLS_amountPLSBBurned,
          PLS_totalPLSBBurned,
          PLS_amountXENCBurned,
          PLS_totalXENCBurned,
        ]) => {
          console.log("ETH_amountXBTCBurned:", ETH_amountXBTCBurned);
          console.log("ETH_totalXBTCBurned:", ETH_totalXBTCBurned);
          console.log("ETH_amountUSDCDeposited:", ETH_amountUSDCDeposited);
          console.log("ETH_totalUSDCDeposited:", ETH_totalUSDCDeposited);
          console.log("BSC_amountXBTCBurned:", BSC_amountXBTCBurned);
          console.log("BSC_totalXBTCBurned:", BSC_totalXBTCBurned);
          console.log("BSC_amountUSDCDeposited:", BSC_amountUSDCDeposited);
          console.log("BSC_totalUSDCDeposited:", BSC_totalUSDCDeposited);
          console.log("PLS_amountXBTCBurned:", PLS_amountXBTCBurned);
          console.log("PLS_totalXBTCBurned:", PLS_totalXBTCBurned);
          console.log("PLS_amountUSDCDeposited:", PLS_amountUSDCDeposited);
          console.log("PLS_totalUSDCDeposited:", PLS_totalUSDCDeposited);
          console.log("PLS_amountPLSBBurned:", PLS_amountPLSBBurned);
          console.log("PLS_totalPLSBBurned:", PLS_totalPLSBBurned);
          console.log("PLS_amountXENCBurned:", PLS_amountXENCBurned);
          console.log("PLS_totalXENCBurned:", PLS_totalXENCBurned);
          this.ETH_amountXBTCBurned = ETH_amountXBTCBurned;
          this.ETH_totalXBTCBurned = ETH_totalXBTCBurned;
          this.ETH_amountUSDCDeposited = ETH_amountUSDCDeposited;
          this.ETH_totalUSDCDeposited = ETH_totalUSDCDeposited;
          this.BSC_amountXBTCBurned = BSC_amountXBTCBurned;
          this.BSC_totalXBTCBurned = BSC_totalXBTCBurned;
          this.BSC_amountUSDCDeposited = BSC_amountUSDCDeposited;
          this.BSC_totalUSDCDeposited = BSC_totalUSDCDeposited;
          this.PLS_amountXBTCBurned = PLS_amountXBTCBurned;
          this.PLS_totalXBTCBurned = PLS_totalXBTCBurned;
          this.PLS_amountUSDCDeposited = PLS_amountUSDCDeposited;
          this.PLS_totalUSDCDeposited = PLS_totalUSDCDeposited;
          this.PLS_amountPLSBBurned = PLS_amountPLSBBurned;
          this.PLS_totalPLSBBurned = PLS_totalPLSBBurned;
          this.PLS_amountXENCBurned = PLS_amountXENCBurned;
          this.PLS_totalXENCBurned = PLS_totalXENCBurned;
        }
      );
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
      this.readValues();
      this.getBalances();
    },

    async onSelect(option) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${option.chainId.toString(16)}` }],
        });
        this.onProvider();
        this.option = option;
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

    getBalances() {
      let instnceOne = null;
      let instnceTwo = null;
      let instnceThree = null;
      let instnceFour = null;
      if (this.option.symbol === "ETH") {
        instnceOne = this.ETH_XBTC_INSTANCE;
        instnceTwo = this.ETH_USDC_INSTANCE;
        Promise.all([
          instnceOne.methods.balanceOf(this.getUserAddress).call(),
          instnceTwo.methods.balanceOf(this.getUserAddress).call(),
        ]).then(([bal1, bal2]) => {
          console.log("bal1", bal1, "bal2", bal2);
          this.ETH_XBTC_BAL = bal1;
          this.ETH_USDC_BAL = bal2;
        });
      } else if (this.option.symbol === "BSC") {
        instnceOne = this.BSC_XBTC_INSTANCE;
        instnceTwo = this.BSC_BUSD_INSTANCE;
        Promise.all([
          instnceOne.methods.balanceOf(this.getUserAddress).call(),
          instnceTwo.methods.balanceOf(this.getUserAddress).call(),
        ]).then(([bal1, bal2]) => {
          console.log("bal1", bal1, "bal2", bal2);
          this.BSC_XBTC_BAL = bal1;
          this.BSC_BUSD_BAL = bal2;
        });
      } else if (this.option.symbol === "PLS") {
        instnceOne = this.PLS_XBTC_INSTANCE;
        instnceTwo = this.PLS_USDC_INSTANCE;
        instnceThree = this.PLS_PLSB_INSTANCE;
        instnceFour = this.PLS_XENC_INSTANCE;
        Promise.all([
          instnceOne.methods.balanceOf(this.getUserAddress).call(),
          instnceTwo.methods.balanceOf(this.getUserAddress).call(),
          instnceThree.methods.balanceOf(this.getUserAddress).call(),
          instnceFour.methods.balanceOf(this.getUserAddress).call(),
        ]).then(([bal1, bal2]) => {
          console.log("bal1", bal1, "bal2", bal2);
          this.PLS_XBTC_BAL = bal1;
          this.PLS_USDC_BAL = bal2;
          this.PLS_PLSB_BAL = bal2;
          this.PLS_XENC_BAL = bal2;
        });
      }
    },

    async onSubmit(name) {
      this.isBtnLoading = true;
      let amt = this[`${this.option.symbol}_${name}`];
      let amount = Number(amt) * 1e18;
      let balance = this[`${this.option.symbol}_${name}_BAL`];

      let contractAddr = this[`${this.option.symbol}_CONVERTER_ADDRESS`];
      let instnceOne = this[`${this.option.symbol}_${name}_INSTANCE`];
      let instnceTwo = this[`${this.option.symbol}_CONVERTER_INSTANCE`];
      console.log("amt:", amt);
      console.log("balance:", balance);

      Promise.all([
        instnceOne.methods.allowance(this.getUserAddress, contractAddr).call(),
      ]).then(([allowance]) => {
        if (Number(amount) > Number(balance)) {
          this.isBtnLoading = false;
          this.$toasted.show("Insufficient balance");
        } else if (Number(amount) > Number(allowance)) {
          instnceOne.methods
            .approve(contractAddr, "1")
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
              this.readValues();
              this.getBalances();
              this.$toasted.show("Transaction Completed successfully!");
            })
            .on("error", (error, receipt) => {
              this.isBtnLoading = false;
              console.log("Error: ", receipt);
              this.$toasted.show("Transaction is Rejected!");
            });
        } else {
          let method = name.includes("USDC")
            ? "depositUSDC"
            : name.includes("BUSD")
            ? "depositUSDC"
            : `burn${name}`;
          console.log("method:", method);
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
              this.readValues();
              this.getBalances();
              this.$toasted.show("Transaction Completed successfully!");
            })
            .on("error", (error, receipt) => {
              this.isBtnLoading = false;
              console.log("Error: ", receipt);
              this.$toasted.show("Transaction is Rejected!");
            });
        }
      });
    },
  },
};
</script>
<style>
@import "./styles/main.css";
</style>
