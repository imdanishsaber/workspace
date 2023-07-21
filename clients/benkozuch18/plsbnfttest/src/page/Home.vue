<template>
  <div class="stake_card_body">
    <div class="row">
      <div class="col-12">
        <h4>Lock & Mint NFT</h4>
        <hr />
      </div>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Number of {{ TOKEN_SYMBOL }} tokens to lock up</p>
          <p>
            Available Amount:
            <strong>{{ formator(tokenBalance, 2) }} {{ TOKEN_SYMBOL }}</strong>
          </p>
        </div>
        <div class="inputMax">
          <input type="number" placeholder="1" v-model.number="lockupAmount" />
          <button
              class="btn-common"
              type="button"
              :disabled="!getUserAddress"
              @click="lockupAmount = tokenBalance / TOKEN_DECIMAL_CONVERSION"
          >
            MAX
          </button>
        </div>
        <small><a href="https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x5EE84583f67D5EcEa5420dBb42b462896E7f8D06&chain=mainnet" target="_blank">Buy More {{TOKEN_SYMBOL}}</a></small>

      </div>

      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Number of days to lock up</p>
        </div>
        <div class="inputMax">
          <input
              type="number"
              placeholder="Example: 1, 5555 or 10000!"
              v-model.number="lockupDays"
              @keypress="isNumber($event)"
          />
        </div>
      </div>

      <div class="col-12 col-lg-7 mx-auto mb-3">
        <section>
          <input type="radio" v-model="transferable"  :value="false"> Non-Transferable (until Lock Up period ends)
          <br/>
          <input type="radio" v-model="transferable"  :value="true"> Transferable (even before Lock Up period ends)
        </section>
      </div>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <input type="checkbox" v-model="mint_to_different_address"> Mint to a different address?
        <input v-if="mint_to_different_address"  type="text" size="50"  v-model="mint_to_address" placeholder="Paste the address that you want the NFT to be minted to" />

      </div>
      <div class="col-12 col-lg-7 mx-auto ai mt-3">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
                class="nav-link"
                :class="tab === 1 ? 'active' : ''"
                @click="tab = 1"
            >Upload NFT Image</a
            >
          </li>
          <li class="nav-item">
            <a
                class="nav-link disabled"

            >Generate AI image (disabled until further notice)</a
            >
          </li>
        </ul>
      </div>
      <template v-if="tab === 1">
        <div class="col-12 col-lg-7 mx-auto mb-3">
          <div class="d-flex justify-content-between">
            <p class="color_gl">Upload an image for your NFT (350 x 350 image is recommended)</p>
          </div>
          <div class="input-group">
            <div class="custom-file">
              <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  @change="onSelect"
              />
              <label class="custom-file-label" for="inputGroupFile01"
              >Browse or drag and drop here</label
              >
            </div>
          </div>
        </div>
        <div v-if="imageSrc" class="col-12 col-lg-7 mx-auto mb-3">
          <img :src="imageSrc" width="100%" height="100%" />
        </div>
      </template>
      <template v-else>
        <div class="col-12 col-lg-7 mx-auto">
          <div class="my-3">
            <p class="color_gl">AI Image Prompt</p>
            <textarea rows="2" class="p-3" v-model="prompt"></textarea>
          </div>
          <div class="d-flex justify-content-center align-items-center my-4">
            <button
                type="button"
                class="btn btn-info"
                @click="onGenerate"
                :disabled="!prompt || isGen"
            >
              {{ isGen ? "Generating..." : "Generate AI image" }}
            </button>
          </div>
          <div class="mb-3">
            <img
                v-show="url && !isGen"
                id="imageid"
                @load="isGen = false"
                :src="url"
                width="350"
                height="350"
            />
          </div>
        </div>
      </template>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Enter a statement for your NFT</p>
        </div>
        <textarea
            rows="5"
            class="p-3"
            v-model="lockupDescription"
            placeholder='Example: "Not your keys, not your coins" or "A failure to plan, is a plan for failure"...You can put a poem, lyrics to your favorite song, an inspiring quote, a goal of yours, what you plan on doing with these coins once you Burn your NFT etc BE CREATIVE and remember this statement is immutable.'
        ></textarea>
      </div>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Optional Developer Tip (in {{ TOKEN_SYMBOL }}) </p>
        </div>
        <div class="inputMax">
          <input type="number"  placeholder="Example: 0" v-model.number="lockupTip" />
        </div>
        <small>If you'd like to tip in USDC, ETH, ASIC, PLSB, HEX, HDRN etc, donate here ---> <button class="btn-outline-primary" @click="copy_to_clipboard(TIP_ADDRESS)">&#128203;{{ addrTruncation(TIP_ADDRESS) }}</button></small>
      </div>

      <div class="col-12 col-sm-7 mx-auto my-3">
        <button
            class="btn-common w-100"
            type="button"
            @click="onApprove"
            :disabled="!getUserAddress || isBtnLoading"
        >
          {{isBtnLoading ? "Loading.." : isApproved ?
            `Lock up ${lockupAmount} ${TOKEN_SYMBOL}
            for ${lockupDays | 0} ${ isPlural(lockupDays | 0)}
            and Mint my ${this.transferable?"Transferable":"Non-Transferable"} NFT ${mintToText()}`
            : "Approve PLSB" }}
        </button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h4>Your NFTs</h4>
          <div class="dropdown">
            <button
                class="btn btn-outline-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
              Sort
            </button>
            <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
            >
              <a
                  class="dropdown-item cursor-pointer"
                  @click="nfts.sort(compareValues('amounts'))"
              >Amount</a
              >
              <a
                  class="dropdown-item cursor-pointer"
                  @click="nfts.sort(compareValues('totalTime'))"
              >Total Lock Time</a
              >
              <a
                  class="dropdown-item cursor-pointer"
                  @click="nfts.sort(compareValues('timeLeft'))"
              >Time Remaining</a
              >
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div v-if="nftLoader" class="col-12">
        <div class="mx-auto my-5 loader"></div>
      </div>
      <template v-else-if="!getUserAddress">
        <p class="mx-auto text-muted my-5">Connect Your Wallet to see your NFTs here</p>
      </template>
      <template v-else-if="!nfts.length">
        <p class="mx-auto text-muted my-5">No NFT to show</p>
      </template>
      <template v-for="(nft, i) in paginatedNFTs">
        <div class="col-12 col-sm-6 col-lg-4 mb-4" :key="i">
          <div class="card">
            <a :href="`${OPENSEA_URL_BASE}${CONTRACT_ADDRESS}/${nft.token_id}`" target="_blank">
              <vue-load-image>
                <img slot="image" :src="nft.metadata.image" />
                <img slot="preloader" src="@/assets/default.jpg" />
                <img slot="error" src="@/assets/default.jpg" />
              </vue-load-image>
            </a>
            <div class="card-body">
              <h6
                  class="card-title mb-0"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="formator(nft.amounts, 10)"
              >
                {{ formator(nft.amounts, 2) }} {{ TOKEN_SYMBOL }} <img v-if="nft.transferable" src="@/assets/money.png" width="20" height="20"/> <img v-if="!nft.transferable" src="@/assets/diamond.png" width="20" height="20"/>

              </h6>
              <small>
                NFT ID: <a :href="`${ETHERSCAN_URL_BASE}token/${CONTRACT_ADDRESS}?a=${nft.token_id}`" target="_blank">{{ nft.token_id }}</a>
              </small>


              <hr class="mt-2" />
              <small class="card-text">
                {{ nft.description }}
              </small>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-between">
                <div>
                  <div>
                    <small
                    >Total Lock Time:
                      <span class="text-blue">
                        {{ secondstoDays(nft.totalTime) }}
                      </span>
                    </small>
                  </div>
                </div>
                <div v-if="nft.isBurnAble">
                  <button
                      class="btn btn-common"
                      @click="onBurn(nft.id.tokenId, nft.amounts)"
                  >
                    BURN
                  </button>
                </div>
                <div v-else>
                  <div>
                    <small
                    >Time Remaining:
                      <span class="text-blue">{{
                          secondstoDays(nft.timeLeft)
                        }}</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div class="col-12 text-center">
        <hr />
        <jw-pagination
            :pageSize="6"
            :maxPages="3"
            :items="this.nfts"
            @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
  name: "Home",
  data() {
    return {
      tab: 1,
      url: null,
      prompt: "",
      nfts: [],
      order: "desc",
      nftLoader: false,
      paginatedNFTs: [],

      tokenBalance: 0,
      ipfsInstance: null,
      lockupAmount: 1,
      lockupDays: null,
      lockupUri: null,
      lockupTip: null,
      imageSrc: null,
      lockupImage: null,
      lockupDescription: null,
      mint_to_address: null,
      mint_to_different_address: false,
      transferable: false,
      isApproved: false,
      isBtnLoading: false,
      isGen: false,
    };
  },
  async mounted() {
    if (this.getUserAddress) {
      this.getData();
      this.readValues();
    }
  },
  methods: {
    mintToText() {
      if (this.mint_to_different_address){
        return `To ${this.mint_to_address}`
      }else {
        return ""
      }
    },
    copy_to_clipboard(thing_to_copy) {
      copy(thing_to_copy)
      this.$toasted.show(`Copied ${thing_to_copy} to clipboard`)
    },
    async onGenerate() {
      this.url = null;
      this.isGen = true;
      let response = await this.fetchRandomImage(this.prompt);
      if (response) this.url = response;
      else {
        this.$toasted.show("Please enter another prompt and try again");
        this.isGen = false;
      }
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
      let list = await this.fetchNFTs();
      let now = new Date().getTime() / 1000;
      if (!list.length) this.nftLoader = false;
      list.forEach((item, index) => {
        Promise.all([
          this.getContractInstance.methods.ownerOf(item.id.tokenId).call(),
          this.getContractInstance.methods.lockTime(item.id.tokenId).call(),
          this.getContractInstance.methods.tokenIdsToAmounts(item.id.tokenId).call(),
          this.getContractInstance.methods.tokenIdsToTransferable(item.id.tokenId).call(),
        ]).then(([owenr, lockTime, Amounts, transferable]) => {
          item.owenr = owenr;
          item.amounts = Amounts;
          item.token_id = this.getWeb3.utils.hexToNumber(item.id.tokenId)

          // totalTime
          let start = new Date(item.timeLastUpdated).getTime() / 1000;
          item.totalTime = Number(lockTime) - Number(start);

          // lockTime
          if (lockTime > now) item.isBurnAble = false;
          else item.isBurnAble = true;

          item.timeLeft = Number(lockTime) - Number(now);
          item.transferable = transferable;

          this.nfts.push(item);
          this.nfts.sort(this.compareValues('amounts')).reverse();
          if (list.length === index + 1) {
            this.nftLoader = false;
          }
        });
      });
    },
    onApprove() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect your wallet first!");
        return;
      }
      if (this.isApproved) {
        this.onLockUp();
        return;
      }
      this.isBtnLoading = true;
      this.getTokenInstance.methods
          .approve(this.CONTRACT_ADDRESS, "1000000000000000000000000000")
          .send({
            from: this.getUserAddress,
          })
          .on("transactionHash", (hash) => {
            console.log(hash);
            this.$toasted.show("In the process of approving the smart contract to interact with your PLSB");
          })
          .on("receipt", (receipt) => {
            this.isBtnLoading = false;
            this.readValues();
            console.log(receipt);
            this.$toasted.show("The smart contract is now approved to interact with your PLSB!");
          })
          .on("error", (error, receipt) => {
            this.isBtnLoading = false;
            console.log(error, receipt);
            this.$toasted.show("The transaction to approve the smart contract to interact with your PLSB failed");
          });
    },

    async onLockUp() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }
      if (!this.lockupAmount) {
        this.$toasted.show("Enter lockup amount");
        return;
      // } else if (!this.lockupDays){// || this.lockupDays == 0) {
      //   this.$toasted.show("Enter lockup duration");
      //   return;
      } else if (!this.lockupImage && !this.url) {
        this.$toasted.show("Upload NFT image");
        return;
      } else if (!this.lockupDescription) {
        this.$toasted.show("Write NFT description");
        return;
      } else if (this.lockupTip === null || this.lockupTip === "") {
        this.$toasted.show("Enter developer tip amount");
        return;
      } else if (this.lockupAmount * this.TOKEN_DECIMAL_CONVERSION > this.tokenBalance) {
        this.$toasted.show("Insufficient balance");
        return;
      } else if (this.mint_to_different_address && !this.getWeb3.utils.isAddress(this.mint_to_address)) {
        this.$toasted.show(`Non existent 'Mint To Address': ${this.mint_to_address}`)
        return
      }
      try {
        this.isBtnLoading = true;
        await this.submitToIPFS(this.lockupAmount, this.lockupDays, this.lockupTip, this.transferable);
        let amount = this.getWeb3.utils.toWei(
            this.lockupAmount.toString(),
            this.UNIT_CONVERSION
        );
        let lockupTip = this.getWeb3.utils.toWei(
            this.lockupTip.toString(),
            this.UNIT_CONVERSION
        );
        let lockupSeconds = Number(this.lockupDays) * 86400;
        let transferable = this.transferable;
        let mintToAddress;
        if (this.mint_to_different_address) {
          mintToAddress = this.mint_to_address;
        }else{
          mintToAddress = this.getUserAddress;
        }
        console.log(amount);
        console.log(lockupTip);
        this.getContractInstance.methods
            .lockUpAndMint(amount, lockupTip, lockupSeconds, transferable, mintToAddress, this.lockupUri)
            .send({
              from: this.getUserAddress,
            })
            .on("transactionHash", (hash) => {
              console.log(hash);
              this.$toasted.show("Your PLSB is being locked up, and an NFT is being minted");
            })
            .on("receipt", async (receipt) => {
              console.log(receipt);
              setTimeout(() => {
                this.getData();
              }, 3000);
              this.readValues();
              this.clearInputs();
              this.isBtnLoading = false;
              this.$toasted.show("Your PLSB has been locked up, and an NFT has been minted");
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

    readValues() {
      Promise.all([
        this.getTokenInstance.methods.balanceOf(this.getUserAddress).call(),
        this.getTokenInstance.methods
            .allowance(this.getUserAddress, this.CONTRACT_ADDRESS)
            .call(),
      ]).then(([balance, allowance]) => {
        this.isApproved = allowance == 0 ? false : true;
        this.tokenBalance = balance;
      });
    },

    onSelect(event) {
      this.imageSrc = null;
      this.lockupImage = null;
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        this.$toasted.show("Select an image");
        return;
      }
      let file = files[0];
      this.lockupImage = files[0];
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
        name: `${amount} ${this.TOKEN_SYMBOL} locked for ${days} ${this.isPlural(days)}`,
        image: null,
        description: this.lockupDescription,
        attributes: [
          {
            "display_type": "number",
            "trait_type": `Amount of ${this.TOKEN_SYMBOL} Locked Up`,
            "value": amount
          },
          {
            "display_type": "number",
            "trait_type": `Total Lock Up Days`,
            "value": days
          },
          {
            "display_type": "number",
            "trait_type": `Dev Tip (in ${this.TOKEN_SYMBOL})`,
            "value": tip
          },
          {
            "value": `${isTransferable?"Transferable":"Non-Transferable"}`
          },
        ]
      };

      if (this.lockupImage) {
        let pic = await this.ipfsInstance.add(this.lockupImage, {
          progress: (prog) => console.log(`received: ${prog}`),
        });
        let image = `https://ipfs.io/ipfs/${pic.path}`;
        data.image = image;
      } else {
        data.image = this.url;
      }

      console.log("data:", data);

      let data_path = await this.ipfsInstance.add(JSON.stringify(data), {
        progress: (prog) => console.log(`received: ${prog}`),
      });

      this.lockupUri = `https://ipfs.io/ipfs/${data_path.path}`;
    },

    async onBurn(id, amounts) {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
        return;
      }

      this.getContractInstance.methods
          .burn(id)
          .send({
            from: this.getUserAddress,
          })
          .on("transactionHash", (hash) => {
            console.log(hash);
            this.$toasted.show(`Your NFT is being Burnt, and your ${this.TOKEN_SYMBOL} tokens are being returned to your wallet, great job HODLing!`);
          })
          .on("receipt", async (receipt) => {
            console.log(receipt);
            this.getData();
            this.readValues();
            this.$toasted.show(
                `${this.formator(amounts, 2)} ${
                    this.TOKEN_SYMBOL
                } has been unlocked and returned to your wallet`
            );
          })
          .on("error", (error, receipt) => {
            console.log(error, receipt);
            this.$toasted.show("Burn transaction Failed");
          });
    },

    clearInputs() {
      this.ipfsInstance = null;
      this.lockupUri = null;
      this.imageSrc = null;
      this.lockupAmount = 1;
      this.lockupDays = 0;
      this.lockupImage = null;
      this.lockupDescription = null;
      this.lockupTip = null;
      this.mint_to_address = null;
      this.mint_to_different_address = false;
      this.transferable = false;
      this.isBtnLoading = false;
      this.nfts = [];
      this.url = null;
      this.prompt = "";
      this.isGen = false;
    },
  },
  watch: {
    async getUserAddress() {
      this.getData();
      this.readValues();
    },
    tab() {
      this.url = null;
      this.prompt = "";
      this.isGen = false;
      this.imageSrc = null;
      this.lockupImage = null;
    },
  },
};
</script>
