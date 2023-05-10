<template>
  <p v-if="heading" :class="headingColor" style="margin: 0 0 5px">
    {{ heading }}
  </p>
  <q-input :label-color="color" v-bind="$attrs">
    <template v-if="$attrs.prepend" #prepend>
      <Icon :size="$attrs.prependsize" :name="$attrs.prepend"></Icon>
    </template>
    <template v-if="$attrs.append" #append>
      <Icon :size="$attrs.appendsize" :name="$attrs.append"></Icon>
    </template>
  </q-input>
</template>

<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
  heading: {
    type: String,
  },
  headingColor: {
    type: String,
  },
});
</script>
<style>
.otp .q-field__native {
  font-size: 38px;
  font-weight: 800;
}
</style>
