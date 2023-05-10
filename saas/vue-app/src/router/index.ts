import { authStore } from "@/store/auth";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "History" */ "@/views/UserRoute.vue"),
    redirect: { name: "Login" },
    children: [
      {
        path: "register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/UserManagement/component/Register.vue"
          ),
      },
      {
        path: "verify",
        name: "OTPVerification",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/UserManagement/component/OTPVerification.vue"
          ),
      },
      {
        path: "login",
        name: "Login",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/UserManagement/component/Login.vue"
          ),
      },
      {
        path: "forgot",
        name: "Forgot",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/UserManagement/component/Forgot.vue"
          ),
      },
      {
        path: "reset",
        name: "Reset",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/UserManagement/component/Reset.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    name: "Dashboard",
    redirect: { name: "Home" },
    component: () =>
      import(/* webpackChunkName: "History" */ "@/views/DashboardLayout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Dashboard/component/Home.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/upload",
        name: "Upload",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Dashboard/component/Upload.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/relay",
        name: "Relay",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Dashboard/component/Relay.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/integration",
        name: "Cameras",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Cameras/component/Integration.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/live",
        name: "Live",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Live/component/Realtime.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/results",
        name: "Results",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Dashboard/component/Results.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: "/account",
        name: "Account",
        component: () =>
          import(
            /* webpackChunkName: "History" */ "@/modules/Accounts/component/Account.vue"
          ),
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const AUTHSTORE = authStore();

  const isAuthorized = AUTHSTORE.isAuthorized;

  try {
    if (to.meta.requireAuth && !isAuthorized) {
      next({ name: "Login" });
    } else {
      next();
    }
  } catch (err) {
    next({ name: "Login" });
  }
});

export default router;
