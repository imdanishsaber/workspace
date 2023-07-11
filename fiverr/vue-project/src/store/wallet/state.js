import { defineStore } from "pinia";


export const walletState = defineStore({
  id: "wallet.state",
  state: () => {
    return {
      camerasList: ['1','2'],
    };
  },
});
