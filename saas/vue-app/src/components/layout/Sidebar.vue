<template>
  <q-drawer
    side="left"
    :overlay="$q.screen.lt.md && !miniState ? true : false"
    v-model="drawer"
    show-if-above
    :mini="miniState"
    :width="230"
    :min-width="100"
    :breakpoint="0"
    class="bg-primary text-white sidebar"
  >
    <q-list>
      <q-item clickable @click="miniState = !miniState">
        <q-item-section avatar>
          <q-img
            v-if="!miniState"
            src="@/assets/logo.svg"
            style="height: 64px; width: 186px"
          />
          <Icon v-else name="saas-sidebar-menu" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list class="q-mt-xl">
      <template v-for="(item, i) in mainRoutes" :key="i">
        <q-item clickable :to="item.path">
          <q-item-section class="q-py-sm" avatar>
            <Icon
              class="custom-icon"
              :name="
                'saas-sidebar-' + item.name?.toString().toLocaleLowerCase()
              "
            >
            </Icon>
            <q-tooltip
              v-if="miniState"
              class="bg-primary"
              :delay="1000"
              :offset="[30, 20]"
              anchor="center right"
              transition-show="scale"
              transition-hide="scale"
            >
              {{ item.name }}
            </q-tooltip>
          </q-item-section>
          <q-item-section class="items-start">{{ item.name }}</q-item-section>
        </q-item>
      </template>
      <q-item clickable @click="logout">
        <q-item-section avatar>
          <Icon name="saas-sidebar-logout" />
        </q-item-section>
        <q-item-section>Logout</q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item
        clickable
        class="justify-center absolute-bottom"
        @click="miniState = !miniState"
      >
        <q-item-section avatar>
          <Icon size="lg" name="saas-sidebar-more" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "@/store/auth";
const router = useRouter();
const AUTHSTORE = authStore();

let drawer = ref(false);
let miniState = ref(true);
let mainRoutes = router.options.routes[1].children;

const logout = () => {
  AUTHSTORE.logout();
};
</script>

<style lang="scss">
.sidebar {
  .q-router-link--exact-active {
    .custom-icon {
      color: #3de4fa !important;
    }
  }
}
</style>
