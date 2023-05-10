<template>
  <q-layout view="lHr LpR lFr">
    <router-view />
    <q-btn
      round
      color="primary"
      class="fixed-bottom-right q-pa-md q-ma-xl"
      style="z-index: 10000"
    >
      <Icon name="saas-feedback" />
    </q-btn>
  </q-layout>
</template>
<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { authStore } from "@/store/auth";
const AUTHSTORE = authStore();

onBeforeMount(async () => {
  if (process.env.NODE_ENV === "development")
    AUTHSTORE.setBaseURL(process.env.VUE_APP_SERVER_ADDRESS);
  else
    AUTHSTORE.setBaseURL(window.location.origin.replace("8080", "8001") + "/");
});
</script>
