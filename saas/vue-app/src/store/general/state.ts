import { defineStore } from "pinia";

export interface State {
  camerasList: Array<any>;
}

export const generalState = defineStore({
  id: "general.state",
  state: (): State => {
    return {
      camerasList: [],
    };
  },
});
