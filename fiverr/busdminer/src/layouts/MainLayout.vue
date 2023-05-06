<template>
  <q-layout>
    <q-page-container>
      <q-toolbar class="q-py-lg q-px-xl">
        <img src="~assets/logo.png" style="height: 50px; max-width: 150px" />
        <q-space></q-space>
        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Connect" />
          <q-tab name="tab2" label="Telegram" />
          <q-tab name="tab3" label="Docs" />
        </q-tabs>
        <q-space></q-space>
        <q-btn no-caps color="primary" label="Connect" @click="connectWallet" />
      </q-toolbar>
      <div class="text-center">
        <h1>
          Best Partner For Learn and <br />
          Buy or Sell Cryptocurrency
        </h1>
        <small class="tag"
          >You can get started treding cryptocurrency instantly and
          easily</small
        >
        <div>
          <div class="box">
            <q-input dense outlined v-model="spendAllowance" />
            <b class="text-white">BUSD</b>
          </div>
          <q-btn
            no-caps
            color="white"
            text-color="primary"
            class="q-mx-sm approve"
            label="Approve Spend"
            @click="approve"
          />
        </div>
        <small class="tag text-primary q-my-sm"
          >Your Spend Limit is {{ spendLimite }}</small
        >
      </div>
      <q-card>
        <div class="row q-col-gutter-x-md">
          <div class="col-12 col-md-3">
            <img
              class="sm-logo"
              src="~assets/logo-sm.png"
              style="height: 40px; max-width: 150px"
            />
            <q-btn
              color="primary"
              class="q-mt-md"
              icon="home"
              label="Dashboar"
            />
            <strong class="block text-weight-bolder q-mt-lg q-mb-md"
              >Referral Link</strong
            >
            <strong class="link" v-html="referralLink"></strong>
          </div>
          <div class="col-12 col-md-6">
            <div>
              <p class="mini q-mt-md">Hire miners to earn BUSD</p>
              <p class="mini text-dark">Active Miners</p>
            </div>
            <div>
              <div class="main-box">
                <p>You have {{ numOfMiners }} working for you</p>
                <p>Mining at {{ productionRate }} transaction speed per hour</p>
                <div class="box">
                  <q-input dense outlined v-model="ethToSpend" />
                  <b class="text-white">BUSD</b>
                </div>
                <p class="q-ml-md" style="font-size: 10px; margin-bottom: 10px">
                  Hire {{ eggsToBuy }} Miners
                </p>

                <q-btn
                  no-caps
                  text-color="white"
                  class="hire"
                  :label="'Hire ' + eggsToBuy + ' Miners'"
                  @click="buyEggs"
                />
              </div>
              <div class="row">
                <div class="col-12">
                  <strong class="cbal"
                    >Contract Balance: {{ contractBal }} BSUD</strong
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="flex sm-align">
              <q-icon
                class="text-grey q-mt-sm q-mr-lg"
                size="25px"
                name="notifications"
              />

              <img src="~assets/profile.png" style="height: 35px" />
            </div>
            <strong class="block text-weight-bolder q-mt-lg"
              >Your BSUD Basket</strong
            >
            <strong class="bal">
              Basket Balance<br />
              <b class="block q-pb-md">{{ basketBalance }}</b>
              Basket will be full in<br />
              <b>{{ untilFull }}</b>
            </strong>
            <div class="q-mt-lg">
              <q-btn
                no-caps
                color="primary"
                class="bx q-py-md q-mr-xs"
                icon="arrow_downward"
                label="Hire More"
                @click="hatchEggs"
              />
              <q-btn
                no-caps
                color="primary"
                class="bx df q-py-md q-ml-xs"
                icon="arrow_upward"
                label="Withdraw"
                @click="sellEggs"
              />
            </div>
          </div>
        </div>
        <div class="row q-mt-md">
          <div class="col-12">
            <div class="flex box-colored">
              <div class="divwt">
                <div class="row text-center">
                  <div class="col-12">
                    <h1>How it Works</h1>
                  </div>
                  <div class="col-12 col-md-4">
                    <q-btn round color="white" icon="shopping_cart" /> <br />
                    <strong class="block q-my-md"> Approve Spend</strong>
                    <small class="block q-mb-lg text-grey text-weight-bold"
                      >Fully non-custodial and udited by<br />
                      Quanstamp, Supervised by FCA.</small
                    >
                  </div>

                  <div class="col-12 col-md-4">
                    <q-btn round color="white" icon="shopping_cart" /> <br />
                    <strong class="block q-my-md"> Hire Miners</strong>
                    <small class="block q-mb-lg text-grey text-weight-bold"
                      >State of the art onboarding process to fit <br />both the
                      newbies and the pros.</small
                    >
                  </div>
                  <div class="col-12 col-md-4">
                    <q-btn round color="white" icon="shopping_cart" /> <br />
                    <strong class="block q-my-md"> Withdraw</strong>
                    <small class="block q-mb-lg text-grey text-weight-bold"
                      >We connect with your bank to do KYC. <br />
                      You get your crypto fast.</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script>
