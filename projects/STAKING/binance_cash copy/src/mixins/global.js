import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ...mapActions("wallet", [
        "SET_WEB3",
        "SET_PRICE",
        "SET_USER_ADDRESS",
        "SET_V1_INSTANCE",
        "SET_TOKEN_INSTANCE",
        "SET_STAKING_INSTANCE",
        "SET_MIGRATION_INSTANCE"
      ]),
    };
  },
  methods: {
    shortener(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },

    formator(number, decimal = 2) {
      if (this.getWeb3 && number)
        return Number(
          this.getWeb3.utils.fromWei(number.toString(), "ether")
        ).toFixed(decimal);
      else return 0;
    },
    getUSDValue(value) {
      if (Number(value))
        return "$(" + (Number(value) * Number(this.getPrice)).toFixed(3) + ")"
      else return "$(0)"
    },
    timeConverter(t) {
      if (Number(t)) {
        var D = new Date(Number(t) * 1000).toLocaleDateString("en-US")
        var T = new Date(Number(t) * 1000).toLocaleTimeString("en-US")
        return D + ", " + T
      } else {
        return "None"
      }
    },

  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getPrice",
      "getUserAddress",
      "getV1Instance",
      "getTokenInstance",
      "getStakingInstance",
      "getMigrationInstance",
    ]),
  }
};
