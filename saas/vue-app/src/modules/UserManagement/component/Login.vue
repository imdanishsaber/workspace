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
              <h6 class="q-mt-none q-mb-lg text-bold">LOGIN TO YOUR ACCOUNT</h6>
              <q-form class="q-gutter-sm" @submit="onSubmit">
                <Input
                  v-model="user.email"
                  dense
                  filled
                  color="primary"
                  type="text"
                  label="Email"
                  lazy-rules
                  prepend="saas-email"
                  :rules="[isValidEmail]"
                />
                <Input
                  v-model="user.password"
                  dense
                  filled
                  color="primary"
                  type="password"
                  label="Password"
                  lazy-rules
                  prepend="saas-password"
                />
                <div class="position-relative">
                  <router-link
                    flat
                    no-caps
                    color="primary"
                    class="float-right absolute-top-right q-my-lg"
                    :to="{ name: 'Forgot' }"
                    >Forgot password?</router-link
                  >
                </div>
                <div class="q-mt-xl">
                  <Button
                    type="submit"
                    color="primary"
                    class="q-px-xl"
                    text-color="white"
                    :disable="loading"
                    :label="loading ? 'Processing...' : 'Login'"
                  />
                </div>
                <div>
                  <small class="text-black">
                    Don't have an account?
                    <Button
                      flat
                      color="primary"
                      class="q-pa-xs"
                      label="Register"
                      @click="router.push({ name: 'Register' })"
                    />
                  </small>
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
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "@/store/auth";
import { isValidEmail } from "@/composables/global";

import Intro from "./Intro.vue";

import AuthService from "../helper/AuthService";
import IReqLoginModelDto from "../helper/IReqLoginModelDto";

const router = useRouter();
const AUTHSTORE = authStore();

const user = ref<IReqLoginModelDto>({
  email: "",
  password: "",
});
const loading = ref(false);

const onSubmit = async () => {
  try {
    loading.value = true;
    let response = await AuthService.login(user.value);
    AUTHSTORE.setToken(response);
    router.push({ name: "Dashboard" });
  } catch {
    loading.value = false;
  }
};
</script>
