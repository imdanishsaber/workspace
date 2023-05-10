<template>
  <div class="row q-col-gutter-xl">
    <template v-for="(item, i) in camerasList" :key="i">
      <div v-if="!isFull" class="col-12 col-sm-6">
        <q-card>
          <div class="q-pa-md">
            <div class="flex q-mb-sm">
              <strong class="text-black">{{ item.camera_id }}</strong>
              <q-space />
              <Button
                size="sm"
                color="grey"
                round
                flat
                dense
                icon="saas-enlarge"
                @click="(selectedId = item.camera_id), (isFull = !isFull)"
              />
            </div>
            <LiveStreamView
              :frames="frames"
              :cameraId="item.camera_id"
            ></LiveStreamView>
          </div>
        </q-card>
      </div>
    </template>
  </div>
  <q-dialog v-model="isFull" full-width>
    <q-card class="q-px-xl" style="border-radius: 10px">
      <Button
        size="sm"
        color="grey"
        round
        flat
        dense
        class="absolute-right"
        icon="saas-reduce"
        style="right: 10px; top: 10px; bottom: auto"
        @click="isFull = !isFull"
      />
      <q-card-section class="text-center">
        <div class="row justify-center">
          <div class="col-10">
            <LiveStreamView
              :frames="frames"
              :cameraId="selectedId"
            ></LiveStreamView>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, computed } from "vue";

import SocketioService from "@/socket";
import LiveStreamView from "./LiveStreamView.vue";

import { generalStore } from "@/store/general";

const GENERALSTORE = generalStore();

let isFull = ref(false);
let selectedId = ref("");
let frames = ref<any>([]);

onBeforeMount(async () => {
  let socket = SocketioService.socketInstance();

  socket.on("detections", (data: any) => {
    frames.value = data.data;
  });
});

const camerasList = computed(() => {
  return GENERALSTORE.camerasList;
});
</script>
