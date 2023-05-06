import axios from "axios";
import config from "@/config/config.json";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      NAME: config.NAME,
      CHAIN_ID: config.CHAIN_ID,
      NETWORK: config.NETWORK,
      TOKEN_SYMBOL: config.TOKEN_SYMBOL,
      CONTRACT_SYMBOL: config.CONTRACT_SYMBOL,
      INFURA_ID: "2J6LT9OJUuoE2jThQiwsRVhBdn5",
      ALCHEMY_API_KEY: "WcUQiYshp4SZV-Df5u2Dp8kaQMi_kYLy",
      INFURA_SECRET_KEY: "374e3af37e03c5a9f65dad72c54fa5fa",
      TOKEN_ADDRESS: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      CONTRACT_ADDRESS: "0xd7f5800e5a458b30fdb790c314c71b355c5829cf",
      OPENAI_KEY: "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",
      ...mapActions("wallet", [
        "SET_WEB3",
        "SET_USER_ADDRESS",
        "SET_TOKEN_INSTANCE",
        "SET_CONTRACT_INSTANCE",
      ]),
    };
  },
  methods: {
    async fetchNFTs() {
      let baseURL = `https://eth-goerli.g.alchemy.com/v2/${this.ALCHEMY_API_KEY}/getNFTs/`;

      let fetchURL = `${baseURL}?owner=${this.getUserAddress}&contractAddresses%5B%5D=${this.CONTRACT_ADDRESS}`;

      let data = await fetch(fetchURL).then((data) => data.json());

      if (data && data.ownedNfts) {
        return data.ownedNfts;
      } else {
        return [];
      }
    },

    async fetchAllNFTs() {
      let baseURL = `https://eth-goerli.g.alchemy.com/nft/v2/${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true`;

      let data = await fetch(fetchURL).then((response) => response.json());

      if (data && data.nfts) {
        return data.nfts;
      } else {
        return [];
      }
    },

    async fetchRandomImage(prompt = "Opensea NFT") {
      let URL = `https://api.openai.com/v1/images/generations`;

      let body = {
        n: 2,
        prompt: prompt,
        size: "256x256",
      };

      const config = {
        headers: {
          Authorization: `Bearer ${this.OPENAI_KEY}`,
          "Content-Type": "application/json",
        },
      };

      return axios
        .post(URL, body, config)
        .then((response) => {
          let data = response.data.data;
          console.log("data:", data);
          if (data && data.length) {
            return data[0].url;
          } else {
            return "";
          }
        })
        .catch((error) => {
          console.log(error);
            return "";
        });
    },

    secondstoDays(sec) {
      if (sec > 0) {
        var seconds = parseInt(sec, 10);

        var days = Math.floor(seconds / (3600 * 24)) + 1;
        if (days > 1) return `${days} Days`;
        else return `${days} Day`;
      } else {
        return "Few Seconds";
      }
    },

    addrTruncation(addr) {
      return (
        addr.slice(0, 6) +
        ". . . . ." +
        addr.slice(addr.length - 6, addr.length)
      );
    },

    formator(number, decimal = 4) {
      if (this.getWeb3 && number)
        return Number(
          this.getWeb3.utils.fromWei(number.toString(), "ether")
        ).toFixed(decimal);
      else return 0;
    },

    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getUserAddress",
      "getTokenInstance",
      "getContractInstance",
    ]),
  },
};
