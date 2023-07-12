import { defineStore } from "pinia";


export const walletState = defineStore({
  id: "wallet.state",
  state: () => {
    return {
      web3: null,
      CHAIN_ID: null,
      userAddress: null,
      GTXInstance: null,
      TOKENInstance: null,
      LOCKERInstance: null,
    };
  },
});
