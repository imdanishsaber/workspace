import { computed } from "vue";
import { generalState } from "./state";
import { defineStore } from "pinia";

export const generalGetters = defineStore("general.getters", () => {
  const state = generalState();

  const camerasList = computed((): Array<any> => state.camerasList);

  return {
    camerasList,
  };
});
