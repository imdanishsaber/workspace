<template>
  <q-header v-bind="$attrs">
    <q-toolbar class="text-primary">
      <q-toolbar-title class="text-black">{{ currentRoute }}</q-toolbar-title>
      <!-- <Input
        v-if="!$q.screen.lt.sm"
        dense
        filled
        rounded
        color="primary"
        type="text"
        appendsize="xs"
        placeholder="Search for..."
        append="saas-header-search"
        style="width: 250px"
      />
      <Icon
        class="cursor-pointer q-ml-md"
        size="xl"
        name="saas-header-menu"
      ></Icon> -->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const route = useRoute();

const currentRoute = computed(() => {
  let title: any = route.name;
  switch (route.name) {
    case "Cameras":
      title = "Cameras List";
      break;
    case "Relay":
      title = "RELAY SYSTEMS";
      break;
    case "Results":
      title = "DOWNLOAD RESULTS";
      break;
    case "Live":
      title = "VIEW RELAY SYSTEM RESULTS IN REALTIME";
      break;
    default:
      title;
  }
  return title;
});
</script>
