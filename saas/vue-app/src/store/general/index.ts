import { extractStore } from "../extractStore";
import { defineStore } from "pinia";
import { generalActions } from "./actions";
import { generalGetters } from "./getters";
import { generalState } from "./state";

export const generalStore = defineStore("general", () => {
  return {
    ...extractStore(generalState()),
    ...extractStore(generalGetters()),
    ...extractStore(generalActions()),
  };
});
