import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Toasted from "vue-toasted";
import vuetify from "./plugins/vuetify";
import globalMixin from "./mixins/global";

Vue.use(Vuex);
Vue.mixin(globalMixin);

Vue.use(Toasted, {
  theme: "outline",
  duration: 3000,
  position: "bottom-right",
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
