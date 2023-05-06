import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store/store";
import router from './router'
import Toasted from 'vue-toasted';
import globalMixin from "./mixins/global";

Vue.use(Vuex)
Vue.mixin(globalMixin);
Vue.use(Toasted, {
  theme: "outline",
  duration: 3000,
  position: "top-center",
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#root')
