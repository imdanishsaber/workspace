import axios from "axios";
import config from "@/config/config";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      NAME: config.NAME,
      CHAIN_ID: config.CHAIN_ID,
      NETWORK: config.NETWORK,
      TOKEN_SYMBOL: config.TOKEN_SYMBOL,
      CONTRACT_SYMBOL: config.CONTRACT_SYMBOL,
      INFURA_ID: config.INFURA_ID,
      ALCHEMY_API_KEY: config.ALCHEMY_API_KEY,
      INFURA_SECRET_KEY: config.INFURA_SECRET_KEY,
      TOKEN_ADDRESS: config.TOKEN_ADDRESS,
      CONTRACT_ADDRESS: config.CONTRACT_ADDRESS,
      OPENAI_KEY: config.OPENAI_KEY,
      OPENSEA_URL_BASE: config.OPENSEA_URL_BASE,
      ETHERSCAN_URL_BASE: config.ETHERSCAN_URL_BASE,
      ALCHEMY_URL_BASE_NFT: config.ALCHEMY_URL_BASE_NFT,
      ALCHEMY_URL_BASE: config.ALCHEMY_URL_BASE,
      UNIT_CONVERSION: config.UNIT_CONVERSION,
      TOKEN_DECIMAL_CONVERSION: config.TOKEN_DECIMAL_CONVERSION,
      TIP_ADDRESS: config.TIP_ADDRESS,
      TOKEN_ABI: config.TOKEN_ABI,
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
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTs/`;

      let fetchURL = `${baseURL}?owner=${this.getUserAddress}&contractAddresses%5B%5D=${this.CONTRACT_ADDRESS}`;

      let data = await fetch(fetchURL).then((data) => data.json());

      if (data && data.ownedNfts) {
        return data.ownedNfts;
      } else {
        return [];
      }
    },

    async fetchAllNFTs() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true&limit=1000`;
      console.log(fetchURL);
      let data = await fetch(fetchURL).then((response) => response.json());

      if (data && data.nfts) {
        return data.nfts;
      } else {
        return [];
      }
    },
    async fetchAllNFTsPage2() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true&limit=1000&startToken=100`;
      console.log(fetchURL);
      let data = await fetch(fetchURL).then((response) => response.json());

      if (data && data.nfts) {
        return data.nfts;
      } else {
        return [];
      }
    },

    async fetchAllNFTsPage3() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true&limit=1000&startToken=200`;
      console.log(fetchURL);
      let data = await fetch(fetchURL).then((response) => response.json());

      if (data && data.nfts) {
        return data.nfts;
      } else {
        return [];
      }
    },
    async fetchAllNFTsPage4() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true&limit=1000&startToken=300`;
      console.log(fetchURL);
      let data = await fetch(fetchURL).then((response) => response.json());

      if (data && data.nfts) {
        return data.nfts;
      } else {
        return [];
      }
    },
    async fetchAllNFTsPage5() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true&limit=1000&startToken=400`;
      console.log(fetchURL);
      let data = await fetch(fetchURL).then((response) => response.json());

      if (data && data.nfts) {
        return data.nfts;
      } else {
        return [];
      }
    },
    async fetchAllNFTsPage6() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTsForCollection`;

      let fetchURL = `${baseURL}?contractAddress=${this.CONTRACT_ADDRESS}&withMetadata=true&limit=1000&startToken=500`;
      console.log(fetchURL);
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
          addr.slice(0, 5) +
          ".." +
          addr.slice(addr.length - 4, addr.length)
      );
    },

    formator(number, decimal = 2) {
      if (this.getWeb3 && number)
        return Number(
            this.getWeb3.utils.fromWei(number.toString(), this.UNIT_CONVERSION)
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
    switchTransferable: function (evt) {
      evt = evt ? evt : window.event;
      console.log(evt)
    },

    isPlural: function (number) {
      if (number == 1) {
        return "day"

      } else {
        return "days"
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
