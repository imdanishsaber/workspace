import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from "./store/store";
import Toasted from 'vue-toasted';
import VueCarousel from 'vue-carousel';
Vue.use(Vuex)
Vue.use(VueCarousel);

Vue.use(Toasted, {
  theme: "outline",
  duration: 3000,
  position: "bottom-right",
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
