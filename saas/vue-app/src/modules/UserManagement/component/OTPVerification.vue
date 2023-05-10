<template>
  <q-page class="bg">
    <q-img class="absolute-top q-ma-lg" width="200px" src="@/assets/logo.svg" />
    <div class="row justify-center window-height">
      <div class="col-4">
        <div class="flex justify-center items-center window-height">
          <q-card v-if="step == 1" class="q-pa-lg">
            <q-card-section class="text-center">
              <h6 class="q-mt-none q-mb-lg text-bold">
                Verify your email address
              </h6>
              <p class="text-black">
                We emailed you a six-digit code to {{ email }} <br />
                Enter the code below to confirm your email address
              </p>
              <q-form @submit="onSubmit" style="min-width: 510px">
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
                  :label="loading ? 'Processing...' : 'Submit'"
                  color="primary"
                  class="full-width q-mt-lg q-mb-md"
                  :disable="loading"
                />
                <small class="text-black">
                  It may take a minute to receive your code. Haven’t received
                  it?
                  <Button
                    flat
                    color="primary"
                    class="q-pa-xs"
                    :disable="isSending"
                    @click="onResendOTP"
                    :label="isSending ? 'Processing...' : 'Resend a new code'"
                  />
                </small>
              </q-form>
            </q-card-section>
          </q-card>
          <q-card v-else class="q-pa-lg" style="width: 100%">
            <q-card-section class="text-center">
              <Icon name="saas-check" size="xl" />
              <h5 class="q-my-lg">Email verification successful</h5>
              <q-form @submit="onSubmit">
                <Button
                  size="md"
                  label="Continue"
                  color="primary"
                  class="q-px-xl"
                  @click="router.push({ name: 'Login' })"
                />
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="absolute-bottom q-ma-lg">
      <p class="text-body1 q-my-none text-white">
        2022 © <b class="text-white">Darvis</b> Inc
      </p>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AuthService from "../helper/AuthService";

const router = useRouter();
const { notify } = useQuasar();

const props = defineProps({
  email: {
    type: String,
    default: "",
  },
});

const otp = ref([]);
const step = ref(1);
const isSending = ref(false);
const loading = ref(false);
const itemRefs = ref<any>([]);

const onSubmit = async () => {
  let OTP = otp.value.join();
  OTP = OTP.replaceAll(",", "");

  let body = {
    otp: Number(OTP),
    email: props.email,
  };

  try {
    loading.value = true;
    await AuthService.verifyOTP(body);

    step.value = 2;
    loading.value = false;
  } catch {
    loading.value = false;
  }
};

const onResendOTP = async () => {
  let body = {
    email: props.email,
  };

  try {
    isSending.value = true;
    await AuthService.resendOTP(body);
    isSending.value = false;
    notify({
      color: "green",
      message: "OTP resent to your email.",
    });
  } catch {
    isSending.value = false;
  }
};
const onChange = (e: any, i: number) => {
  if (e.keyCode === 8) itemRefs.value[i - 1] && itemRefs.value[i - 1].focus();
  else itemRefs.value[i + 1] && itemRefs.value[i + 1].focus();
};
</script>

<style scoped>
.bg {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../../assets/background.svg");
}
</style>
