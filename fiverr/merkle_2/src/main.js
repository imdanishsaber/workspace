import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  theme: "outline",
  duration: 3000,
  position: "top-right",
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
