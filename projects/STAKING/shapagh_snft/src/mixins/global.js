import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      ...mapActions("wallet", [
        "SET_WEB3",
        "SET_METAMASK_ACCOUNT",
        "SET_NFT_INSTANCE",
        "SET_STAKING_INSTANCE",
      ]),
    };
  },
  methods: {
    shortener(addr) {
      return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
    },

    formator(number, decimal = 3) {
      if (this.GET_WEB3)
        return Number(
          this.GET_WEB3.utils.fromWei(number.toString(), "ether")
        ).toFixed(decimal);
      else return 0;
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "GET_WEB3",
      "GET_METAMASK_ACCOUNT",
      "GET_NFT_INSTANCE",
      "GET_STAKING_INSTANCE",
    ]),
  }
};
