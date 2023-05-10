<template>
  <q-icon
    v-if="name.includes('saas')"
    :size="size"
    :color="color ? color : 'white'"
    :name="svgAddress + name"
  />
  <q-icon v-else :size="size" :color="color" :name="name" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
defineProps<{
  name: string;
  color: string;
  size: string;
}>();

const svgAddress = ref("svguse:/icons.svg#");
</script>

<style>
.custom-icon {
  overflow: hidden;
}
</style>
