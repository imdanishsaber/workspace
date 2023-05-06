<template>
  <div class="stake_card_body">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
          <h4>NFT Gallery ({{nfts.length}} NFTs)</h4>
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
                <a
                  class="dropdown-item cursor-pointer"
                  @click="nfts.sort(compareValues('token_id'))"
                >NFT ID</a
                >
                <a
                  class="dropdown-item cursor-pointer"
                  @click="nfts.sort(compareValues('owenr'))"
                >Owner</a
                >


              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h5>Total {{TOKEN_SYMBOL}} Locked: {{formator(getTotalLocked(), 2)}} (${{ Number(formator(getTotalLocked(), 2)* pulsebitcoin_price).toFixed(2) }}) ({{totalSupply}}% of supply)</h5>
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
        <p class="mx-auto text-muted my-5">No NFTs to show</p>
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
                {{ formator(nft.amounts, 2) }} {{ TOKEN_SYMBOL }} <img v-if="nft.transferable" src="@/assets/money.png" width="20" height="20" /> <img v-if="!nft.transferable" src="@/assets/diamond.png" width="20" height="20"/>
              </h6>
              <small>
                OWNER: <a :href="`${ETHERSCAN_URL_BASE}address/${nft.owenr}`" target="_blank"> {{ addrTruncation(nft.owenr) }}</a><br/>
                NFT ID: <a :href="`${ETHERSCAN_URL_BASE}token/${CONTRACT_ADDRESS}?a=${nft.token_id}`" target="_blank">{{ nft.token_id }}</a>
              </small>
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
  name: "GALLERY",
  data() {
    return {
      nfts: [],
      allNFTs: [],
      order: "desc",
      paginatedNFTs: [],
      ownerAddress: "",
      totalSupply: 0,
      pulsebitcoin_price: 0,
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
    getTotalLocked() {
      let totalLocked = 0
      for (const item of this.nfts) {
        totalLocked += Number(item.amounts);
      }
      return totalLocked;
    },
    compareValues(key) {
      this.order = this.order === "asc" ? "desc" : "asc";
      return (a, b) => {
        let comparison = a[key] - b[key];
        return this.order === "asc" ? comparison : comparison * -1;
      };
    },
    async getData() {
      this.nftLoader = true;
      let list1 = await this.fetchAllNFTs();
      let list2=  await this.fetchAllNFTsPage2();
      let list3=  await this.fetchAllNFTsPage3();
      let list4= await this.fetchAllNFTsPage4();
      let list5=  await this.fetchAllNFTsPage5();
      let list6= await this.fetchAllNFTsPage6();

      let list = list1.concat(list2);
      list = list.concat(list3)
      list = list.concat(list4)
      list = list.concat(list5)
      list = list.concat(list6)
      console.log("whole list 1:")
      console.log(list1)
      console.log("whole list 2:")
      console.log(list2)
      console.log("whole list 3:")
      console.log(list3)
      console.log("whole list 4:")
      console.log(list4)

      console.log("whole list:")
      console.log(list)
      if (!list.length) this.nftLoader = false;
      let now = new Date().getTime() / 1000;
      list.forEach((item, index) => {
        Promise.all([
          this.getContractInstance.methods.ownerOf(item.id.tokenId).call(),
          this.getContractInstance.methods.lockTime(item.id.tokenId).call(),
          this.getContractInstance.methods.tokenIdsToAmounts(item.id.tokenId).call(),
          this.getContractInstance.methods.tokenIdsToTransferable(item.id.tokenId).call(),
          this.getTokenInstance.methods.totalSupply().call(),
          this.getCryptoPrice('pulsebitcoin'),
          this.getTransactionTimeStamp(item.id.tokenId),

        ]).then(([owenr, lockTime, Amounts, transferable, totalSupply, price, txTime]) => {
          item.owenr = owenr;
          item.amounts = Amounts;
          item.token_id = this.getWeb3.utils.hexToNumber(item.id.tokenId)
          this.totalSupply = Number(100*(this.formator(this.getTotalLocked())/(this.formator(totalSupply)))).toFixed(2);
          //console.log(totalSupply);
          this.pulsebitcoin_price = price;
          // totalTime
          //console.log(txTime);
          //console.log('txTime');
          item.totalTime = Number(lockTime) - Number(txTime) - 1;

          // lockTime
          if (lockTime > now) {
            item.timeLeft = Number(lockTime) - Number(now);
          } else {
            item.timeLeft = lockTime.toString();
          }
          item.transferable = transferable;
          this.nfts.push(item);
          this.allNFTs.push(item);
          this.nfts.sort(this.compareValues('amounts')).reverse();

          if (list.length === index + 2) {
            this.nftLoader = false;
          }
        });
      });

    },
    overTime(time) {
      return "Lockup Ended " + moment.unix(time).fromNow();
    },
    async getCryptoPrice(crypto) {
      const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`;
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        //console.log(data[crypto].usd)
        return data[crypto].usd;
      } catch (error) {
        console.error(error);
      }
    },
    async getTransactionTimeStamp(tokenId) {
      const events = await this.getContractInstance.getPastEvents('LockUpAndMint', {
        fromBlock: 0,
        toBlock: 'latest'
      });
      let tokenIDNumber = this.getWeb3.utils.hexToNumber(tokenId)
      const mintEvent = events[tokenIDNumber];
      // console.log(mintEvent);
      // console.log(tokenIDNumber);
      const transactionHash = mintEvent.transactionHash;
      // console.log(transactionHash);
      // console.log("transaction hash!")
      let transaction = await this.getWeb3.eth.getTransaction(transactionHash);
      let blockNumber = transaction.blockNumber;
      let block = await this.getWeb3.eth.getBlock(blockNumber);
      let timestamp = block.timestamp;
      // console.log(timestamp);
      // console.log("transaction time!")
      return timestamp;

    }
  },
  watch: {
    ownerAddress() {
      console.log("this.ownerAddress:", this.ownerAddress);
      this.nfts = this.allNFTs;
      if (this.ownerAddress)
        this.nfts = this.nfts.filter((f) => f.owenr.toLowerCase().includes(this.ownerAddress.toLowerCase()));
    },
    async getUserAddress() {
      this.nfts = [];
      if (this.getUserAddress) this.getData();
    },
  },
};
</script>
