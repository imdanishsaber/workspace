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
              <h6 class="q-my-none text-bold">FORGOT YOUR PASSWORD?</h6>
              <p class="text-black q-mt-md q-mb-xl">
                Please enter the email you used to login. <br />
                We'll email you instructions on how to reset your password.
              </p>
              <q-form class="q-gutter-md" @submit="onSubmit">
                <Input
                  v-model="email"
                  dense
                  filled
                  lazy-rules
                  type="text"
                  color="primary"
                  label="Your email"
                  prepend="saas-email"
                  :rules="[isValidEmail]"
                />
                <Button
                  type="submit"
                  color="primary"
                  class="q-px-xl"
                  text-color="white"
                  :disable="loading"
                  :label="loading ? 'Processing...' : 'Reset Password'"
                />
                <div>
                  <router-link :to="{ name: 'Login' }">Cancel </router-link>
                </div>
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
    btnText="Login"
    title="Email Sent Successfully"
    text="Please follow the link sent to your email to reset your password"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Intro from "./Intro.vue";
import AuthService from "../helper/AuthService";
import { isValidEmail } from "@/composables/global";

const email = ref("");
let alert = ref(false);
const loading = ref(false);

const onSubmit = async () => {
  let body = {
    email: email.value,
  };

  try {
    loading.value = true;
    await AuthService.forgotPassword(body);

    alert.value = true;
    loading.value = false;
  } catch {
    loading.value = false;
  }
};
</script>
