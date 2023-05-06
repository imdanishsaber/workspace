import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store/store";
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
  render: h => h(App),
}).$mount('#app')
