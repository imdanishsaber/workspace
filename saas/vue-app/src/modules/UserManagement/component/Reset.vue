<template>
  <q-page>
    <div class="row window-height">
      <div class="col-6 bg-primary">
        <Intro />
      </div>
      <div class="col-6">
        <div class="flex justify-center items-center window-height">
          <q-card class="users">
            <q-card-section class="text-center">
              <h6 class="q-my-none text-bold">NEW PASSWORD</h6>
              <p class="text-black q-mt-md q-mb-xl">
                Please create a new password that you haven't used before.
              </p>
              <q-form class="q-gutter-md" @submit="onSubmit">
                <Input
                  v-model="newPassword"
                  dense
                  filled
                  lazy-rules
                  type="password"
                  color="primary"
                  label="New Password"
                  prepend="saas-password"
                  class="col-12 col-sm-6 col-md-3"
                  :rules="[isValidPassword]"
                />
                <Input
                  v-model="confirmPassword"
                  dense
                  filled
                  lazy-rules
                  type="password"
                  color="primary"
                  prepend="saas-password"
                  label="Confirm New Password"
                  class="col-12 col-sm-6 col-md-3"
                  :rules="[passwordRule]"
                />
                <Button
                  type="submit"
                  color="primary"
                  class="q-px-xl"
                  text-color="white"
                  :disable="loading"
                  :label="loading ? 'Processing...' : 'Save'"
                />
              </q-form>
            </q-card-section>
            <img
              class="user_card_bg"
              src="@/assets/card_background.svg"
              alt=""
            />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
  <Alert
    v-model="alert"
    title="Password Changed Successfully!"
    btnText="Login"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import Intro from "./Intro.vue";
import AuthService from "../helper/AuthService";
import { isValidPassword } from "@/composables/global";

const route = useRoute();

let alert = ref(false);
const loading = ref(false);

const newPassword = ref("");
const confirmPassword = ref("");

const onSubmit = async () => {
  let body = {
    newPassword: newPassword.value,
  };

  let config = {
    headers: {
      authorization: "Bearer " + route.query.pwd_reset_token,
    },
  };

  try {
    loading.value = true;
    await AuthService.resetPassword(body, config);
    alert.value = true;
    loading.value = false;
  } catch {
    loading.value = false;
  }
};

const passwordRule = (value: string) => {
  if (!value) return "Confirm password is required";
  else if (value !== newPassword.value) return "Password does not match";
  else return true;
};
</script>
