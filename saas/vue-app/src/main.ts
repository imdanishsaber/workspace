import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

import VueKonva from "vue-konva";

//Global Coimponent Registration
import Alert from "@/components/general/Alert.vue";
import Button from "@/components/general/Button.vue";
import Checkbox from "@/components/general/Checkbox.vue";
import Icon from "@/components/general/Icon.vue";
import Input from "@/components/general/Input.vue";
import NoData from "@/components/general/NoData.vue";
import Select from "@/components/general/Select.vue";
import Spinner from "@/components/general/Spinner.vue";
import Toggle from "@/components/general/Toggle.vue";

createApp(App)
  .use(router)
  .use(VueKonva)
  .use(Quasar, quasarUserOptions)
  .use(createPinia().use(piniaPersist))
  .component("Alert", Alert)
  .component("Button", Button)
  .component("Checkbox", Checkbox)
  .component("Icon", Icon)
  .component("Input", Input)
  .component("NoData", NoData)
  .component("Select", Select)
  .component("Spinner", Spinner)
  .component("Toggle", Toggle)
  .mount("#app");
