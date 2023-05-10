<template>
  <div
    class="flex justify-around q-gutter-xl"
    :style="$q.screen.lt.sm ? 'flex-wrap: wrap' : 'flex-wrap: nowrap'"
  >
    <q-card
      class="text-center"
      :style="$q.screen.lt.sm ? 'max-width: 100%' : 'max-width: 500px'"
    >
      <q-card-section>
        <h5 class="q-mt-md">Upload Image or Video</h5>
        <label for="image">
          <img class="thumbnail-upload" src="@/assets/upload.svg" />
        </label>
        <div v-show="image" class="flex q-mt-lg">
          <img v-show="imageSrc" class="thumbnail" :src="imageSrc" />
          <canvas v-show="!imageSrc" id="prevImgCanvas"></canvas>
          <div style="width: calc(100% - 102px)">
            <q-file
              v-model="image"
              dense
              for="image"
              class="upload"
              @update:model-value="onSelect($event, 'image')"
            />
            <div>
              <div class="flex justify-end">
                <small>100%</small>
              </div>
              <q-linear-progress size="10px" :value="1" />
              <div class="flex">
                <small class="text-grey-5"
                  >{{ image && image.type }} • {{ image && image.size }} B
                </small>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <Button
          v-if="image"
          outline
          color="primary"
          label="Clear"
          class="q-ma-sm q-px-xl"
          @click="onClear('image')"
        />
        <Button
          color="primary"
          class="q-ma-sm q-px-xl"
          :disable="!image || loadimage"
          :label="loadimage ? 'Processing...' : 'Upload'"
          @click="onSubmit('image')"
        />
      </q-card-section>
    </q-card>
    <q-card
      class="text-center"
      :style="$q.screen.lt.sm ? 'max-width: 100%' : 'max-width: 500px'"
    >
      <q-card-section>
        <h5 class="q-mt-md">Upload Floor Map</h5>
        <label for="floorMap">
          <img class="thumbnail-upload" src="@/assets/upload.svg" />
        </label>
        <div v-show="floorMap" class="flex q-mt-lg">
          <img class="thumbnail" :src="floorMapSrc" />
          <div style="width: calc(100% - 102px)">
            <q-file
              v-model="floorMap"
              dense
              accept="image/*"
              for="floorMap"
              class="upload"
              @rejected="onReject"
              @update:model-value="onSelect($event, 'floorMap')"
            />
            <div>
              <div class="flex justify-end">
                <small>100%</small>
              </div>
              <q-linear-progress size="10px" :value="1" />
              <div class="flex">
                <small class="text-grey-5"
                  >{{ floorMap && floorMap.type }} •
                  {{ floorMap && floorMap.size }} B
                </small>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <Button
          v-if="floorMap"
          outline
          color="primary"
          label="Clear"
          class="q-ma-sm q-px-xl"
          @click="onClear('floorMap')"
        />
        <Button
          color="primary"
          class="q-ma-sm q-px-xl"
          :disable="!floorMap || loadfloorMap"
          :label="loadfloorMap ? 'Processing...' : 'Upload'"
          @click="onSubmit('floorMap')"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import ConfigService from "../helper/ConfigService";
const { notify } = useQuasar();

const loadimage = ref(false);
const loadfloorMap = ref(false);
let image = ref<File>();
let imageSrc = ref(undefined);
let floorMap = ref<File>();
let floorMapSrc = ref(undefined);

const onSelect = (file: any, name: string) => {
  imageSrc.value = undefined;
  floorMapSrc.value = undefined;
  var filetypes = file["type"].split("/");
  var filetype = filetypes[0];
  if (filetype == "image") {
    var reader = new FileReader();

    reader.onload = (e: any) => {
      if (name === "image") imageSrc.value = e.target.result;
      else floorMapSrc.value = e.target.result;
    };

    reader.readAsDataURL(file);
  } else if (filetype == "video") {
    getVideoThumbnail(file);
  }
};

const onReject = () => {
  notify({
    color: "red-9",
    message: "Only image file type is allowd in floorplan",
  });
};

const getVideoThumbnail = function (file: any) {
  var video = document.createElement("video");
  var canvas = document.getElementById("prevImgCanvas");
  canvas.width = 90;
  canvas.height = 70;

  video.addEventListener(
    "loadeddata",
    () => {
      if (!isNaN(video.duration))
        video.currentTime =
          (Math.round(Math.random() * video.duration * 1000) + 1) / 1000;
    },
    false
  );

  video.addEventListener(
    "seeked",
    () => {
      var context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    },
    false
  );

  video.src = URL.createObjectURL(file);
};

const onClear = (name: string) => {
  if (name === "image") {
    image.value = undefined;
    imageSrc.value = undefined;
  } else {
    floorMap.value = undefined;
    floorMapSrc.value = undefined;
  }
};

const onSubmit = async (name: string) => {
  try {
    let data = new FormData();
    if (name === "image") {
      loadimage.value = true;
      data.append("file", image.value!);
      data.append("floorMap", "false");
    } else {
      loadfloorMap.value = true;
      data.append("file", floorMap.value!);
      data.append("floorMap", "true");
    }

    await ConfigService.upload(data);
    name === "image" ? (loadimage.value = false) : (loadfloorMap.value = false);
    notify({
      color: "green",
      message: "File uploaded successfully",
    });
    onClear(name);
  } catch {
    name === "image" ? (loadimage.value = false) : (loadfloorMap.value = false);
  }
};
</script>
<style>
.upload.q-file .q-field__native {
  font-size: 15px;
  font-weight: bolder;
}
.q-field--auto-height.q-field--dense .q-field__control,
.q-field--auto-height.q-field--dense .q-field__native {
  height: 27px;
  min-height: 27px;
}
.thumbnail-upload {
  max-width: 100%;
  cursor: pointer;
}
.thumbnail,
#prevImgCanvas {
  height: 70px;
  width: 90px;
  margin-right: 12px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 10%);
}
</style>
