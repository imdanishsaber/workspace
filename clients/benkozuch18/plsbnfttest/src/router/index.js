import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../page/Home.vue";
import GALLERY from "../page/Gallery.vue";
import PURPLE_PAPER from "../page/PURPLE_PAPER.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "GALLERY",
    component: GALLERY,
  },
  {
    path: "/purple_paper",
    name: "PURPLE_PAPER",
    component: PURPLE_PAPER,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
