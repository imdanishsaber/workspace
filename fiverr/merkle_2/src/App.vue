<template>
  <div id="root">
    <div class="outer">
      <div class="main">
        <div class="box" style="padding: 24px">
          <h1>Pre Sale</h1>
          <img class="gif" src="./assets/animation.gif" />
          <p>
            Chi Token Remaining <br /><span
              >{{ totalSupply }}/{{ maxSupply }}</span
            >
          </p>
          <div style="display: flex; margin: 30px 0">
            <button
              class="btn-round"
              style="line-height: 0.4"
              @click.prevent="
                presaleMintAmount =
                  presaleMintAmount > 1
                    ? presaleMintAmount - 1
                    : presaleMintAmount
              "
            >
              -
            </button>
            <p style="margin: 0 30px">{{ presaleMintAmount }}</p>
            <button
              class="btn-round"
              @click.prevent="presaleMintAmount = presaleMintAmount + 1"
            >
              +
            </button>
          </div>
          <template v-if="presaleStarted">
            <div v-if="metamaskAccount">
              <button id="mintButton" class="btn" @click.prevent="mintPresale">
                Mint Your Token!
              </button>
            </div>
            <div v-else>
              <button class="btn" @click.prevent="onConnect">
                Connect Wallet
              </button>
            </div>
          </template>
          <p v-else>Pre sale not started yet</p>
        </div>
      </div>
      <div class="main">
        <div class="box" style="padding: 24px">
          <h1>Public Sale</h1>
          <div style="margin-bottom: 20px">
            <img class="gif" src="./assets/animation.gif" />
          </div>
          <p>
            Chi Token Remaining <br /><span
              >{{ totalSupply }}/{{ maxSupply }}</span
            >
          </p>
          <div style="display: flex; margin: 30px 0">
            <button
              class="btn-round"
              style="line-height: 0.4"
              @click.prevent="
                publicMintAmount =
                  publicMintAmount > 1 ? publicMintAmount - 1 : publicMintAmount
              "
            >
              -
            </button>
            <p style="margin: 0 30px">{{ publicMintAmount }}</p>
            <button
              class="btn-round"
              @click.prevent="publicMintAmount = publicMintAmount + 1"
            >
              +
            </button>
          </div>
          <template v-if="publicSaleStarted">
            <div v-if="metamaskAccount">
              <button id="mintButton" class="btn" @click.prevent="mint">
                Mint Your Token!
              </button>
            </div>
            <div v-else>
              <button class="btn" @click.prevent="onConnect">
                Connect Wallet
              </button>
            </div>
          </template>
          <p v-else>Public sale not started yet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import contract from "@/contracts/contract.json";
import Whitelist from "@/contracts/Accounts.json";

const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

export default {
  name: "App",
  data() {
    return {
      preSalePrice: "0.08",
      publicSalePrice: "0.1",
      web3Object: "",
      maxSupply: null,
      totalSupply: null,
      isWhitelisted: false,
      presaleStarted: false,
      publicSaleStarted: false,
      metamaskAccount: "",
      presaleMintAmount: 1,
      publicMintAmount: 1,
      hexProof: [],
    };
  },
  mounted() {
    const web3 = new Web3(
      "https://ropsten.infura.io/v3/d85fda7b424b4212ba72f828f48fbbe1"
    );

    let instance = new web3.eth.Contract(
      contract.contractABI,
      contract.contractAddress
    );

    Promise.all([
      instance.methods.MAX_TOKENS().call(),
      instance.methods.totalSupply().call(),
      instance.methods.presaleStarted().call(),
      instance.methods.publicSaleStarted().call(),
    ]).then(([maxSupply, totalSupply, presaleStarted, publicSaleStarted]) => {
      console.log(maxSupply, totalSupply, presaleStarted, publicSaleStarted);
      this.maxSupply = maxSupply;
      this.totalSupply = totalSupply;
      this.presaleStarted = presaleStarted;
      this.publicSaleStarted = publicSaleStarted;
    });
  },
  methods: {
    async onConnect() {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.web3Object = new Web3(window.ethereum);

        let accounts = await this.web3Object.eth.getAccounts();
        this.metamaskAccount = accounts[0];
        this.contractInstance = new this.web3Object.eth.Contract(
          contract.contractABI,
          contract.contractAddress
        );
        this.checkWhitelisted();
        this.$toasted.show("Wallet Connected!");
      } else {
        this.$toasted.show("Please install metamask!");
      }
    },

    checkWhitelisted() {
      const leafNodes = Whitelist.map((addr) => keccak256(addr));
      const merkleTree = new MerkleTree(leafNodes, keccak256, {
        sortPairs: true,
      });

      console.log("Whitelist Merkle Tree\n", merkleTree.toString());

      const rootHash = merkleTree.getRoot();

      console.log("Root Hash: ", rootHash.toString("hex"));

      // put address here to check if its on your wl or not
      const claimingAddress = keccak256(this.metamaskAccount);

      this.hexProof = merkleTree.getHexProof(claimingAddress);

      console.log("hexproof\n", this.hexProof);

      this.isWhitelisted = merkleTree.verify(
        this.hexProof,
        claimingAddress,
        rootHash
      );
      console.log(merkleTree.verify(this.hexProof, claimingAddress, rootHash));
    },

    mintPresale() {
      if (!this.isWhitelisted) {
        this.$toasted.show("Your wallet address is not whitelisted!");
        return;
      }
      let mintPrice =
        Number(this.presaleMintAmount) * Number(this.preSalePrice);

      let value = this.web3Object.utils.toHex(
        this.web3Object.utils.toWei(mintPrice.toString(), "ether")
      );

      this.contractInstance.methods
        .mintPresale(Number(this.presaleMintAmount), this.hexProof)
        .send({
          from: this.metamaskAccount,
          to: contract.contractAddress,
          value: value,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted");
        })
        .on("receipt", (receipt) => {
          this.readValue();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Minted Successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction Rejected");
        });
    },
    
    mint() {
      let mintPrice =
        Number(this.publicMintAmount) * Number(this.publicSalePrice);

      let value = this.web3Object.utils.toHex(
        this.web3Object.utils.toWei(mintPrice.toString(), "ether")
      );

      this.contractInstance.methods
        .mint(Number(this.publicMintAmount))
        .send({
          from: this.metamaskAccount,
          to: contract.contractAddress,
          value: value,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash: ", hash);
          this.$toasted.show("Transaction is submitted");
        })
        .on("receipt", (receipt) => {
          this.readValue();
          console.log("Receipt: ", receipt);
          this.$toasted.show("Token Minted Successfully");
        })
        .on("error", (error, receipt) => {
          console.log("Error receipt: ", receipt);
          this.$toasted.show("Transaction Rejected");
        });
    },
  },
};
</script>
<style>
@import "./styles/styles.css";
</style>