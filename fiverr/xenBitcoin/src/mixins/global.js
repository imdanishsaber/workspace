import config from "@/config/config";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      ETH_XBTC_ADDRESS: config.ETH_XBTC_ADDRESS,
      ETH_USDC_ADDRESS: config.ETH_USDC_ADDRESS,
      ETH_CONVERTER_ADDRESS: config.ETH_CONVERTER_ADDRESS,
      BSC_XBTC_ADDRESS: config.BSC_XBTC_ADDRESS,
      BSC_BUSD_ADDRESS: config.BSC_BUSD_ADDRESS,
      BSC_CONVERTER_ADDRESS: config.BSC_CONVERTER_ADDRESS,
      PLS_XBTC_ADDRESS: config.PLS_XBTC_ADDRESS,
      PLS_USDC_ADDRESS: config.PLS_USDC_ADDRESS,
      PLS_PLSB_ADDRESS: config.PLS_PLSB_ADDRESS,
      PLS_XENC_ADDRESS: config.PLS_XENC_ADDRESS,
      PLS_CONVERTER_ADDRESS: config.PLS_CONVERTER_ADDRESS,
      X1_CONVERTER_ADDRESS: config.X1_CONVERTER_ADDRESS,

      ...mapActions("wallet", [
        "SET_WEB3",
        "SET_USER_ADDRESS",
        "SET_ETH_XBTC_INSTANCE",
        "SET_ETH_USDC_INSTANCE",
        "SET_ETH_CONVERTER_INSTANCE",
        "SET_BSC_XBTC_INSTANCE",
        "SET_BSC_BUSD_INSTANCE",
        "SET_BSC_CONVERTER_INSTANCE",
        "SET_PLS_XBTC_INSTANCE",
        "SET_PLS_USDC_INSTANCE",
        "SET_PLS_PLSB_INSTANCE",
        "SET_PLS_XENC_INSTANCE",
        "SET_PLS_CONVERTER_INSTANCE",
        "SET_X1_CONVERTER_INSTANCE",
      ]),
    };
  },
  methods: {
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

    formator(number, decimal = 2) {
      if (this.getWeb3 && number)
        return Number(
          this.getWeb3.utils.fromWei(number.toString(), this.UNIT_CONVERSION)
        ).toFixed(decimal);
      else return 0;
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getUserAddress",
      "ETH_XBTC_INSTANCE",
      "ETH_USDC_INSTANCE",
      "ETH_CONVERTER_INSTANCE",
      "BSC_XBTC_INSTANCE",
      "BSC_BUSD_INSTANCE",
      "BSC_CONVERTER_INSTANCE",
      "PLS_XBTC_INSTANCE",
      "PLS_USDC_INSTANCE",
      "PLS_PLSB_INSTANCE",
      "PLS_XENC_INSTANCE",
      "PLS_CONVERTER_INSTANCE",
      "X1_CONVERTER_INSTANCE",
    ]),
  },

};
