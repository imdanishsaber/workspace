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
    <Icon
      :name="$attrs.icon ? $attrs.icon : 'error'"
      :size="$attrs.size ? $attrs.size : '2rem'"
      :color="$attrs.color ? $attrs.color : 'black'"
    />
    <p class="q-ml-sm q-mb-none" style="color: #000">
      {{ $attrs.text ? $attrs.text : "No data to show" }}
    </p>
  </div>
</template>

<script lang="ts" setup></script>
