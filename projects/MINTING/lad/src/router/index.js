import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Staking from '../page/Staking.vue'
import ERC20Staking from '../page/ERC20Staking.vue'
import Endless from '../page/Endless.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/staking',
    name: 'Staking',
    component: Staking
  },
  {
    path: '/erc20-staking',
    name: 'ERC20Staking',
    component: ERC20Staking
  },
  {
    path: '/endless',
    name: 'Endless',
    component: Endless
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
