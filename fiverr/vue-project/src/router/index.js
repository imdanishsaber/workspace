import { createRouter, createWebHistory } from 'vue-router'

import Wallet from "../pages/Wallet.vue";
import Minting from "../pages/Minting.vue";
import Locking from "../pages/Locking.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Wallet",
      component: Wallet,
  
    },
    {
      path: "/minting",
      name: "Minting",
      component: Minting,
  
    },
    {
      path: "/locking",
      name: "Locking",
      component: Locking,
  
    },
  ]
})

export default router
