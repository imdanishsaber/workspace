<template>
  <div class="row">
    <div class="col-12 q-mb-md">
      <p class="q-mb-none">
        <strong>General Information</strong>
      </p>
      <small>Display name to identify logged in user. </small>
    </div>
    <div class="col-12 col-sm-6 col-md-3 q-mb-xl">
      <Input
        v-model="name"
        dense
        filled
        disable
        type="text"
        color="primary"
        label="First Name"
      />
    </div>
    <div class="col-12 q-mb-md">
      <p class="q-mb-none">
        <strong>Account Information</strong>
      </p>
      <small>You can update your login email address here. </small>
    </div>
    <div class="col-12 col-md-6 q-mb-xl">
      <div class="row q-col-gutter-md">
        <Input
          v-model="email"
          dense
          filled
          disable
          type="text"
          class="col-12 col-sm-6"
          color="primary"
          label="Email Address"
        />
        <div class="col-12 col-sm-6">
          <div class="flex items-center q-mt-xs">
            <Button flat label="Change Email" @click="show = !show" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 q-mb-md">
      <p class="q-mb-none">
        <strong>Change Password</strong>
      </p>
      <small>Use a strong password that you dont use elsewhere.</small>
    </div>
    <div class="col-12 col-lg-8 q-mb-xl">
      <q-form @submit="onPasswordChange">
        <div class="row q-col-gutter-md">
          <Input
            v-model="password"
            dense
            filled
            lazy-rules
            type="password"
            color="primary"
            label="Current Password"
            class="col-12 col-sm-12 col-md-3"
            :rules="[isValidPassword]"
          />
          <Input
            v-model="newPassword"
            dense
            filled
            lazy-rules
            type="password"
            color="primary"
            label="New Password"
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
            label="Confirm New Password"
            class="col-12 col-sm-6 col-md-3"
            :rules="[passwordRule]"
          />
          <div class="col-12 col-sm-6 col-md-3">
            <Button
              :disable="loading"
              type="submit"
              color="primary"
              class="q-px-lg"
              :label="loading ? 'Processing...' : 'CHANGE'"
            />
          </div>
        </div>
      </q-form>
    </div>
  </div>
  <q-dialog persistent v-model="show" @hide="onClear">
    <q-card
      class="q-pt-xl q-px-xl"
      style="min-width: 510px; border-radius: 10px"
    >
      <Icon
        v-close-popup
        name="cancel"
        size="sm"
        class="absolute-top-right q-ma-md cursor-pointer"
      />
      <q-card-section class="text-center">
        <template v-if="step == 1">
          <q-form class="q-gutter-sm" @submit="onChangeEmail">
            <Input
              v-model="email"
              dense
              filled
              disable
              lazy-rules
              type="text"
              color="primary"
              label="Current Email"
              prepend="saas-email"
              :rules="[isValidEmail]"
            />
            <Input
              v-model="newEmail"
              dense
              filled
              lazy-rules
              type="text"
              color="primary"
              label="New Email"
              prepend="saas-email"
              :rules="[isValidEmail]"
            />
            <Button
              :disable="loading"
              type="submit"
              color="primary"
              text-color="white"
              class="q-mt-lg q-px-xl"
              :label="loading ? 'Processing...' : 'VERIFY YOUR EMAIL'"
            />
          </q-form>
        </template>
        <template v-if="step == 2">
          <h6 class="q-mt-none q-mb-lg text-bold">Verify your email address</h6>
          <p class="text-black">
            We emailed you a six-digit code to {{ newEmail }} <br />
            Enter the code below to confirm your email address
          </p>
          <q-form @submit="onOTPSubmit">
            <template v-for="(i, index) in 6" :key="i">
              <q-input
                :ref="
                        (el:any) => {
                          itemRefs[index] = el;
                        }
                      "
                v-model="otp[index]"
                maxlength="1"
                outlined
                :autofocus="i == 1 ? true : false"
                color="primary"
                class="otp q-ma-sm"
                input-class="text-center"
                style="width: 50px; padding: 0px; display: inline-block"
                @keyup="onChange($event, index)"
              />
            </template>
            <Button
              size="lg"
              type="submit"
              color="primary"
              :disable="loading"
              class="full-width q-mt-lg q-mb-md"
              :label="loading ? 'Processing...' : 'Submit'"
            />
            <small class="text-black">
              It may take a minute to receive your code. Haven’t received it?
              <Button
                flat
                :disable="isSending"
                color="primary"
                class="q-pa-xs"
                :label="isSending ? 'Processing...' : 'Resend a new code'"
                @click="onResendOTP"
              />
            </small>
          </q-form>
        </template>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { authStore } from "@/store/auth";
import { isValidEmail, isValidPassword } from "@/composables/global";
import AuthService from "../../UserManagement/helper/AuthService";

const AUTHSTORE = authStore();
const { notify } = useQuasar();

const otp = ref([]);
const step = ref(1);
let show = ref(false);
const loading = ref(false);
const isSending = ref(false);

const name = ref("");
const email = ref("");
const newEmail = ref("");

const password = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const itemRefs = ref<any>([]);

name.value = AUTHSTORE.name;
email.value = AUTHSTORE.email;

const onPasswordChange = async () => {
  let body = {
    newPassword: newPassword.value,
    currentPassword: password.value,
  };

  try {
    loading.value = true;
    await AuthService.changePassword(body);
    loading.value = false;

    notify({
      color: "green",
      message: "Password Changed Successfully!",
    });

    setTimeout(() => {
      AUTHSTORE.logout();
    }, 1000);
  } catch {
    loading.value = false;
  }
};

const onChangeEmail = async () => {
  let body = {
    newEmail: newEmail.value,
  };

  try {
    loading.value = true;
    await AuthService.changeEmail(body);
    step.value = 2;
    loading.value = false;
  } catch {
    loading.value = false;
  }
};

const onOTPSubmit = async () => {
  let OTP = otp.value.join();
  OTP = OTP.replaceAll(",", "");

  let body = {
    otp: Number(OTP),
    email: email.value,
    newEmail: newEmail.value,
  };

  try {
    loading.value = true;
    await AuthService.verifyOTP(body);

    show.value = false;
    loading.value = false;

    notify({
      color: "green",
      message: "Email Updated Successfully!",
    });

    setTimeout(() => {
      AUTHSTORE.logout();
    }, 1000);
  } catch {
    loading.value = false;
  }
};

const onClear = async () => {
  otp.value = [];
  step.value = 1;
  newEmail.value = "";
  password.value = "";
  loading.value = false;
  newPassword.value = "";
  confirmPassword.value = "";
};

const onResendOTP = async () => {
  let body = {
    email: email.value,
  };

  try {
    isSending.value = true;
    await AuthService.resendOTP(body);

    isSending.value = false;

    notify({
      color: "green",
      message: "OTP sent to new email again",
    });
  } catch {
    isSending.value = false;
  }
};

const passwordRule = (value: string) => {
  if (!value) return "Confirm password is required";
  else if (value !== newPassword.value) return "Password does not match";
  else return true;
};

const onChange = (e: any, i: number) => {
  if (e.keyCode === 8) itemRefs.value[i - 1] && itemRefs.value[i - 1].focus();
  else itemRefs.value[i + 1] && itemRefs.value[i + 1].focus();
};
</script>
