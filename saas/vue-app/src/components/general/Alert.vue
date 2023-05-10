<template>
  <q-dialog persistent v-bind="$attrs">
    <q-card class="q-pa-lg" style="width: 100%">
      <q-card-section class="text-center">
        <Icon v-if="icon" :name="icon" size="xl" />
        <h5 v-if="title">{{ title }}</h5>
        <p v-if="text">{{ text }}</p>
        <Button
          size="md"
          color="primary"
          class="q-px-xl"
          :label="btnText"
          @click="router.push({ name: routeName })"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  icon: {
    type: String,
    default: "saas-check",
  },

  title: {
    type: String,
  },

  text: {
    type: String,
  },

  btnText: {
    type: String,
    default: "Continue",
  },

  routeName: {
    type: String,
    default: "Login",
  },
});
</script>
<style scoped>
span {
  margin: 0 0 30px;
}
h5 {
  margin: 0 0 30px;
}
p {
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin: 0 0 30px;
}
</style>
