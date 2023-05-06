import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Referrel from '../page/Referrel.vue'
import Withdraw from '../page/Withdraw.vue'
import Migration from '../page/Migration.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/referrel',
    name: 'Referrel',
    component: Referrel
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/migration',
    name: 'Migration',
    component: Migration
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
