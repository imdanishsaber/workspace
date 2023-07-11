<template>
  <div class="minting_card_body">
    <v-row class="justify-center">
      <div class="col-12 col-sm-9 col-xl-5">
        <v-card class="pa-16">
          <div class="text-center">
            <h1 class="mb-5 grey--text text--darken-2">
              MINT YOUR <span class="text-primary">GENESIS</span> NFT
            </h1>
            <b> Available NFTs </b>
            <h1 class="mb-5 grey--text text--darken-2">
              <span class="text-primary">{{ maxSupply - totalSupply }}</span> /
              {{ maxSupply }}
            </h1>
            <p class="mb-3">
              Minting Price {{ mintingAmount * (price / decimals) }}
              {{ currency }} per {{ mintingAmount }}
              {{ isPluralBoolean(mintingAmount) ? "NFTs" : "NFT" }}
            </p>
            <div class="d-flex justify-center align-center">
              <v-btn
                fab
                color="primary"
                :disabled="!getUserAddress || isBtnLoading"
                @click="mintingAmount > 1 ? --mintingAmount : ''"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
              <input
                type="number"
                placeholder="0"
                class="mintingAmount"
                disabled
                v-model.number="mintingAmount"
              />
              <v-btn
                fab
                color="primary"
                :disabled="!getUserAddress || isBtnLoading"
                @click="mintingAmount < 10 ? ++mintingAmount : ''"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </div>
            <small>
              <b
                class="d-block text-left mt-8"
                style="width: 300px; margin: auto"
                >Balance: {{ (balance / decimals).toFixed(2) }}
                {{ currency }}</b
              >
            </small>
            <v-select outlined :items="tokens" v-model="currency"></v-select>

            <v-btn
              block
              x-large
              class="mt-8 py-7"
              color="primary"
              @click="isApproved ? onMint() : onApprove()"
              :disabled="!getUserAddress || isBtnLoading"
            >
              {{
                isBtnLoading
                  ? "Loading.."
                  : isApproved
                  ? `MINT ${mintingAmount} ${isPluralBoolean(mintingAmount) ? "NFTs" : "NFT"}`
                  : `Approve ${this.currency}`
              }}
            </v-btn>
            <small v-if="isReferrer">
              <b
                class="d-block text-center mt-2"
                style="width: 300px; margin: auto"
                >Referrer Name: {{ referrer }}</b
              >
            </small>
          </div>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Minting",
  data() {
    return {
      mintingAmount: 1,
      currency: "PLS",
      // Decimals
      PLSDecimals: 1e18,
      USDCDecimals: 1e6,
      HEXDecimals: 1e8,
      eHEXDecimals: 1e8,
      PLSXDecimals: 1e18,
      // Balance
      PLSBalance: "",
      USDCBalance: "",
      HEXBalance: "",
      eHEXBalance: "",
      PLSXBalance: "",
      // Price
      priceInPLS: "",
      priceInUSDC: "",
      priceInHEX: "",
      priceIneHEX: "",
      priceInPLSX: "",
      // Allowance
      USDCAllowance: "",
      HEXAllowance: "",
      eHEXAllowance: "",
      PLSXAllowance: "",

      tokens: ["PLS", "USDC", "HEX", "eHEX", "PLSX"],
      isBtnLoading: false,
      maxSupply: 0,
      totalSupply: 0,

      referrer: "",
      isReferrer: "",
      referrerLinks: ["Bob", "Joe"],
    };
  },
  async mounted() {
    if (this.getUserAddress) {
      this.readValues();
    }
  },
  methods: {
    async readValues() {
      Promise.all([
        this.getMINTINGInstance.methods.maxSupply().call(),
        this.getMINTINGInstance.methods.totalSupply().call(),
        this.getWeb3.eth.getBalance(this.getUserAddress),
        this.getUSDCInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getHEXInstance.methods.balanceOf(this.getUserAddress).call(),
        this.geteHEXInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getPLSXInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getMINTINGInstance.methods.priceInPLS().call(),
        this.getMINTINGInstance.methods.priceInUSDC().call(),
        this.getMINTINGInstance.methods.priceInHEX().call(),
        this.getMINTINGInstance.methods.priceIneHEX().call(),
        this.getMINTINGInstance.methods.priceInPLSX().call(),
        this.getUSDCInstance.methods
          .allowance(this.getUserAddress, this.MINTING_ADDRESS)
          .call(),
        this.getHEXInstance.methods
          .allowance(this.getUserAddress, this.MINTING_ADDRESS)
          .call(),
        this.geteHEXInstance.methods
          .allowance(this.getUserAddress, this.MINTING_ADDRESS)
          .call(),
        this.getPLSXInstance.methods
          .allowance(this.getUserAddress, this.MINTING_ADDRESS)
          .call(),
      ]).then(
        async ([
          maxSupply,
          totalSupply,
          PLSBalance,
          USDCBalance,
          HEXBalance,
          eHEXBalance,
          PLSXBalance,
          priceInPLS,
          priceInUSDC,
          priceInHEX,
          priceIneHEX,
          priceInPLSX,
          USDCAllowance,
          HEXAllowance,
          eHEXAllowance,
          PLSXAllowance,
        ]) => {
          console.log("maxSupply:", maxSupply);
          console.log("totalSupply:", totalSupply);
          console.log("PLSBalance:", PLSBalance);
          console.log("USDCBalance:", USDCBalance);
          console.log("HEXBalance:", HEXBalance);
          console.log("eHEXBalance:", eHEXBalance);
          console.log("PLSXBalance:", PLSXBalance);
          console.log("priceInPLS:", priceInPLS);
          console.log("priceInUSDC:", priceInUSDC);
          console.log("priceInHEX:", priceInHEX);
          console.log("priceIneHEX:", priceIneHEX);
          console.log("priceInPLSX:", priceInPLSX);
          console.log("USDCAllowance:", USDCAllowance);
          console.log("HEXAllowance:", HEXAllowance);
          console.log("eHEXAllowance:", eHEXAllowance);
          console.log("PLSXAllowance:", PLSXAllowance);
          this.maxSupply = maxSupply;
          this.totalSupply = totalSupply;
          this.PLSBalance = PLSBalance;
          this.USDCBalance = USDCBalance;
          this.HEXBalance = HEXBalance;
          this.eHEXBalance = eHEXBalance;
          this.PLSXBalance = PLSXBalance;
          this.priceInPLS = priceInPLS;
          this.priceInUSDC = priceInUSDC;
          this.priceInHEX = priceInHEX;
          this.priceIneHEX = priceIneHEX;
          this.priceInPLSX = priceInPLSX;
          this.USDCAllowance = USDCAllowance;
          this.HEXAllowance = HEXAllowance;
          this.eHEXAllowance = eHEXAllowance;
          this.PLSXAllowance = PLSXAllowance;
          if (window.location.search) {
            this.referrer = window.location.search.slice(10);

            this.isReferrer = this.referrerLinks.includes(this.referrer)
              ? true
              : false;
          } else {
            this.referrer = "";
            this.isReferrer = false;
          }
        }
      );
    },
    onApprove() {
      let price = Number(this.mintingAmount) * Number(this.price);
      console.log("To Approve price:", price);
      if (price > this.balance) {
        this.$toasted.show(`Insufficient ${this.currency} balance`);
        return;
      }
      this.isBtnLoading = true;
      this.instance.methods
        .approve(this.MINTING_ADDRESS, price.toString())
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Approve Transaction is Submitted!");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          this.isBtnLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Approved successfully!");
        })
        .on("error", (error, receipt) => {
          this.isBtnLoading = false;
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Approve Transaction is Rejected!");
        });
    },
    onMint() {
      if (!this.mintingAmount) {
        this.$toasted.show("Enter Minting Amount");
        return;
      }
      if (this.currency === "PLS") this.onPLSMint();
      else this.onTokenMint();
    },
    async onTokenMint() {
      let price = Number(this.mintingAmount) * Number(this.price);
      if (price > this.balance) {
        this.$toasted.show(`Insufficient ${this.currency} balance`);
        return;
      }
      this.isBtnLoading = true;
      let func = `${this.currency.toLocaleLowerCase()}Mint`;
      this.getMINTINGInstance.methods[func](this.mintingAmount, this.referrer)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Your NFT is being minted");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          this.isBtnLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Your NFT has been minted");
        })
        .on("error", (error, receipt) => {
          this.isBtnLoading = false;
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Minting transaction has Failed");
        });
    },
    async onPLSMint() {
      let price = Number(this.mintingAmount) * Number(this.priceInPLS);
      if (price > this.PLSBalance) {
        this.$toasted.show("Insufficient balance");
        return;
      }
      this.isBtnLoading = true;
      this.getMINTINGInstance.methods
        .plsMint(this.mintingAmount, this.referrer)
        .send({
          value: Number(price),
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Your NFT is being minted");
        })
        .on("receipt", (receipt) => {
          this.readValues();
          this.isBtnLoading = false;
          console.log("Receipt: ", receipt);
          this.$toasted.show("Your NFT has been minted");
        })
        .on("error", (error, receipt) => {
          this.isBtnLoading = false;
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Minting transaction has Failed");
        });
    },
  },
  computed: {
    decimals() {
      return this[`${this.currency}Decimals`];
    },

    balance() {
      return this[`${this.currency}Balance`];
    },

    allowance() {
      return this[`${this.currency}Allowance`];
    },

    price() {
      return this[`priceIn${this.currency}`];
    },

    instance() {
      return this[`get${this.currency}Instance`];
    },

    isApproved() {
      if (this.currency === "PLS") {
        return true;
      } else {
        if (Number(this.price) && Number(this.allowance)) {
          let price = Number(this.mintingAmount) * Number(this.price);
          console.log("price:", price);
          console.log("allowance:", Number(this.allowance));
          if (price > Number(this.allowance)) return false;
          else return true;
        } else {
          return false;
        }
      }
    },
  },
  watch: {
    async getUserAddress() {
      this.readValues();
    },
  },
};
</script>
<style>
@import "../styles/PulseBitcoinLockApp.css";
.v-main.PulseBitcoinLockApp .v-main__wrap {
  background-image: url("../assets/PulseChainCarnival.jpg");
  background-size: cover;
  background-position: center;
}
.minting_card_body .v-card {
  background-color: rgba(250, 249, 246, 0.8) !important;
}
.minting_card_body .v-text-field__details {
  display: none;
}
.minting_card_body .v-radio .v-label,
.minting_card_body .v-input--checkbox .v-label {
  font-size: 13px;
}
.minting_card_body .v-input--selection-controls {
  margin-top: 0;
}
.minting_card_body .imageSrc {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 10px;
}
.minting_card_body .mintingAmount {
  font-size: 45px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  width: 300px;
  height: 56px;
  border-radius: 4px;
  margin: 0 30px;
  border: 1px solid rgba(0, 0, 0, 0.38);
}

.minting_card_body .v-input__slot {
  font-size: 24px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  width: 300px;
  margin: auto;
}
.minting_card_body h1 {
  font-size: 2.5rem;
}
</style>
