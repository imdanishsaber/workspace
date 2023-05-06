import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../page/Home.vue";
import NFT from "../page/NFT.vue";
import INFO from "../page/INFO.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nft",
    name: "NFT",
    component: NFT,
  },
  {
    path: "/info",
    name: "INFO",
    component: INFO,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
