import { defineStore } from "pinia";
import { walletActions } from "./actions";
import { walletGetters } from "./getters";
import { walletState } from "./state";

export const walletStore = defineStore("wallet", () => {
  return {
    ...walletState(),
    ...walletGetters(),
    ...walletActions(),
  };
});
