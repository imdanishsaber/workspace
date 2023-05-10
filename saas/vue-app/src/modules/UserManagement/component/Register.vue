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
              <h6 class="q-mt-none q-mb-lg text-bold">CREATE NEW ACCOUNT</h6>
              <q-form class="q-gutter-sm" @submit="onSubmit">
                <Input
                  v-model="user.name"
                  dense
                  filled
                  color="primary"
                  type="text"
                  label="Full Name"
                  lazy-rules
                  :rules="[nameRule]"
                  prepend="saas-username"
                />
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
                  :rules="[isValidPassword]"
                  prepend="saas-password"
                />
                <Input
                  v-model="confirmPassword"
                  dense
                  filled
                  color="primary"
                  type="password"
                  label="Confirm Password"
                  lazy-rules
                  prepend="saas-password"
                  :rules="[passwordRule]"
                />
                <Input
                  v-model="user.phone"
                  dense
                  filled
                  color="primary"
                  type="number"
                  label="Phone Number"
                  prepend="saas-phone"
                  :rules="[isValidPhoneNumber]"
                />
                <Button
                  :disable="loading"
                  color="primary"
                  text-color="white"
                  :label="loading ? 'Processing...' : 'Register'"
                  class="q-mt-lg q-px-xl"
                  type="submit"
                />
                <div>
                  <small class="text-black">
                    Already have an account?
                    <Button
                      flat
                      color="primary"
                      class="q-pa-xs"
                      label="Login"
                      @click="router.push({ name: 'Login' })"
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
import Intro from "./Intro.vue";
import AuthService from "../helper/AuthService";
import {
  isValidEmail,
  isValidPassword,
  isValidPhoneNumber,
} from "@/composables/global";
import IReqUserRegModelDto from "../helper/IReqUserRegModelDto";

const router = useRouter();

const user = ref<IReqUserRegModelDto>({
  name: "",
  email: "",
  password: "",
  phone: "",
  verified: false,
});

const loading = ref(false);
const confirmPassword = ref("");

const onSubmit = async () => {
  try {
    loading.value = true;
    await AuthService.register(user.value);

    loading.value = false;
    router.push({
      name: "OTPVerification",
      params: { email: user.value.email },
    });
  } catch {
    loading.value = false;
  }
};

const nameRule = (value: string) => {
  if (!value) return "Full name is required";
  else if (value.length < 3 || value.length > 255)
    return "Full name must be between 3 to 255 characters";
  else if (!/^[a-zA-Z_ ]*$/.test(value))
    return "Only letters are allowed in full name";
  else return true;
};

const passwordRule = (value: string) => {
  if (!value) return "Confirm password is required";
  else if (value !== user.value.password) return "Password does not match";
  else return true;
};
</script>
