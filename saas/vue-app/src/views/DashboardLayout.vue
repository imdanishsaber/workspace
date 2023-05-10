<template>
  <Header></Header>
  <Sidebar></Sidebar>
  <q-page-container>
    <q-page :class="$q.screen.lt.sm ? 'q-pa-md q-mx-sm' : 'q-pa-xl q-mx-lg'">
      <router-view />
    </q-page>
  </q-page-container>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import Sidebar from "../components/layout/Sidebar.vue";

import { useRouter } from "vue-router";
import { authStore } from "@/store/auth";
import { generalStore } from "@/store/general";

import { onBeforeUnmount, computed, watch, onMounted } from "vue";

import SocketioService from "@/socket";

const router = useRouter();

const AUTHSTORE = authStore();
const GENERALSTORE = generalStore();

const isAuthorized = computed(() => {
  return AUTHSTORE.isAuthorized;
});

onBeforeUnmount(async () => {
  SocketioService.disconnect();
});

onMounted(async () => {
  GENERALSTORE.setCamerasList();
});

watch(
  isAuthorized,
  (newVal) => {
    if (newVal) SocketioService.connect();
    else router.push({ name: "Login" });
  },
  { immediate: true }
);
</script>
