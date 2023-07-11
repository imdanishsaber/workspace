import config from "@/config/config";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      CHAIN_ID: config.CHAIN_ID,
      NETWORK: config.NETWORK,
      INFURA_ID: config.INFURA_ID,
      ALCHEMY_API_KEY: config.ALCHEMY_API_KEY,
      INFURA_SECRET_KEY: config.INFURA_SECRET_KEY,
      OPENSEA_URL_BASE: config.OPENSEA_URL_BASE,
      ETHERSCAN_URL_BASE: config.ETHERSCAN_URL_BASE,
      ALCHEMY_URL_BASE_NFT: config.ALCHEMY_URL_BASE_NFT,
      ALCHEMY_URL_BASE: config.ALCHEMY_URL_BASE,
      TOKEN_SYMBOL: config.TOKEN_SYMBOL,
      UNIT_CONVERSION: config.UNIT_CONVERSION,
      TOKEN_DECIMAL_CONVERSION: config.TOKEN_DECIMAL_CONVERSION,

      RIDE_ADDRESS: config.RIDE_ADDRESS,
      LOCK_ADDRESS: config.LOCK_ADDRESS,
      MINTING_ADDRESS: config.MINTING_ADDRESS,
      USDC_ADDRESS: config.USDC_ADDRESS,
      HEX_ADDRESS: config.HEX_ADDRESS,
      eHEX_ADDRESS: config.eHEX_ADDRESS,
      PLSX_ADDRESS: config.PLSX_ADDRESS,

      ...mapActions("wallet", [
        "SET_WEB3",
        "SET_LOADING",
        "SET_USER_ADDRESS",
        "SET_RIDE_INSTANCE",
        "SET_LOCK_INSTANCE",
        "SET_MINTING_INSTANCE",
        "SET_USDC_INSTANCE",
        "SET_HEX_INSTANCE",
        "SET_eHEX_INSTANCE",
        "SET_PLSX_INSTANCE",
      ]),
    };
  },
  methods: {
    async addToken(symbol) {
      let data = {};
      switch (symbol) {
        case "CARN":
          data = {
            address: this.CARN_ADDRESS,
            symbol: "CARN",
            decimals: "12",
          };
          break;
        case "PLSD":
          data = {
            address: this.PLSD_ADDRESS,
            symbol: "PLSD",
            decimals: "12",
          };
          break;
        case "PLSB":
          data = {
            address: this.PLSB_ADDRESS,
            symbol: "PLSB",
            decimals: "12",
          };
          break;
        case "ASIC":
          data = {
            address: this.ASIC_ADDRESS,
            symbol: "ASIC",
            decimals: "12",
          };
          break;
        case "USDC":
          data = {
            address: this.USDC_ADDRESS,
            symbol: "USDC",
            decimals: "6",
          };
          break;
        case "HEX":
          data = {
            address: this.HEX_ADDRESS,
            symbol: "HEX",
            decimals: "8",
          };
          break;
      }
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: data.address,
            symbol: data.symbol,
            decimals: data.decimals,
          },
        },
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
    sixFormat(number, decimal = 0) {
      if (this.getWeb3 && number)
        return parseFloat(Number(
          this.getWeb3.utils.fromWei(number.toString(), "Mwei")
        ).toFixed(decimal)).toString();
      else return 0;
    },
    eightFormat(number, decimal = 0) {
      if (this.getWeb3 && number) return parseFloat(Number(number / 1e8).toFixed(decimal)).toString();
      else return 0;
    },
    twelveFormat(number, decimal = 0) {
      if (this.getWeb3 && number)
        return parseFloat(Number(
          this.getWeb3.utils.fromWei(number.toString(), "szabo")
        ).toFixed(decimal)).toString();
      else return 0;
    },
    eighteenFormat(number, decimal = 0) {
      if (this.getWeb3 && number)
        return parseFloat(Number(
          this.getWeb3.utils.fromWei(number.toString(), "ether")
        ).toFixed(decimal)).toString();
      else return 0;
    },
    generalFormat(number, type, decimal = 0) {
      if (this.getWeb3 && number) {
        if (type === 'six') {
          return Number(
            this.getWeb3.utils.fromWei(number.toString(), "Mwei")
          ).toFixed(decimal);
        }
        else if (type === 'eight') {
          return Number(number / 1e8).toFixed(decimal);
        }
        else {
          return Number(
            this.getWeb3.utils.fromWei(number.toString(), "szabo")
          ).toFixed(decimal);
        }
      }
      else {
        return 0;
      }
    },
    sixToWei(number) {
      if (this.getWeb3 && number)
        return this.getWeb3.utils.toWei(number.toString(), "Mwei");
      else return 0;
    },
    eightToWei(number) {
      if (this.getWeb3 && number) return number * 1e8;
      else return 0;
    },
    twelveToWei(number) {
      if (this.getWeb3 && number)
        return this.getWeb3.utils.toWei(number.toString(), "szabo");
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
    HHMMSS(totalseconds) {
      var day = 86400;
      var daysout = Math.floor(totalseconds / day);
      return `${daysout} Days`;
    },
    humanDate(seconds) {
      return new Date(seconds * 1000).toLocaleString("en-US");
    },
    async getMetadata(url) {
      let data = await fetch(url).then((data) => data.json());
      return data
    },

    async fetchNFTs() {
      let baseURL = `${this.ALCHEMY_URL_BASE}${this.ALCHEMY_API_KEY}/getNFTs/`;

      let fetchURL = `${baseURL}?owner=${this.getUserAddress}&contractAddresses%5B%5D=${this.CONTRACT_ADDRESS}`;

      let data = await fetch(fetchURL).then((data) => data.json());
      console.log('data:', data);
      if (data && data.ownedNfts) {
        return data.ownedNfts;
      } else {
        return [];
      }
    },

    formator(number, decimal = 2) {
      if (this.getWeb3 && number)
        return Number(
          this.getWeb3.utils.fromWei(number.toString(), this.UNIT_CONVERSION)
        ).toFixed(decimal);
      else return 0;
    },

    isPlural: function (number) {
      if (number == 1) {
        return "day"

      } else {
        return "days"
      }
    },
    isPluralBoolean: function (number) {
      if (number == 1)
        return false
      else
        return true

    },
  },
  computed: {
    ...mapGetters("wallet", [
      "isLoading",
      "getWeb3",
      "getUserAddress",
      "getRIDEInstance",
      "getLOCKInstance",
      "getMINTINGInstance",
      "getUSDCInstance",
      "getHEXInstance",
      "geteHEXInstance",
      "getPLSXInstance",
    ]),
  },

};
