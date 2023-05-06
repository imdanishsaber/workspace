<template>
  <div class="stake_card_body">
    <div class="row">
      <div class="col-12">
        <h4>Mint NFT</h4>
        <hr />
      </div>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Number of {{ TOKEN_SYMBOL }} tokens</p>
          <p>
            Available Amount:
            <strong>{{ formator(tokenBalance, 4) }} {{ TOKEN_SYMBOL }}</strong>
          </p>
        </div>
        <div class="inputMax">
          <input type="number" placeholder="0" v-model.number="lockupAmount" />
          <button
            class="btn-common"
            type="button"
            :disabled="!getUserAddress"
            @click="lockupAmount = tokenBalance / 1e18"
          >
            MAX
          </button>
        </div>
      </div>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Number of days to lock up</p>
        </div>
        <div class="inputMax">
          <input
            type="number"
            placeholder="days"
            v-model.number="lockupDays"
            @keypress="isNumber($event)"
          />
        </div>
      </div>
      <div class="col-12 col-lg-7 mx-auto ai mt-3">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="tab === 1 ? 'active' : ''"
              @click="tab = 1"
              >Upload image</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="tab === 2 ? 'active' : ''"
              @click="tab = 2"
              >Generate AI image</a
            >
          </li>
        </ul>
      </div>
      <template v-if="tab === 1">
        <div class="col-12 col-lg-7 mx-auto mb-3">
          <div class="d-flex justify-content-between">
            <p class="color_gl">Choose an image to upload</p>
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
                >Choose file</label
              >
            </div>
          </div>
        </div>
        <div v-if="imageSrc" class="col-12 col-lg-7 mx-auto mb-3">
          <img :src="imageSrc" width="100%" height="300px" />
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
              width="100%"
              height="300px"
            />
          </div>
        </div>
      </template>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Image Description</p>
        </div>
        <textarea
          rows="2"
          class="p-3"
          v-model="lockupDescription"
          placeholder="Lock up image Description"
        ></textarea>
      </div>
      <div class="col-12 col-lg-7 mx-auto mb-3">
        <div class="d-flex justify-content-between">
          <p class="color_gl">Developer Tip {{ TOKEN_SYMBOL }} (Optional)</p>
        </div>
        <div class="inputMax">
          <input type="number" placeholder="0" v-model.number="lockupTip" />
        </div>
      </div>
      <div class="col-12 col-sm-7 mx-auto my-3">
        <button
          class="btn-common w-100"
          type="button"
          @click="onApprove"
          :disabled="!getUserAddress || isBtnLoading"
        >
          {{
            isBtnLoading ? "Loading.." : isApproved ? "LOCK" : "Approve PLSB"
          }}
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
        <p class="mx-auto text-muted my-5">Connect Your Wallet First</p>
      </template>
      <template v-else-if="!nfts.length">
        <p class="mx-auto text-muted my-5">No NFT to show</p>
      </template>
      <template v-for="(nft, i) in paginatedNFTs">
        <div class="col-12 col-sm-6 col-lg-4 mb-4" :key="i">
          <div class="card">
            <vue-load-image>
              <img slot="image" :src="nft.metadata.image_path" />
              <img slot="preloader" src="@/assets/default.jpg" />
              <img slot="error" src="@/assets/default.jpg" />
            </vue-load-image>
            <div class="card-body">
              <h6
                class="card-title mb-0"
                data-toggle="tooltip"
                data-placement="top"
                :title="formator(nft.amounts, 10)"
              >
                {{ formator(nft.amounts, 4) }} {{ TOKEN_SYMBOL }}
              </h6>
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
export default {
  name: "Home",
  data() {
    return {
      tab: 1,
      url: null,
      prompt: "",
      nfts: [],
      order: "asc",
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
        let comparison = 0;
        if (a[key] > b[key]) {
          comparison = 1;
        } else if (a[key] < b[key]) {
          comparison = -1;
        }
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
          this.getContractInstance.methods
            .tokenIdsToAmounts(item.id.tokenId)
            .call(),
        ]).then(([owenr, lockTime, Amounts]) => {
          item.owenr = owenr;
          item.amounts = Amounts;

          // totalTime
          let start = new Date(item.timeLastUpdated).getTime() / 1000;
          item.totalTime = Number(lockTime) - Number(start);

          // lockTime
          if (lockTime > now) item.isBurnAble = false;
          else item.isBurnAble = true;

          item.timeLeft = Number(lockTime) - Number(now);

          this.nfts.push(item);
          this.nfts.sort(this.compareValues('amounts')).reverse();
          if (list.length === index + 1) {
            this.nftLoader = false;
            console.log("NFTs:", this.nfts);
          }
        });
      });
    },
    
    onApprove() {
      if (!this.getUserAddress) {
        this.$toasted.show("Connect you wallet first!");
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
          this.$toasted.show("Approved transaction is Processing!");
        })
        .on("receipt", (receipt) => {
          this.isBtnLoading = false;
          this.readValues();
          console.log(receipt);
          this.$toasted.show("Approved transaction is Completed!");
        })
        .on("error", (error, receipt) => {
          this.isBtnLoading = false;
          console.log(error, receipt);
          this.$toasted.show("Approved transaction is Failed");
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
      } else if (!this.lockupDays || this.lockupDays == 0) {
        this.$toasted.show("Enter lockup duration");
        return;
      } else if (!this.lockupImage && !this.url) {
        this.$toasted.show("Upload NFT image");
        return;
      } else if (!this.lockupDescription) {
        this.$toasted.show("Write NFT description");
        return;
      } else if (this.lockupTip === null || this.lockupTip === "") {
        this.$toasted.show("Enter developer tip amount");
        return;
      } else if (this.lockupAmount * 1e18 > this.tokenBalance) {
        this.$toasted.show("Insufficient balance");
        return;
      }
      try {
        this.isBtnLoading = true;
        await this.submitToIPFS();
        let amount = this.getWeb3.utils.toWei(
          this.lockupAmount.toString(),
          "ether"
        );
        let lockupTip = this.getWeb3.utils.toWei(
          this.lockupTip.toString(),
          "ether"
        );
        let lockupSeconds = Number(this.lockupDays) * 86400;
        this.getContractInstance.methods
          .LockUpAndMint(amount, lockupTip, lockupSeconds, this.lockupUri)
          .send({
            from: this.getUserAddress,
          })
          .on("transactionHash", (hash) => {
            console.log(hash);
            this.$toasted.show("Lock up transaction is Processing");
          })
          .on("receipt", async (receipt) => {
            console.log(receipt);
            setTimeout(() => {
              this.getData();
            }, 3000);
            this.readValues();
            this.clearInputs();
            this.isBtnLoading = false;
            this.$toasted.show("Lock up transaction is Completed");
          })
          .on("error", (error, receipt) => {
            this.isBtnLoading = false;
            console.log(error, receipt);
            this.$toasted.show("Lock up transaction is Failed");
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
        this.$toasted.show("Only Images are allowed");
      }
    },

    async submitToIPFS() {
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
        name: "Pulse BitcoinLock",
        image_path: null,
        description: this.lockupDescription,
      };

      if (this.lockupImage) {
        let image = await this.ipfsInstance.add(this.lockupImage, {
          progress: (prog) => console.log(`received: ${prog}`),
        });
        let image_path = `https://ipfs.io/ipfs/${image.path}`;
        data.image_path = image_path;
      } else {
        data.image_path = this.url;
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
          this.$toasted.show("Burn transaction is Processing");
        })
        .on("receipt", async (receipt) => {
          console.log(receipt);
          this.getData();
          this.readValues();
          this.$toasted.show(
            `${this.formator(amounts, 4)} ${
              this.TOKEN_SYMBOL
            } has been unlocked and returned to your wallet`
          );
        })
        .on("error", (error, receipt) => {
          console.log(error, receipt);
          this.$toasted.show("Burn transaction is Failed");
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
