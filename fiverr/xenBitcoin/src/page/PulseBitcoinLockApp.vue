<template>
  <div class="stake_card_body">
    <v-row class="justify-center">
      <div class="col-12 col-sm-9 col-xl-5">
        <v-card class="pa-5">
          <div class="d-flex justify-space-between align-center">
            <h1 class="grey--text text--darken-2">
              Stake Your PLS at the PulseChain Carnival
            </h1>
          </div>
          <v-divider class="mt-0 my-7"></v-divider>
          <div class="mb-5">
            <b> Free RIDE Remaning: </b>
            <span class="text-blue">{{ formator(rideFree, 2) }} RIDE</span>
          </div>
          <div class="mb-5">
            <b> Your RIDE Balance: </b>
            <span class="text-blue">{{ formator(rideBalance, 2) }} RIDE</span>
          </div>
          <div class="mb-5">
            <b> Your PLS Balance: </b>
            <span class="text-blue"
              >{{ formator(PLSBalance, 2) }} {{ TOKEN_SYMBOL }}</span
            >
          </div>
          <v-row class="mt-5">
            <div class="col-6 py-1">
              <v-text-field
                outlined
                type="number"
                placeholder="0"
                v-model.number="lockupAmount"
                :label="'Number of ' + TOKEN_SYMBOL + ' tokens to lock up'"
              >
                <template v-slot:append>
                  <v-btn
                    text
                    color="primary"
                    small
                    :disabled="!getUserAddress"
                    @click="
                      lockupAmount = PLSBalance / TOKEN_DECIMAL_CONVERSION
                    "
                  >
                    MAX
                  </v-btn>
                </template>
              </v-text-field>
            </div>
            <div class="col-6 py-1">
              <v-text-field
                outlined
                type="number"
                placeholder="Example: 1, 5555 or 10000!"
                v-model.number="lockupDays"
                label="Number of days to lock up"
                @keypress="isNumber($event)"
              >
              </v-text-field>
            </div>
            <div class="col-6 py-1">
              <v-file-input
                outlined
                ref="uploader"
                prepend-icon=""
                append-icon="mdi-paperclip"
                label="Upload an image for your NFT"
                placeholder="350 x 350 image is recommended"
                @change="onSelect"
              ></v-file-input>
            </div>
            <div class="col-6 py-1">
              <v-text-field
                outlined
                type="number"
                placeholder="Example: 0"
                v-model.number="lockupTip"
                :label="'Optional Developer Tip (in  ' + TOKEN_SYMBOL + ')'"
              >
              </v-text-field>
            </div>
            <div class="col-12 py-1 text-center">
              <img
                v-if="imageSrc"
                :src="imageSrc"
                class="imageSrc"
                width="350px"
                height="350px"
              />
            </div>
            <div class="col-12 py-1">
              <v-textarea
                outlined
                label="Enter a statement for your NFT"
                v-model="lockupDesc"
                placeholder='Example: "Not your keys, not your coins" or "A failure to plan, is a plan for failure"...You can put a poem, lyrics to your favorite song, an inspiring quote, a goal of yours, what you plan on doing with these coins once you Burn your NFT etc BE CREATIVE and remember this statement is immutable.'
              ></v-textarea>
            </div>
            <div class="col-6 py-1">
              <v-radio-group v-model="isTransferable" mandatory>
                <v-radio
                  :value="false"
                  label="Non-Transferable (until Lock Up period ends)"
                ></v-radio>
                <v-radio
                  :value="true"
                  label="Transferable (even before Lock Up period ends)"
                ></v-radio>
              </v-radio-group>
            </div>
            <div class="col-6 py-1">
              <v-checkbox
                v-model="isDifferentAddr"
                label="Mint to a different address?"
              ></v-checkbox>
              <v-text-field
                v-if="isDifferentAddr"
                outlined
                type="text"
                label="Enter Address"
                v-model="differentAddr"
                placeholder="Paste the address that you want the NFT to be minted to"
              >
              </v-text-field>
            </div>
          </v-row>

          <v-btn
            block
            x-large
            color="green"
            class="mt-8"
            @click="onLockUp"
            :disabled="!getUserAddress || isBtnLoading"
          >
            {{
              isBtnLoading
                ? "Loading.."
                : `Lock up ${lockupAmount} ${TOKEN_SYMBOL}
              for ${lockupDays | 0} ${isPlural(lockupDays | 0)}
              and Mint my ${
                this.isTransferable ? "Transferable" : "Non-Transferable"
              } NFT ${mintToText()}`
            }}
          </v-btn>
        </v-card>
      </div>
    </v-row>
    <v-row class="justify-center">
      <div class="col-12">
        <v-card class="pa-5" style="max-width: 1080px; margin: auto">
          <div class="row mt-1">
            <div class="col-12">
              <div class="d-flex justify-space-between align-items-center">
                <h1 class="grey--text text--darken-2">Your NFTs</h1>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Sort
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item class="cursor-pointer">
                      <v-list-item-title
                        @click="nfts.sort(compareValues('amount'))"
                        >Amount</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item class="cursor-pointer">
                      <v-list-item-title
                        @click="nfts.sort(compareValues('totalLockTime'))"
                        >Total Lock Time</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item class="cursor-pointer">
                      <v-list-item-title
                        @click="nfts.sort(compareValues('timeLeft'))"
                        >Time Remaining</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <v-divider class="mb-2"></v-divider>
            </div>
            <div v-if="nftLoader" class="col-12">
              <div class="mx-auto my-5 loader"></div>
            </div>
            <template v-else-if="!getUserAddress">
              <p class="mx-auto text-muted my-5">
                Connect Your Wallet to see your NFTs here
              </p>
            </template>
            <template v-else-if="!nfts.length">
              <p class="mx-auto text-muted my-5">No NFT to show</p>
            </template>
            <template v-for="(nft, i) in paginatedNFTs">
              <div class="col-12" :key="i">
                <div class="d-block d-md-flex text-center text-md-left">
                  <div class="mr-5">
                    <a
                      :href="`${OPENSEA_URL_BASE}${CONTRACT_ADDRESS}/${nft.id}`"
                      target="_blank"
                    >
                      <vue-load-image>
                        <img slot="image" :src="nft.image" />
                        <img slot="preloader" src="@/assets/default.jpg" />
                        <img slot="error" src="@/assets/default.jpg" />
                      </vue-load-image>
                    </a>
                  </div>
                  <div>
                    <h3
                      class="card-title my-0"
                      data-toggle="tooltip"
                      data-placement="top"
                      :title="formator(nft.amount, 10)"
                    >
                      {{ formator(nft.amount, 2) }} {{ TOKEN_SYMBOL }}
                      <img
                        v-if="nft.isTransferable"
                        src="@/assets/money.png"
                        width="20"
                        height="20"
                      />
                      <img
                        v-else
                        src="@/assets/diamond.png"
                        width="20"
                        height="20"
                      />
                    </h3>
                    <b>NFT ID: </b
                    ><a
                      :href="`${ETHERSCAN_URL_BASE}token/${CONTRACT_ADDRESS}?a=${nft.id}`"
                      target="_blank"
                      >{{ nft.id }}</a
                    >
                    <div>
                      <b> Description: </b>
                      {{ nft.description }}
                    </div>
                    <div class="d-flex justify-space-between">
                      <div v-if="nft.isBurnAble">
                        <v-btn
                          small
                          class="px-5 mt-3"
                          color="green"
                          @click="onBurn(nft.id, nft.amount)"
                        >
                          BURN
                        </v-btn>
                      </div>
                      <div v-else>
                        <div>
                          <b> Time Remaining: </b>
                          <span class="text-blue">{{
                            secondstoDays(nft.timeLeft)
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <v-divider class="mt-3"></v-divider>
              </div>
            </template>
            <div class="col-12 text-center">
              <jw-pagination
                :pageSize="6"
                :maxPages="3"
                :items="this.nfts"
                @changePage="onChangePage"
              ></jw-pagination>
            </div>
          </div>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import copy from "copy-to-clipboard";
export default {
  name: "PulseBitcoinLockApp",
  data() {
    return {
      nfts: [],
      order: "desc",
      nftLoader: false,
      paginatedNFTs: [],

      rideFree: 0,
      rideBalance: 0,
      PLSBalance: 0,

      ipfsInstance: null,

      lockupAmount: 1,
      lockupDays: 0,
      lockupTip: 0,
      lockupDesc: "Not your keys not your coins",

      imageSrc: null,
      lockupUri: null,
      lockupImage: null,

      isTransferable: false,
      differentAddr: null,
      isDifferentAddr: false,

      isBtnLoading: false,
    };
  },
  async mounted() {
    if (this.getUserAddress) {
      this.getData();
      this.readValues();
    }
  },
  methods: {
    async readValues() {
      this.PLSBalance = await this.getWeb3.eth.getBalance(this.getUserAddress);
      this.rideBalance = await this.getRIDEInstance.methods
        .balanceOf(this.getUserAddress)
        .call();
      this.rideFree = await this.getRIDEInstance.methods
        .balanceOf(this.MINTING_ADDRESS)
        .call();
    },

    async onLockUp() {
      if (!this.lockupAmount) {
        this.$toasted.show("Enter Lock up amount");
        return;
      } else if (!this.lockupDays) {
        this.$toasted.show("Enter number of Lock up days");
        return;
      } else if (!this.lockupImage) {
        this.$toasted.show("Upload NFT image");
        return;
      } else if (!this.lockupDesc) {
        this.$toasted.show("Write NFT description");
        return;
      } else if (this.lockupTip === null || this.lockupTip === "") {
        this.$toasted.show("Enter developer tip amount");
        return;
      } else if (
        Number(this.lockupAmount * this.TOKEN_DECIMAL_CONVERSION) +
          Number(this.lockupTip * this.TOKEN_DECIMAL_CONVERSION) >
        this.PLSBalance
      ) {
        this.$toasted.show("Insufficient balance");
        return;
      } else if (
        this.isDifferentAddr &&
        !this.getWeb3.utils.isAddress(this.differentAddr)
      ) {
        this.$toasted.show(
          `Non existent 'Mint To Address': ${this.differentAddr}`
        );
        return;
      }
      try {
        this.isBtnLoading = true;
        await this.submitToIPFS(
          this.lockupAmount,
          this.lockupDays,
          this.lockupTip,
          this.isTransferable
        );
        let weiAmount = this.getWeb3.utils.toWei(
          this.lockupAmount.toString(),
          this.UNIT_CONVERSION
        );
        let weiTip = this.getWeb3.utils.toWei(
          this.lockupTip.toString(),
          this.UNIT_CONVERSION
        );
        let mintToAddress;
        if (this.isDifferentAddr) {
          mintToAddress = this.differentAddr;
        } else {
          mintToAddress = this.getUserAddress;
        }
        console.log("weiTip", weiTip);
        console.log("weiAmount", weiAmount);
        console.log("Total:", Number(weiAmount) + Number(weiTip));
        this.getLOCKInstance.methods
          .lockUpAndMint(
            weiTip,
            this.lockupDays,
            this.isTransferable,
            mintToAddress,
            this.lockupUri
          )
          .send({
            value: Number(weiAmount) + Number(weiTip),
            from: this.getUserAddress,
          })
          .on("transactionHash", (hash) => {
            console.log(hash);
            this.clearInputs();
            this.$toasted.show(
              "Your PLS is being locked up, and an NFT is being minted"
            );
          })
          .on("receipt", async (receipt) => {
            console.log(receipt);
            setTimeout(() => {
              this.getData();
            }, 3000);
            this.readValues();
            this.clearInputs();
            this.isBtnLoading = false;
            this.$toasted.show(
              "Your PLS has been locked up, and an NFT has been minted"
            );
          })
          .on("error", (error, receipt) => {
            this.isBtnLoading = false;
            console.log(error, receipt);
            this.$toasted.show("Lock up transaction has Failed");
          });
      } catch (error) {
        this.isBtnLoading = false;
        console.log("Error:", error);
        this.$toasted.show("Invalid input value");
      }
    },

    async onBurn(id, amount) {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }

      this.getLOCKInstance.methods
        .burn(id)
        .send({
          from: this.getUserAddress,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show(
            `Your NFT is being Burnt, and your ${this.TOKEN_SYMBOL} tokens are being returned to your wallet, great job HODLing!`
          );
        })
        .on("receipt", async (receipt) => {
          console.log(receipt);
          this.getData();
          this.readValues();
          this.$toasted.show(
            `${this.formator(amount, 2)} ${
              this.TOKEN_SYMBOL
            } has been unlocked and returned to your wallet`
          );
        })
        .on("error", (error, receipt) => {
          console.log(error, receipt);
          this.$toasted.show("Burn transaction Failed");
        });
    },

    mintToText() {
      if (this.isDifferentAddr && this.differentAddr) {
        return `To ${this.addrTruncation(this.differentAddr)}`;
      } else {
        return "";
      }
    },

    copy_to_clipboard(thing_to_copy) {
      copy(thing_to_copy);
      this.$toasted.show(`Copied ${thing_to_copy} to clipboard`);
    },

    onSelect(file) {
      this.imageSrc = null;
      this.lockupImage = null;
      if (!file) {
        this.$toasted.show("Select an image");
        return;
      }
      this.lockupImage = file;
      var filetypes = file["type"].split("/");
      var filetype = filetypes[0];
      if (filetype == "image") {
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(file);
      } else if (filetype == "video") {
        console.log("Only Images are allowed");
        this.$toasted.show("Only Images are allowed");
      }
    },

    async submitToIPFS(amount, days, tip, isTransferable) {
      const auth =
        "Basic " +
        window.buffer.Buffer.from(
          this.INFURA_ID + ":" + this.INFURA_SECRET_KEY
        ).toString("base64");
      this.ipfsInstance = window.IpfsHttpClient.create({
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
        headers: {
          authorization: auth,
        },
      });
      let data = {
        name: `${amount} ${
          this.TOKEN_SYMBOL
        } locked for ${days} ${this.isPlural(days)}`,
        image: null,
        description: this.lockupDesc,
        attributes: [
          {
            display_type: "number",
            trait_type: `Amount of ${this.TOKEN_SYMBOL} Locked Up`,
            value: amount,
          },
          {
            display_type: "number",
            trait_type: `Total Lock Up Days`,
            value: days,
          },
          {
            display_type: "number",
            trait_type: `Dev Tip (in ${this.TOKEN_SYMBOL})`,
            value: tip,
          },
          {
            value: `${isTransferable ? "Transferable" : "Non-Transferable"}`,
          },
        ],
      };

      if (this.lockupImage) {
        let pic = await this.ipfsInstance.add(this.lockupImage, {
          progress: (prog) => console.log(`received: ${prog}`),
        });
        let image = `https://ipfs.io/ipfs/${pic.path}`;
        data.image = image;
      }

      console.log("data:", data);

      let data_path = await this.ipfsInstance.add(JSON.stringify(data), {
        progress: (prog) => console.log(`received: ${prog}`),
      });

      this.lockupUri = `https://ipfs.io/ipfs/${data_path.path}`;
    },

    onChangePage(pageOfItems) {
      this.paginatedNFTs = pageOfItems;
    },

    compareValues(key) {
      this.order = this.order === "asc" ? "desc" : "asc";
      return (a, b) => {
        let comparison = a[key] - b[key];
        return this.order === "asc" ? comparison : comparison * -1;
      };
    },

    async getData() {
      this.nfts = [];
      this.nftLoader = true;
      let walletOfOwner = await this.getLOCKInstance.methods
        .walletOfOwner(this.getUserAddress)
        .call();

      let nfts = walletOfOwner.map((value) => {
        return { id: value };
      });

      let now = new Date().getTime() / 1000;

      if (!nfts.length) this.nftLoader = false;

      nfts.forEach((nft, index) => {
        Promise.all([
          this.getLOCKInstance.methods.tokenIdsToAmounts(nft.id).call(),
          this.getLOCKInstance.methods.isTransferable(nft.id).call(),
          this.getLOCKInstance.methods.totalLockTime(nft.id).call(),
          this.getLOCKInstance.methods.unlockTime(nft.id).call(),
          this.getLOCKInstance.methods.tokenURI(nft.id).call(),
        ]).then(
          async ([
            amount,
            isTransferable,
            totalLockTime,
            unlockTime,
            tokenURI,
          ]) => {
            console.log(`------------- ${index + 1} -------------`);
            console.log("Amount:", amount);
            console.log("Transferable:", isTransferable);
            console.log("Total Lock Time:", totalLockTime);
            console.log("Unlock Time:", unlockTime);
            console.log("Token URI:", tokenURI);
            nft.amount = amount;
            nft.isTransferable = isTransferable;
            nft.totalLockTime = Number(totalLockTime);
            if (now > unlockTime) nft.isBurnAble = true;
            else nft.isBurnAble = false;

            nft.timeLeft = Number(unlockTime) - Number(now);

            let metaData = await this.getMetadata(tokenURI);
            nft.name = metaData.name;
            nft.image = metaData.image;
            nft.description = metaData.description;

            this.nfts.push(nft);
            this.nfts.sort(this.compareValues("amount")).reverse();
            if (nfts.length === index + 1) {
              console.log("nfts", nfts);
              this.nftLoader = false;
            }
          }
        );
      });
    },

    clearInputs() {
      this.ipfsInstance = null;

      this.lockupAmount = 0;
      this.lockupDays = 0;
      this.lockupTip = 0;
      this.lockupDesc = "";

      this.imageSrc = null;
      this.lockupUri = null;
      this.lockupImage = null;
      this.$refs.uploader.reset();

      this.isTransferable = false;
      this.differentAddr = null;
      this.isDifferentAddr = false;

      this.isBtnLoading = false;
    },
  },
  watch: {
    async getUserAddress() {
      this.getData();
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
.stake_card_body .v-card {
  background-color: rgba(250, 249, 246, 0.8) !important;
}
.stake_card_body .v-text-field__details {
  display: none;
}
.stake_card_body .v-radio .v-label,
.stake_card_body .v-input--checkbox .v-label {
  font-size: 13px;
}
.stake_card_body .v-input--selection-controls {
  margin-top: 0;
}
.stake_card_body .imageSrc {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 10px;
}
</style>
