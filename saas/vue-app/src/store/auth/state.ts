import { defineStore } from "pinia";

export interface State {
  name: string;
  email: string;
  baseURL: string;
  accessToken: string;
  refreshToken: string;
  isAuthorized: boolean;
}

export const authState = defineStore({
  id: "auth.state",
  state: (): State => {
    return {
      name: "",
      email: "",
      baseURL: "",
      accessToken: "",
      refreshToken: "",
      isAuthorized: false,
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["name", "email", "accessToken", "refreshToken", "isAuthorized"],
      },
    ],
  },
});
