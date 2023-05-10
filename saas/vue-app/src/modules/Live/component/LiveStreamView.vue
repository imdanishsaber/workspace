<template>
  <div ref="frameContainer" class="frameContainer position-relative">
    <Spinner
      v-if="isFrameLoading"
      color="primary"
      size="2.5em"
      height="300px"
    />
    <v-stage v-else :config="stageConfigs">
      <v-layer>
        <v-image :config="{ image: imageConfigs }" />
        <template v-for="(detection, i) in boundingBoxes" :key="i">
          <!-- object class box -->
          <v-rect
            ref="rectRef"
            :config="{
              x: detection.top,
              y: detection.left - 20,
              width: detection.height,
              height: 20,
              fill: '#00ff0080',
              stroke: '#00ff0080',
              strokeWidth: 0,
            }"
          />
          <!-- object class text -->
          <v-text
            :config="{
              x: detection.top + 4,
              y: detection.left - 16,
              text: detection.object_id + ' - ' + detection.clazz,
              fill: 'black',
              fontSize: 13,
              textOverflow: 'ellipsis',
              fontWeight: 'bolder',
            }"
          />
          <!-- actuall bouding box -->
          <v-rect
            ref="rectRef"
            :config="{
              x: detection.top,
              y: detection.left,
              width: detection.height,
              height: detection.width,
              stroke: '#00ff00',
              strokeWidth: 2,
            }"
            @click="toggleTooltip($event, 'show', detection)"
          />
          <!-- corner boxes -->
          <v-rect
            v-for="box in 4"
            ref="rectRef"
            :key="box"
            :config="getBoxDimensions(box, detection)"
          />
        </template>
      </v-layer>
    </v-stage>
    <div
      v-show="isShown"
      class="live-tooltip"
      :id="'q-tooltip' + props.cameraId"
    >
      <template v-if="tooltipData">
        <div class="flex justify-between items-center">
          <div></div>
          <b>{{ capitalize(tooltipData.clazz) }}</b>
          <q-btn
            flat
            size="xs"
            round
            color="black"
            icon="close"
            @click="toggleTooltip($event, 'hide', null)"
            class="cursor-pointer"
          />
        </div>
        <q-list>
          <q-item>
            <q-item-section>Object Class</q-item-section>
            <q-item-section side>{{ tooltipData.clazz }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>Object ID</q-item-section>
            <q-item-section side>{{ tooltipData.object_id }}</q-item-section>
          </q-item>
        </q-list>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { capitalize } from "@/composables/global";

const props = defineProps<{
  frames: any;
  cameraId: string;
}>();

let stageConfigs = ref({
  width: 400,
  height: 400,
});

let frameContainer = ref<any>(null);

let imageConfigs = ref<any>(null);
let boundingBoxes = ref<any>([]);
let isFrameLoading = ref(true);
let isShown = ref(false);

let tooltipData = ref<any>(null);

const toggleTooltip = (event: any, type: string, data: any) => {
  if (type == "show") {
    tooltipData.value = data;
    isShown.value = true;
    let tooltip = document.getElementById("q-tooltip" + props.cameraId);
    tooltip ? (tooltip.style.position = "fixed") : "";
    tooltip ? (tooltip.style.top = event.evt.clientY + 20 + "px") : "";
    tooltip ? (tooltip.style.left = event.evt.clientX + 20 + "px") : "";
  } else {
    isShown.value = false;
    tooltipData.value = null;
  }
};

const getBoxDimensions = (box: number, detection: any) => {
  let config = {
    x: 0,
    y: 0,
    width: "6",
    height: "6",
    stroke: "#00ff00",
    fill: "#00ff00",
    strokeWidth: 2,
  };
  switch (box) {
    case 1:
      config.width = "0";
      config.height = "0";
      config.x = detection.top;
      config.y = detection.left;
      break;
    case 2:
      config.width = "0";
      config.height = "0";
      config.x = detection.top + detection.height - 4;
      config.y = detection.left - 4;
      break;
    case 3:
      config.x = detection.top - 4;
      config.y = detection.left + detection.width - 4;
      break;
    case 4:
      config.x = detection.top + detection.height - 4;
      config.y = detection.left + detection.width - 4;
      break;
  }
  return config;
};

const calculateNewHeight = (width: any, height: any, newWidth: any) => {
  let newHeight = (height / width) * newWidth;
  return newHeight;
};

watch(
  () => props.frames,
  (newValue) => {
    if (!newValue || !newValue.length) return;
    let frame = newValue.find((f: any) => props.cameraId === f.camera_id);
    if (!frame) return;

    const image = new window.Image();
    image.src = frame.img_path;

    image.onload = () => {
      let originalWidth = image.width;
      let originalHeight = image.height;

      let newWidth = frameContainer.value.clientWidth;
      let newHeight = calculateNewHeight(image.width, image.height, newWidth);

      image.width = newWidth;
      image.height = newHeight;

      imageConfigs.value = image;

      stageConfigs.value.width = image.width;
      stageConfigs.value.height = image.height;

      const ratioWidth = newWidth / originalWidth;
      const ratioHeight = newHeight / originalHeight;

      frame.detections.final = [
        ...frame.detections.new,
        ...frame.detections.updated,
      ];

      frame.detections.final.forEach((d: any) => {
        d.top = d.top * ratioHeight;
        d.left = d.left * ratioWidth;
        d.right = d.right * ratioWidth;
        d.bottom = d.bottom * ratioHeight;
        d.width = Number(d.right) - Number(d.left);
        d.height = Number(d.bottom) - Number(d.top);
      });

      isFrameLoading.value = false;
      boundingBoxes.value = frame.detections.updated;
    };
  }
);
</script>
