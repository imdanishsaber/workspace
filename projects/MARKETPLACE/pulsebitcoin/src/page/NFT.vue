<template>
  <div class="stake_card_body">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h4>All NFTs</h4>
          <div class="d-flex justify-content-between align-items-center">
            <input
              type="text"
              class="search form-control mr-3"
              v-model="ownerAddress"
              placeholder="Search by owner address..."
            />
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
              <small>
                <a
                  :href="`https://etherscan.io/address/${nft.owenr}`"
                  target="_blank"
                  >{{ addrTruncation(nft.owenr) }}</a
                ></small
              >
              <hr class="mt-2" />
              <small class="card-text">
                {{ nft.description }}
              </small>
              <br />
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-between">
                <div>
                  <div>
                    <small>Total Lock Time: </small>
                  </div>
                  <div>
                    <small class="text-blue">
                      {{ secondstoDays(nft.totalTime) }}
                    </small>
                  </div>
                </div>
                <div>
                  <div>
                    <small>Time Remaining: </small>
                  </div>
                  <div>
                    <small class="text-blue">{{
                      typeof nft.timeLeft === "number"
                        ? secondstoDays(nft.timeLeft)
                        : overTime(nft.timeLeft)
                    }}</small>
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
          :pageSize="9"
          :maxPages="3"
          :items="this.nfts"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "NFT",
  data() {
    return {
      nfts: [],
      allNFTs: [],
      order: "asc",
      paginatedNFTs: [],
      ownerAddress: "",
      nftLoader: false,
    };
  },
  async mounted() {
    if (this.getUserAddress) this.getData();
  },
  methods: {
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
      this.nftLoader = true;
      let list = await this.fetchAllNFTs();
      if (!list.length) this.nftLoader = false;
      let now = new Date().getTime() / 1000;
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
          if (lockTime > now) {
            item.timeLeft = Number(lockTime) - Number(now);
          } else {
            item.timeLeft = lockTime.toString();
          }

          this.nfts.push(item);
          this.allNFTs.push(item);
          if (list.length === index + 2) {
            this.nftLoader = false;
            console.log("NFTs:", this.nfts);
          }
        });
      });
    },
    overTime(time) {
      return "Lockup Ended " + moment.unix(time).fromNow();
    },
  },
  watch: {
    ownerAddress() {
      this.nfts = this.allNFTs;
      if (this.ownerAddress)
        this.nfts = this.nfts.filter((f) => f.owenr === this.ownerAddress);
    },
    async getUserAddress() {
      this.nfts = [];
      if (this.getUserAddress) this.getData();
    },
  },
};
</script>
