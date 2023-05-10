import { extractStore } from "../extractStore";
import { defineStore } from "pinia";
import { authActions } from "./actions";
import { authGetters } from "./getters";
import { authState } from "./state";

export const authStore = defineStore("auth", () => {
  return {
    ...extractStore(authState()),
    ...extractStore(authGetters()),
    ...extractStore(authActions()),
  };
});