var CryptoJS = require("crypto-js");
// import Web3 from 'web3'

export default {
  name: "MainLayout",
  data() {
    return {
      canSell: true,
      canHatch: true,
      lastNumEggs: -1,
      lastHatchTime: 0,
      lastNumMiners: -1,
      eggstohatch1: 2592000,
      lastSecondsUntilFull: 100,
      lastUpdate: new Date().getTime(),

      spendAllowance: 10000,
      spendLimite: 0,
      ethToSpend: 500,
      contractBal: 0,
      eggsToBuy: 0,
      basketBalance: 0,
      numOfMiners: 0,
      productionRate: 0,
      untilFull: 0,
      minersAddr: "0x503d60E84A9DEb701b44DAC1c0f23e492208392a",
      tokenAddr: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      minersAbi: [
        {
          constant: true,
          inputs: [],
          name: "ceoAddress",
          outputs: [
            {
              name: "",
              type: "address",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getMyMiners",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getBalance",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "initialized",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "rt",
              type: "uint256",
            },
            {
              name: "rs",
              type: "uint256",
            },
            {
              name: "bs",
              type: "uint256",
            },
          ],
          name: "calculateTrade",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "eth",
              type: "uint256",
            },
            {
              name: "contractBalance",
              type: "uint256",
            },
          ],
          name: "calculateEggBuy",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "marketEggs",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "sellEggs",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "amount",
              type: "uint256",
            },
          ],
          name: "seedMarket",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "amount",
              type: "uint256",
            },
          ],
          name: "devFee",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "ref",
              type: "address",
            },
          ],
          name: "hatchEggs",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getMyEggs",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "ref",
              type: "address",
            },
            {
              name: "amount",
              type: "uint256",
            },
          ],
          name: "buyEggs",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address",
            },
          ],
          name: "lastHatch",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address",
            },
          ],
          name: "claimedEggs",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address",
            },
          ],
          name: "hatcheryMiners",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "EGGS_TO_HATCH_1MINERS",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "eth",
              type: "uint256",
            },
          ],
          name: "calculateEggBuySimple",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "eggs",
              type: "uint256",
            },
          ],
          name: "calculateEggSell",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address",
            },
          ],
          name: "referrals",
          outputs: [
            {
              name: "",
              type: "address",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "ceoAddress2",
          outputs: [
            {
              name: "",
              type: "address",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "adr",
              type: "address",
            },
          ],
          name: "getEggsSinceLastHatch",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
      ],
      tokenAbi: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_from",
              type: "address",
            },
            {
              name: "_to",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              name: "",
              type: "uint8",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "balance",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
            {
              name: "_spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          payable: true,
          stateMutability: "payable",
          type: "fallback",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
      ],
      minersContract: null,
      tokenContract: null,
      currentAddr: null,
      referralLink: null,
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.enable();
          this.minersContract = await new web3.eth.Contract(
            this.minersAbi,
            this.minersAddr
          );
          this.tokenContract = await new web3.eth.Contract(
            this.tokenAbi,
            this.tokenAddr
          );

          let accounts = await web3.eth.getAccounts();
          this.currentAddr = accounts[0];
          setTimeout(() => {
            this.controlLoop();
            this.controlLoopFaster();
          }, 1000);
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        this.minersContract = await new web3.eth.Contract(
          this.minersAbi,
          this.minersAddr
        );
        this.tokenContract = await new web3.eth.Contract(
          this.tokenAbi,
          this.tokenAddr
        );
        let accounts = await web3.eth.getAccounts();
        this.currentAddr = accounts[0];
        setTimeout(() => {
          this.controlLoop();
          this.controlLoopFaster();
        }, 1000);
      }

      var key = CryptoJS.enc.Hex.parse(
        "000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"
      );
      var encr = CryptoJS.AES.encrypt(this.currentAddr, key, {
        mode: CryptoJS.mode.ECB,
      });
      this.referralLink =
        window.location.origin + "/index.html?ref=" + "XX" + encr.toString();
    },
    approve() {
      let val = web3.utils.toWei(this.spendAllowance.toString());
      this.tokenContract.methods
        .approve(this.minersAddr, val.toString())
        .send({ from: this.currentAddr })
        .on("transactionHash", (hash) => {
          console.log(hash);
        })
        .on("confirmation", (confirmationNumber, receipt) => {
          console.log(confirmationNumber, receipt);
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
        })
        .on("error", (error, receipt) => {
          console.log(error, receipt);
        });
    },
    buyEggs() {
      let ref = this.getQueryVariable("ref");
      if (ref) {
        if (ref.substring(0, 2) == "XX") {
          ref = ref.substring(2);
          var key = CryptoJS.enc.Hex.parse(
            "000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"
          );
          ref = CryptoJS.AES.decrypt(ref.toString(), key, {
            mode: CryptoJS.mode.ECB,
          }).toString(CryptoJS.enc.Utf8);
        }
      }

      if (!web3.utils.isAddress(ref)) ref = this.currentAddr;
      let val = web3.utils.toWei(this.ethToSpend.toString());
      this.minersContract.methods
        .buyEggs(ref, val)
        .send({ from: this.currentAddr })
        .on("transactionHash", (hash) => {
          console.log(hash);
        })
        .on("confirmation", (confirmationNumber, receipt) => {
          console.log(confirmationNumber, receipt);
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
        })
        .on("error", (error, receipt) => {
          console.log(error, receipt);
        });
    },
    hatchEggs() {
      if (this.canHatch) {
        let ref = this.getQueryVariable("ref");
        if (!web3.utils.isAddress(ref)) ref = this.currentAddr;
        this.canHatch = false;
        this.minersContract.methods
          .hatchEggs(ref)
          .send({ from: this.currentAddr })
          .on("transactionHash", (hash) => {
            console.log(hash);
          })
          .on("confirmation", (confirmationNumber, receipt) => {
            console.log(confirmationNumber, receipt);
          })
          .on("receipt", (receipt) => {
            console.log(receipt);
          })
          .on("error", (error, receipt) => {
            console.log(error, receipt);
          });
        setTimeout(() => {
          this.canHatch = true;
        }, 10000);
      } else {
        console.log("Cannot hatch yet...");
      }
    },
    sellEggs() {
      if (this.canSell) {
        this.canSell = false;
        this.minersContract.methods
          .sellEggs()
          .send({ from: this.currentAddr })
          .on("transactionHash", (hash) => {
            console.log(hash);
          })
          .on("confirmation", (confirmationNumber, receipt) => {
            console.log(confirmationNumber, receipt);
          })
          .on("receipt", (receipt) => {
            console.log(receipt);
          })
          .on("error", (error, receipt) => {
            console.log(error, receipt);
          });
        setTimeout(() => {
          this.canSell = true;
        }, 10000);
      } else {
        console.log("Cannot sell yet...");
      }
    },

    controlLoopFaster() {
      if (
        this.lastSecondsUntilFull > 1 &&
        this.lastNumEggs >= 0 &&
        this.lastNumMiners > 0 &&
        this.eggstohatch1 > 0
      ) {
        this.currentTime = new Date().getTime();
        if (this.currentTime / 1000 - this.lastHatchTime > this.eggstohatch1) {
          return;
        }
        let difference = (this.currentTime - this.lastUpdate) / 1000;
        let additionalEggs = Math.floor(difference * this.lastNumMiners);
        let eggs = (this.lastNumEggs * 1 + additionalEggs) / this.eggstohatch1;
        this.numOfMiners = this.translateQuantity(eggs, 3);
      }
      setTimeout(() => {
        this.controlLoopFaster();
      }, 1000);
    },

    controlLoop() {
      this.spendLimit();
      this.contractBalance();
      this.lastHatch();
      this.getMyEggs();
      this.getMyMiners();
      this.calculateEggBuySimple();
      setTimeout(() => {
        this.controlLoop();
      }, 1000);
    },

    spendLimit() {
      this.tokenContract.methods
        .allowance(this.currentAddr, this.minersAddr)
        .call()
        .then((result) => {
          this.spendLimite = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    contractBalance() {
      this.minersContract.methods
        .getBalance()
        .call()
        .then((result) => {
          var amt = web3.utils.fromWei(result);
          amt = this.numberWithCommas(Number(amt).toFixed(3));
          amt = this.stripDecimals(amt);
          this.contractBal = amt;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    lastHatch() {
      this.minersContract.methods
        .lastHatch(this.currentAddr)
        .call({ from: this.currentAddr })
        .then((result) => {
          this.lastHatchTime = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMyEggs() {
      this.minersContract.methods
        .getMyEggs()
        .call({ from: this.currentAddr })
        .then((result) => {
          if (result > 0) {
            this.calculateEggSell(result, (sun) => {
              this.devFee(sun, (fee) => {
                this.basketBalance = this.formatTrxValue(
                  web3.utils.fromWei(sun) - web3.utils.fromWei(fee)
                );
              });
            });
            if (this.lastNumEggs != result) {
              this.lastNumEggs = result;
              this.lastUpdate = new Date().getTime();
            }
            let secondsuntilfull =
              this.eggstohatch1 - result / this.lastNumMiners;
            this.lastSecondsUntilFull = secondsuntilfull;
            this.untilFull = secondsToString(secondsuntilfull);
            if (lastNumMiners == 0) {
              this.untilFull = "?";
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMyMiners() {
      this.minersContract.methods
        .getMyMiners()
        .call({ from: this.currentAddr })
        .then((result) => {
          if (result == "0x") {
            result = 0;
          }
          this.lastNumMiners = result;
          this.numOfMiners = this.translateQuantity(result);
          this.productionRate = this.formatEggs(this.lastNumMiners * 60 * 60);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    calculateEggBuySimple() {
      let ethToSpend = web3.utils.toWei(this.ethToSpend.toString());
      this.minersContract.methods
        .calculateEggBuySimple(ethToSpend)
        .call()
        .then((result) => {
          this.devFee(result, (fee) => {
            this.eggsToBuy = this.formatEggs(Number(result) - Number(fee));
            this.eggsToBuy = this.formatEggs(Number(result) - Number(fee));
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    calculateEggSell(eggs, callback) {
      this.minersContract.methods
        .calculateEggSell(eggs)
        .call()
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    devFee(amount, callback) {
      this.minersContract.methods
        .devFee(amount)
        .call()
        .then((result) => {
          callback(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Helper Functions
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    stripDecimals(str, num) {
      if (str.indexOf(".") > -1) {
        var left = str.split(".")[0];
        var right = str.split(".")[1];
        return left + "." + right.slice(0, num);
      } else {
        return str;
      }
    },
    formatEggs(eggs) {
      return this.translateQuantity(eggs / this.eggstohatch1, 3);
    },
    formatTrxValue(trxstr) {
      return parseFloat(parseFloat(trxstr).toFixed(4));
    },
    secondsToString(seconds) {
      seconds = Math.max(seconds, 0);
      var numhours = Math.floor((seconds % 86400) / 3600);
      var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
      return numhours + "h " + numminutes + "m ";
    },
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      if (vars) {
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == variable) {
            return pair[1];
          }
        }
      }
      return false;
    },
    translateQuantity(quantity, precision) {
      quantity = Number(quantity);
      let finalquantity = quantity;
      let modifier = "";

      if (quantity < 1e6) {
        return quantity.toFixed(2);
      }

      //console.log('??quantity ',typeof quantity)
      if (quantity > 1000000) {
        modifier = " Million";
        finalquantity = quantity / 1000000;
      }
      if (quantity > 1000000000) {
        modifier = " Billion";
        finalquantity = quantity / 1000000000;
      }
      if (quantity > 1000000000000) {
        modifier = " Trillion";
        finalquantity = quantity / 1000000000000;
      }
      if (quantity > 1000000000000000) {
        modifier = " Quadrillion";
        finalquantity = quantity / 1000000000000000;
      }
      if (quantity > 1000000000000000000) {
        modifier = " Quintillion";
        finalquantity = quantity / 1000000000000000000;
      }
      if (quantity > 1000000000000000000000) {
        modifier = " Sextillion";
        finalquantity = quantity / 1000000000000000000000;
      }
      if (quantity > 1000000000000000000000000) {
        modifier = " Septillion";
        finalquantity = quantity / 1000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000) {
        modifier = " Octillion";
        finalquantity = quantity / 1000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000) {
        modifier = " Nonillion";
        finalquantity = quantity / 1000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000) {
        modifier = " Decillion";
        finalquantity = quantity / 1000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000) {
        modifier = " Undecillion";
        finalquantity = quantity / 1000000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000000) {
        modifier = " Duodecillion";
        finalquantity = quantity / 1000000000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000000000) {
        modifier = " Tredecillion";
        finalquantity = quantity / 1000000000000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000000000000) {
        modifier = " Quattuordecillion";
        finalquantity =
          quantity / 1000000000000000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000000000000000) {
        modifier = " Quindecillion";
        finalquantity =
          quantity / 1000000000000000000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000000000000000000) {
        modifier = " Sexdecillion";
        finalquantity =
          quantity / 1000000000000000000000000000000000000000000000000000;
      }
      if (quantity > 1000000000000000000000000000000000000000000000000000000) {
        modifier = " Septendecillion";
        finalquantity =
          quantity / 1000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity > 1000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Octodecillion";
        finalquantity =
          quantity / 1000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity > 1000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Novemdecillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Vigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Unvigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Duovigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Trevigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Quattuorvigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Quinvigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Sexvigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Septenvigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Octovigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (
        quantity >
        1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      ) {
        modifier = " Novemvigintillion";
        finalquantity =
          quantity /
          1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
      }
      if (precision == undefined) {
        precision = 0;
        if (finalquantity < 10000) {
          precision = 1;
        }
        if (finalquantity < 1000) {
          precision = 2;
        }
        if (finalquantity < 100) {
          precision = 3;
        }
        if (finalquantity < 10) {
          precision = 4;
        }
      }
      if (precision == 0) {
        finalquantity = Math.floor(finalquantity);
      }
      return finalquantity.toFixed(precision) + modifier;
    },
  },
};
</script>
