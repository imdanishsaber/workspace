import Vue from "vue";
import VueRouter from "vue-router";

import PulseBitcoinLockApp from "../page/PulseBitcoinLockApp.vue";
import Minting from "../page/Minting.vue";
import Faq from "../page/Faq.vue";
import WhitePaper from "../page/WhitePaper.vue";
import Disclaimer from "../page/Disclaimer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PulseBitcoinLockApp",
    component: PulseBitcoinLockApp,

  },
  {
    path: "/minting",
    name: "Minting",
    component: Minting,

  },
  {
    path: "/white_paper",
    name: "WhitePaper",
    component: WhitePaper,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/disclaimer",
    name: "Disclaimer",
    component: Disclaimer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
