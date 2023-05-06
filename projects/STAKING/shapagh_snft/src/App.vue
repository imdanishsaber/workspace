<template>
  <div id="app" class="container">
    <nav class="navbar">
      <a class="navbar-brand" href="#">
        <img
          alt="Logo"
          src="@/assets/logo.png"
          style="width: 200px; border-radius: 0px; border: none"
        />
      </a>
      <div class="ml-none ml-sm-auto">
        <button
          v-if="!GET_METAMASK_ACCOUNT"
          class="btn btn-primary"
          @click="event_connect"
        >
          Connect with Metamask
        </button>
        <div v-else class="dropdown">
          <button
            class="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ shortener(GET_METAMASK_ACCOUNT) }}
          </button>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item"
              >{{ NFT_Symbol }}
              <span class="badge badge-primary"> {{ rewardBalance }}</span></a
            >
            <a class="dropdown-item"
              >MATIC <span class="badge badge-primary"> {{ balance }}</span></a
            >
            <hr />
            <a
              class="dropdown-item cursor-pointer"
              @click.prevent="onDisconnect"
              >Disconnect Wallet</a
            >
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="row my-5 py-5">
        <div v-if="totalStaked" class="col-12 mb-5">
          <p class="mb-0">
            {{ totalStaked }} out of {{ maxSupply }}
            <span class="float-right">
              {{ (this.totalStaked / this.maxSupply) * 100 }} %
            </span>
          </p>
          <div class="progress">
            <div
              class="progress-bar"
              :style="`width: ${(this.totalStaked / this.maxSupply) * 100}%`"
            ></div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">You are Staking</h6>
              <h5 class="card-title">{{ stakedNFTs.length }} {{ NFT_Name }}</h5>
              <p class="card-text">
                Earn rewards by staking your {{ NFT_Name }}.
              </p>
              <div v-if="GET_METAMASK_ACCOUNT">
                <button
                  v-if="!isApproved"
                  @click="event_approve"
                  :disabled="processing"
                  class="btn btn-primary w-100 mt-4"
                >
                  {{ processing ? "Loading.." : "Approve" }}
                </button>
                <button
                  v-else
                  @click="event_stake"
                  :disabled="processing"
                  class="btn btn-primary w-100 mt-4"
                >
                  {{ processing ? "Loading.." : "Stake NFT" }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Claimable Rewards</h6>

              <h5 class="card-title">
                {{ pendingTotalRewards }} {{ NFT_Symbol }}
              </h5>
              <p class="card-text">
                You receive 15 {{ NFT_Symbol }} per staked NFT per day.
              </p>
              <button
                v-if="pendingTotalRewards"
                class="btn btn-primary w-100 mt-4"
                @click="onClaim"
                :disabled="processing"
              >
                {{ processing ? "Loading.." : "Claim Reward" }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">
                Your {{ Symbol_Name }} Coin balance
              </h6>
              <h5 class="card-title">{{ rewardBalance }} {{ NFT_Symbol }}</h5>
              <p class="card-text">
                Amount of {{ NFT_Symbol }} in your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body">
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <h6 class="card-subtitle mb-2 text-muted">
                  Unstaked Tokens ({{ unStakedNFTs.length }})
                </h6>
                <div v-if="unStakedNFTs.length">
                  <img
                    width="25px"
                    class="mr-2 cursor-pointer"
                    src="@/assets/reload.png"
                    @click="event_reload()"
                  />
                  <button
                    class="btn btn-sm btn-primary"
                    @click="selectAllUnStaked()"
                  >
                    {{ unStakedSelected ? "Unselect All" : "Select All" }}
                  </button>
                </div>
              </div>

              <p v-if="!unStakedNFTs.length" class="card-text">
                No unstaked Tokens found in your wallet.
              </p>
              <div
                class="row"
                style="max-height: 500px; overflow: scroll; padding-top: 8px"
              >
                <div class="col-12">
                  <div
                    class="position-relative d-inline-block pb-3"
                    v-for="(img, index) in unStakedNFTs"
                    :key="index"
                  >
                    <img
                      v-if="img.selected"
                      class="check"
                      src="@/assets/check.png"
                      alt=""
                    />
                    <img
                      :src="img.image"
                      onerror="this.src='https://pbs.twimg.com/media/E2lQUl_WQAEOVuA.jpg'"
                      width="100"
                      height="100"
                      @click="img.selected = !img.selected"
                      class="nft cursor-pointer m-1"
                    /><br />
                    <p class="text-center text-muted">
                      Token-Id {{ img.nftNo }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body">
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <h6 class="card-subtitle mb-2 text-muted">
                  Staked Tokens ({{ stakedNFTs.length }})
                </h6>
                <div v-if="stakedNFTs.length">
                  <img
                    width="25px"
                    class="mr-2 cursor-pointer"
                    src="@/assets/reload.png"
                    @click="event_reload()"
                  />
                  <button
                    class="btn btn-sm btn-primary"
                    @click="selectAllStaked()"
                  >
                    {{ stakedSelected ? "Unselect All" : "Select All" }}
                  </button>
                </div>
              </div>
              <p v-if="stakedNFTs.length == 0" class="card-text">
                You are currently not staking any tokens.
              </p>

              <div
                class="row"
                style="max-height: 275px; overflow: scroll; padding-top: 8px"
              >
                <div class="col-12">
                  <div
                    class="position-relative d-inline-block pb-3"
                    v-for="(img, index) in stakedNFTs"
                    :key="index"
                  >
                    <img
                      v-if="img.selected"
                      class="check"
                      src="@/assets/check.png"
                      alt=""
                    />
                    <img
                      :src="img.image"
                      onerror="this.src='https://pbs.twimg.com/media/E2lQUl_WQAEOVuA.jpg'"
                      width="100"
                      height="100"
                      class="nft cursor-pointer m-1"
                      @click="img.selected = !img.selected"
                    /><br />
                    <p class="text-center text-muted">
                      Token-Id {{ img.nftNo }}
                    </p>
                  </div>
                </div>
              </div>
              <button
                v-if="stakedNFTs.length != 0"
                class="btn btn-primary w-100 mt-4"
                @click="event_unstake"
                :disabled="processing"
              >
                {{ processing ? "Loading.." : "Unstake NFTs" }}
              </button>

              <h6 class="card-subtitle mt-5 mb-2 text-muted">Staking Guide</h6>
              <ul>
                <li>
                  Click "Approve Staking", so your address is eligible to stake.
                  This requires an Ethereum transaction and a one time gas fee.
                </li>
                <li>Select the tokens you want to stake on the left.</li>
                <li>
                  Click "Stake Selected Tokens" and approve the transaction.
                </li>
                <li>Sit back and earn {{ NFT_Symbol }} every day.</li>
                <li>Get welcome bonus of 300 {{ NFT_Symbol }} at first.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="d-flex justify-content-between">
        <small>Copyright 2022, {{ NFT_Name }}. All Rights Reserved</small>
        <small>
          Verified Token &amp; Staking SmartContract | Verified NFT Contract
        </small>
      </div>
    </footer>
  </div>
</template>

<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import nft from "@/ABIs/NFT_ABI.json";
import staking from "@/ABIs/STAKING_ABI.json";
import config from "@/config/config.json";

export default {
  name: "App",
  data() {
    return {
      NFT_Name: config.NFT_Name,
      Symbol_Name: config.Symbol_Name,
      NFT_Symbol: "$" + config.NFT_Symbol,

      provider: null,
      web3Modal: null,
      processing: false,
      isApproved: false,
      isAlreadyConnected: false,

      stakedNFTs: [],
      unStakedNFTs: [],
      stakedSelected: false,
      unStakedSelected: false,

      balance: 0,
      maxSupply: 0,
      totalStaked: 0,
      rewardBalance: 0,
      pendingTotalRewards: 0,
    };
  },
  beforeMount() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: "https://mainnet.infura.io/v3/d85fda7b424b4212ba72f828f48fbbe1",
          },
          chainId: 1,
          infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
          pollingInterval: "10000",
          supportedChainIds: [1],
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
    localStorage.clear();
    setInterval(() => {
      let isStakedSelected = this.stakedNFTs.find((f) => {
        return f.selected;
      });
      let isUnstakedSelected = this.unStakedNFTs.find((f) => {
        return f.selected;
      });
      if (!isStakedSelected && !isUnstakedSelected) {
        this.readValues();
      }
    }, 20000);
  },

  methods: {
    async event_connect() {
      try {
        this.provider = await this.web3Modal.connect();
        this.event_provider();
        if (!this.isAlreadyConnected) {
          this.provider.on("accountsChanged", (accounts) => {
            console.log(accounts);
            this.event_provider();
          });

          this.provider.on("chainChanged", (chainId) => {
            console.log(chainId);
            this.event_provider();
          });

          this.provider.on("disconnect", (error) => {
            console.log(error);
            this.onDisconnect();
          });
        }
      } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
      }
    },

    async event_provider() {
      let web3 = new Web3(this.provider);

      let accounts = await web3.eth.getAccounts();
      let chainId = await web3.eth.getChainId();

      if (chainId != config.Network_Id) {
        this.$toasted.show("Connect your Wallet to " + config.Network_Name);
        return;
      }

      let NFT_INSTANCE = new web3.eth.Contract(nft.ABI, config.NFT_ADDRESS);
      let STAKING_INSTANCE = new web3.eth.Contract(
        staking.ABI,
        config.STAKING_ADDRESS
      );

      this.SET_WEB3(web3);
      this.SET_METAMASK_ACCOUNT(accounts[0]);
      this.SET_NFT_INSTANCE(NFT_INSTANCE);
      this.SET_STAKING_INSTANCE(STAKING_INSTANCE);
      this.isAlreadyConnected = true;
      this.$toasted.show("Wallet Connected Successfully");

      this.readValues();
    },

    selectAllStaked() {
      this.stakedNFTs.forEach((token) => {
        token.selected = !this.stakedSelected;
      });
      this.stakedSelected = !this.stakedSelected;
    },

    selectAllUnStaked() {
      this.unStakedNFTs.forEach((token) => {
        token.selected = !this.unStakedSelected;
      });
      this.unStakedSelected = !this.unStakedSelected;
    },

    readValues() {
      if (this.GET_METAMASK_ACCOUNT) {
        this.calculateReward();
        Promise.all([
          this.GET_NFT_INSTANCE.methods.maxSupply().call(),
          this.GET_WEB3.eth.getBalance(this.GET_METAMASK_ACCOUNT),
          this.GET_STAKING_INSTANCE.methods
            .tokensStakedMetaDigiLandNFT()
            .call(),
          this.GET_NFT_INSTANCE.methods
            .isApprovedForAll(this.GET_METAMASK_ACCOUNT, config.STAKING_ADDRESS)
            .call(),
          this.GET_STAKING_INSTANCE.methods
            .balanceOf(this.GET_METAMASK_ACCOUNT)
            .call(),
        ]).then(
          ([maxSupply, balance, totalStaked, isApproved, rewardBalance]) => {
            this.maxSupply = maxSupply;
            this.totalStaked = totalStaked;
            this.balance = this.formator(balance);
            this.isApproved = isApproved;
            this.rewardBalance = this.formator(rewardBalance);
            this.event_reload();
          }
        );
      }
    },

    event_reload() {
      this.getNFTStaked();
      this.getNFTUnStaked();
    },

    event_approve() {
      this.processing = true;
      this.GET_NFT_INSTANCE.methods
        .setApprovalForAll(config.STAKING_ADDRESS, true)
        .send({
          from: this.GET_METAMASK_ACCOUNT,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          this.isApproved = true;
          this.processing = false;
          this.readValues();
          console.log(receipt);
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    event_stake() {
      let ids = [];
      this.unStakedNFTs.forEach((nft) => {
        if (nft.selected) ids.push(nft.nftNo);
      });
      if (!ids.length) {
        this.$toasted.show("No NFTs to stake!");
        return;
      }
      this.processing = true;
      this.GET_STAKING_INSTANCE.methods
        .stakeBatchMetaDigiLandNFT(ids)
        .send({
          from: this.GET_METAMASK_ACCOUNT,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
          this.processing = false;
          this.readValues();
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    event_unstake() {
      let ids = [];
      this.stakedNFTs.forEach((nft) => {
        if (nft.selected) ids.push(nft.nftNo);
      });
      if (!ids.length) {
        this.$toasted.show("No NFTs to Unstake!");
        return;
      }
      this.processing = true;
      this.GET_STAKING_INSTANCE.methods
        .unstakeBatchMetaDigiLandNFT(ids)
        .send({
          from: this.GET_METAMASK_ACCOUNT,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
          this.processing = false;
          this.readValues();
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error, receipt) => {
          this.processing = false;
          console.log(error, receipt);
          this.$toasted.show("Transaction is Failed");
        });
    },

    onClaim() {
      this.processing = true;
      this.GET_STAKING_INSTANCE.methods
        .harvestBatchMetaDigiLandNFT(this.GET_METAMASK_ACCOUNT)
        .send({
          from: this.GET_METAMASK_ACCOUNT,
        })
        .on("transactionHash", (hash) => {
          console.log(hash);
          this.$toasted.show("Transaction is Processing");
          return;
        })
        .on("receipt", (receipt) => {
          console.log(receipt);
          this.processing = false;
          this.readValues();
          this.$toasted.show("Transaction is Successful");
        })
        .on("error", (error) => {
          console.log(error);
          this.processing = false;
          this.$toasted.show("Transaction is Failed");
          return;
        });
    },
    async getNFTUnStaked() {
      this.unStakedNFTs = [];
      this.unStakedSelected = false;
      const tokenBalance = await this.GET_NFT_INSTANCE.methods
        .walletOfOwner(this.GET_METAMASK_ACCOUNT)
        .call();
      tokenBalance.forEach(async (nftNo) => {
        let result = {};

        const metadata = await this.GET_NFT_INSTANCE.methods
          .tokenURI(nftNo)
          .call();

        const image = await this.getImageHash(metadata);

        result = {
          ...image,
          nftNo,
          selected: false,
          metadata: metadata,
        };
        this.unStakedNFTs.push(result);
      });
    },

    async getNFTStaked() {
      this.stakedNFTs = [];
      this.stakedSelected = false;
      const nftList = await this.GET_STAKING_INSTANCE.methods
        .stakedNFTSByUserMetaDigiLandNFT(this.GET_METAMASK_ACCOUNT)
        .call();
      nftList.forEach(async (nftNo) => {
        if (nftNo != "0") {
          let result = {};

          const metadata = await this.GET_NFT_INSTANCE.methods
            .tokenURI(nftNo)
            .call();

          const image = await this.getImageHash(metadata);
          result = {
            ...image,
            nftNo,
            selected: false,
            metadata: metadata,
          };
          this.stakedNFTs.push(result);
        }
      });
    },

    async getImageHash(metadata) {
      let [ips, metadataURI] = metadata.split("//");
      let ipfs = ips.replace(":", "/");
      let hashVal = metadataURI;
      try {
        let response = await fetch(`https://ipfs.io/${ipfs}${hashVal}`, {
          timeout: 1000 * 1 * 60,
        });
        let responseJson = await response.json();
        if (responseJson.image) {
          let [ips, imageURI] = responseJson.image.split("//");
          let ipfs = ips.replace(":", "/");
          let url = imageURI;
          return {
            image: `https://ipfs.io/${ipfs}${url}`,
            name: responseJson.name,
            description: responseJson.description,
          };
        } else return "";
      } catch (error) {
        console.error(error);
      }
    },

    async calculateReward() {
      if (!this.GET_STAKING_INSTANCE) return;
      let stakedList = await this.GET_STAKING_INSTANCE.methods
        .stakedNFTSByUserMetaDigiLandNFT(this.GET_METAMASK_ACCOUNT)
        .call();

      this.pendingTotalRewards = 0;
      stakedList.forEach(async (nftNo) => {
        if (nftNo != "0") {
          let reward = await this.GET_STAKING_INSTANCE.methods
            .pendingRewardsMetaDigiLandNFT(this.GET_METAMASK_ACCOUNT, nftNo)
            .call();
          this.pendingTotalRewards =
            this.pendingTotalRewards + Number(this.formator(reward, 0));
        }
      });
    },

    async onDisconnect() {
      this.isApproved = false;
      this.stakedNFTs = [];
      this.unStakedNFTs = [];
      this.rewardBalance = 0;
      this.pendingTotalRewards = 0;

      localStorage.clear();
      this.SET_WEB3(null);
      this.SET_METAMASK_ACCOUNT(null);
      this.SET_NFT_INSTANCE(null);
      this.SET_STAKING_INSTANCE(null);
    },
  },
};
</script>
<style>
@import "./styles/styles.css";
</style>
