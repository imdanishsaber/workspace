import { authState } from "./state";
import { defineStore } from "pinia";

export const authActions = defineStore("auth.actions", () => {
  const state = authState();

  function setBaseURL(payload: string) {
    state.baseURL = payload;
  }

  async function setToken(payload: any) {
    state.name = payload.name;
    state.email = payload.email;
    state.accessToken = payload.access_token;
    state.refreshToken = payload.refresh_token;
    state.isAuthorized = payload.access_token ? true : false;
  }

  async function setAccessToken(payload: any) {
    state.accessToken = payload.access_token;
  }

  function logout() {
    state.name = "";
    state.email = "";
    state.accessToken = "";
    state.refreshToken = "";
    state.isAuthorized = false;
  }

  return {
    logout,
    setToken,
    setBaseURL,
    setAccessToken,
  };
});
