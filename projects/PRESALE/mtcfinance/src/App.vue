<template>
  <div id="app">
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a href="/" class="navbar-brand-text">
            <img class="logo" src="@/assets/logo.png" alt="" />
          </a>
          <template v-if="getUserAccount">
            <button class="btn btn-primary btn-connect" :disabled="true">
              {{ addrTruncation(getUserAccount) }}
            </button>
          </template>
          <button v-else class="btn btn-primary btn-connect" @click="onConnect">
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
    <div>
      <div class="d-flex justify-content-center">
        <h1 class="mb-5">Public Sale</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-md-6 timerr">
          <h3 class="text-center font-weight-bold mb-3">Starts in:</h3>
          <vue-countdown
            :time="deadline"
            v-slot="{ days, hours, minutes, seconds }"
          >
            <div class="time-content">
              <p id="Days" class="box-time">{{ days }}</p>
              <p id="Hours" class="box-time">{{ hours }}</p>
              <p id="Minutes" class="box-time">{{ minutes }}</p>
              <p id="Seconds" class="box-time">{{ seconds }}</p>
            </div>
            <div class="time-content">
              <small>Days</small>
              <small>Hours</small>
              <small>Minutes</small>
              <small>Seconds</small>
            </div>
          </vue-countdown>
        </div>
      </div>
      <div class="d-column d-md-flex justify-content-center">
        <div class="card">
          <div>
            <h1 class="mb-5">Welcome to the future of finance</h1>
            <p class="text-justify">
              Metacash is a revolutionary automatic claim reward mechanism token
              that allows you to generate passive income by choosing and
              reinvesting your rewards to be paid to you in stable BUSD
              cryptocurrency.
            </p>
          </div>
        </div>
        <div class="card white">
          <div>
            <div class="box">
              <strong>Your Balance</strong>
              <p>{{ balance }} BNB</p>
            </div>
            <div class="box">
              <strong>Tokens you will Get</strong>
              <p>60,000 MTC</p>
            </div>
            <div>
              <p class="min">Min: 0.1 BNB - Max: 5 BNB</p>
            </div>
            <div>
              <input
                type="number"
                placeholder="1BNB=60000MTC"
                v-model="amount"
              />
            </div>
            <div>
              <template v-if="getUserAccount">
                <button
                  class="btn btn-primary btn-connect"
                  @click="onDeposit"
                  :disabled="loading"
                >
                  {{ loading ? "Confirming..." : "BUY" }}
                </button>
              </template>
              <button
                v-else
                class="btn btn-primary btn-connect"
                @click="onConnect"
              >
                Connect Wallet
              </button>
            </div>
            <div class="mt-4">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  :style="
                    'width:' + ((totalCollected / 800) * 100).toFixed(2) + '%'
                  "
                  aria-valuenow="((totalCollected/800)*100).toFixed(2)"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {{ totalCollected }} / 800 BNB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import VueCountdown from "@chenfengyuan/vue-countdown";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: { VueCountdown },
  data() {
    return {
      amount: 0,
      balance: 0,
      totalCollected: 0,
      web3Modal: "",
      loading: false,
      ownerAddr: "0x3BFB2fC8781266c65C26F0bDf8202660F1fdA3d7",
    };
  },
  beforeMount() {
    this.web3Modal = new Web3Modal({
      cacheProvider: false,
      disableInjectedProvider: false,
    });
  },
  mounted() {},
  methods: {
    ...mapActions("wallet", ["SET_WEB3", "SET_USER_ACCOUNT"]),
    addrTruncation(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },
    disconnect() {
      this.SET_WEB3(null);
      this.SET_USER_ACCOUNT(null);
    },
    async onConnect() {
      try {
        if (window.ethereum) {
          let provider = await this.web3Modal.connect();
          this.onProvider(provider);
        } else {
          this.$toasted.show("Install Metamask Wallet!");
        }
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },
    async onProvider(provider) {
      try {
        let web3 = new Web3(provider);
        this.SET_WEB3(web3);

        let accounts = await web3.eth.getAccounts();
        console.log(accounts)
        console.log('asdsas')


        let balance = await web3.eth.getBalance(accounts[0]);
        this.balance = this.humanized(balance, 2);

        let totalCollected = await web3.eth.getBalance(this.ownerAddr);
        totalCollected = this.humanized(totalCollected, 2);
        this.totalCollected = (totalCollected * 3);

        this.SET_USER_ACCOUNT(accounts[0]);
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },
    async onDeposit() {
      if (Number(this.amount) < 0.1) {
        this.$toasted.show("Minimum limit is 0.1 BNB");
        return;
      } else if (Number(this.amount) > 5) {
        this.$toasted.show("Maximum limit is 5 BNB");
        return;
      } else if (Number(this.amount) > Number(this.balance)) {
        this.$toasted.show("You do not have enough balance in your wallet");
        return;
      }
      let amount = this.amount * 1e18;
      this.loading = true;
      this.getWeb3.eth
        .sendTransaction({
          value: amount,
          to: this.ownerAddr,
          from: this.getUserAccount,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash", hash);
          this.$toasted.show("Transaction is submitted to network!");
        })
        .on("receipt", (receipt) => {
          this.loading = false;
          this.$toasted.show("Transaction completed successfully");
          console.log("Receipt: ", receipt);
        })
        .on("error", (error) => {
          this.loading = false;
          console.log("Error receipt: ", error);
        });
    },
    humanized(number, fix) {
      return Number(
        this.getWeb3.utils.fromWei(number.toString(), "ether")
      ).toFixed(number == 0 ? 3 : fix);
    },
  },
  computed: {
    ...mapGetters("wallet", ["getWeb3", "getUserAccount"]),
    deadline() {
      return 1646593013398 - new Date().getTime();
    },
  },
};
</script>

<style>
@import "./css/styles.css";
</style>
