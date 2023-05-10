import { generalState } from "./state";
import { defineStore } from "pinia";
import ConfigService from "@/modules/Cameras/helper/ConfigService.ts";

export const generalActions = defineStore("general.actions", () => {
  const state = generalState();

  async function setCamerasList() {
    state.camerasList = [];
    const response = await ConfigService.getCamerasList();
    state.camerasList = <any>response;
  }

  return {
    setCamerasList,
  };
});
