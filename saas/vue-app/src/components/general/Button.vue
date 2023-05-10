<template>
  <q-btn
    v-bind="$attrs"
    :color="$attrs.color ? $attrs.color : 'primary'"
    :icon="icon && icon.includes('saas') ? svgAddress + icon : icon"
    :icon-right="
      iconRight && iconRight.includes('saas')
        ? svgAddress + iconRight
        : iconRight
    "
  >
  </q-btn>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
  icon: string;
  iconRight: string;
}>();

const svgAddress = ref("svguse:/icons.svg#");
</script>
