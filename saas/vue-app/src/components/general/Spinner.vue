<template>
  <div
    v-bind="$attrs"
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: $attrs.height,
    }"
  >
    <q-spinner
      :size="$attrs.size ? $attrs.size : '2em'"
      :color="$attrs.color ? $attrs.color : 'primary'"
    />
    <p class="q-ml-sm q-mb-none" style="color: #364fcc">
      {{ $attrs.text ? $attrs.text : "Loading..." }}
    </p>
  </div>
</template>

<script lang="ts" setup></script>
