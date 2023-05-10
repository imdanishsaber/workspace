<template>
  <div class="row">
    <div class="col-12">
      <div class="float-right">
        <Button
          color="primary"
          label="REFRESH RELAY"
          icon-right="saas-refresh"
          @click="refreshCamerasList"
        />
        <Button
          color="primary"
          class="q-ml-md q-px-sm"
          icon-right="saas-question"
        />
      </div>
    </div>
    <div class="col-12 q-mt-lg">
      <q-card class="q-pa-md">
        <div class="row">
          <div class="col-12">
            <q-table
              row-key="name"
              :rows="camerasList"
              :columns="columns"
              :loading="isLoading"
            >
              <template #loading>
                <Spinner size="2.2rem" height="300px" />
              </template>
              <template #no-data>
                <NoData
                  v-if="!isLoading"
                  size="2rem"
                  icon="error"
                  height="300px"
                />
              </template>
              <template #body="props">
                <q-tr :props="props">
                  <q-td key="camera_id" :props="props">
                    <b>
                      {{ props.row.camera_id }}
                    </b>
                  </q-td>
                  <q-td key="frame" :props="props">
                    <img
                      class="rounded cursor-pointer"
                      :src="
                        'data:image/png;base64,' + props.row.cameraThumbnail
                      "
                      style="width: 130px; border-radius: 6px"
                    />
                  </q-td>
                  <q-td key="cameraIP" :props="props">
                    {{ props.row.cameraIP }}
                  </q-td>
                  <q-td key="created_timestamp" :props="props">
                    {{ props.row.created_timestamp }}
                  </q-td>
                  <q-td key="connection_time" :props="props">
                    {{ props.row.connection_time }}
                  </q-td>
                  <q-td key="action" :props="props">
                    <Button
                      class="q-mx-xs"
                      :label="props.row.isConnecting ? 'Loading...' : 'Connect'"
                      no-caps
                      :disabled="
                        props.row.isConnecting || props.row.isConnected
                      "
                      :color="props.row.isConnected ? 'grey' : 'primary'"
                      @click="onConnect(props.row)"
                    />
                    <Button
                      class="q-mx-xs"
                      :label="
                        props.row.isDisconnecting ? 'Loading...' : 'Disconnect'
                      "
                      no-caps
                      :disabled="
                        props.row.isDisconnecting || !props.row.isConnected
                      "
                      :color="props.row.isConnected ? 'primary' : 'grey'"
                      @click="onDisconnect(props.row)"
                    />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import ConfigService from "../helper/ConfigService";
import { authStore } from "@/store/auth";
import { generalStore } from "@/store/general";
import NoData from "../../../components/general/NoData.vue";

const { notify } = useQuasar();
const AUTHSTORE = authStore();
const GENERALSTORE = generalStore();

const isLoading = ref(false);

const columns = ref([
  {
    name: "camera_id",
    label: "Camera Id",
    field: "camera_id",
    align: "left",
    required: true,
    sortable: true,
  },
  {
    name: "frame",
    label: "Frame",
    field: "frame",
    align: "left",
    required: true,
    sortable: true,
  },
  {
    name: "cameraIP",
    label: "IP Address",
    field: "cameraIP",
    align: "left",
    required: true,
    sortable: true,
  },
  {
    name: "created_timestamp",
    label: "Created At",
    field: "created_timestamp",
    align: "left",
    required: true,
    sortable: true,
  },
  {
    name: "connection_time",
    label: "Connection Time",
    field: "connection_time",
    align: "left",
    required: true,
    sortable: true,
  },
  {
    name: "action",
    label: "Action",
    field: "action",
    align: "right",
    required: true,
    sortable: true,
  },
]);

const camerasList = computed(() => {
  let list = GENERALSTORE.camerasList;
  list.forEach((item) => {
    item.isConnecting = false;
    item.isDisconnecting = false;
  });
  return GENERALSTORE.camerasList;
});

const refreshCamerasList = async () => {
  isLoading.value = true;
  await GENERALSTORE.setCamerasList();
  isLoading.value = false;
};

const onConnect = async (item: any) => {
  item.isConnecting = true;

  let serverIp = AUTHSTORE.baseURL;
  let body = {
    cameraIp: item.cameraIP,
    serverIp: serverIp,
  };

  let response = await ConfigService.connect(body);
  item.isConnecting = false;
  localStorage.setItem(item.cameraIP, response.data.relayPort);
  updateStatus(item.cameraIP);
  notify({
    color: "green",
    message: "Camera Connected Successfully",
  });
};

const onDisconnect = async (item: any) => {
  item.isDisconnecting = true;

  let body = {
    ip: item.cameraIP,
    port: localStorage.getItem(item.cameraIP),
  };

  await ConfigService.disConnect(body);
  item.isDisconnecting = false;
  localStorage.removeItem(item.cameraIP);
  updateStatus(item.cameraIP);

  notify({
    color: "green",
    message: "Camera disconnected Successfully",
  });
};

const updateStatus = (cameraIP: string) => {
  camerasList.value.find((camera: any) => {
    if (cameraIP == camera.cameraIP) {
      if (localStorage.getItem(cameraIP)) camera.isConnected = true;
      else camera.isConnected = false;
    }
  });
};
</script>
