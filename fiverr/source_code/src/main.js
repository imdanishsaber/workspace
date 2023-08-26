import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store/store";
import router from './router'
import Toasted from 'vue-toasted';
import Vuelidate from 'vuelidate'

Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(Toasted, {
  theme: "outline",
  duration: 5000,
  position: "bottom-right",
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
