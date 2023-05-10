<template>
  <div>
    <q-tabs
      v-model="tab"
      no-caps
      active-color="primary"
      class="justify-content-left q-mb-lg"
    >
      <q-tab name="photo" label="Photo" />
      <q-tab name="video" label="Video" />
      <q-tab name="inferences" label="Inferences" />
      <q-tab name="heatmap" label="Heatmap" />
      <q-tab name="metadata" label="Metadata" />
    </q-tabs>
    <div class="row q-col-gutter-xl">
      <template v-if="isLoading">
        <div class="col-12">
          <Spinner size="2.2rem" height="400px" />
        </div>
      </template>
      <template v-else-if="results.length">
        <div
          v-for="i in results"
          :key="i"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card>
            <div class="q-pa-md position-relative">
              <div
                class="absolute-top"
                style="z-index: 1000; top: 22px; left: 22px"
              >
                <q-btn size="sm" color="primary">
                  <Icon class="q-mr-sm" size="sm" name="saas-more" />
                  12
                </q-btn>
              </div>
              <q-img src="@/assets/cam_3.png" />
              <div class="flex q-mt-md">
                <strong class="text-black">
                  <span class="text-grey">#1:</span> ABC_Annotated</strong
                >
                <q-space />
                <Button
                  size="sm"
                  color="grey"
                  round
                  flat
                  dense
                  icon="saas-download"
                />
              </div>
            </div>
          </q-card>
        </div>
      </template>
      <template v-else>
        <div class="col-12">
          <NoData size="2rem" icon="error" height="400px" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const tab = ref("photo");
const results = ref([]);
const isLoading = ref(false);
</script>
