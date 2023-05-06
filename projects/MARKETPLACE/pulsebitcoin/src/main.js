import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store/store";
import router from './router'
import Toasted from 'vue-toasted';
import globalMixin from "./mixins/global";
import VueLoadImage from "vue-load-image";
import JwPagination from "jw-vue-pagination";

Vue.use(Vuex)
Vue.mixin(globalMixin);
Vue.component('VueLoadImage', VueLoadImage);
Vue.component('JwPagination', JwPagination);

Vue.use(Toasted, {
  theme: "outline",
  duration: 3000,
  position: "bottom-center",
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#root')
