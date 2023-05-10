import { computed } from "vue";
import { authState } from "./state";
import { defineStore } from "pinia";

export const authGetters = defineStore("auth.getters", () => {
  const state = authState();

  const baseURL = computed((): string => state.baseURL);
  const accessToken = computed((): string => state.accessToken);
  const refreshToken = computed((): string => state.refreshToken);
  const isAuthorized = computed((): boolean => state.isAuthorized);

  return {
    baseURL,
    accessToken,
    refreshToken,
    isAuthorized,
  };
});
