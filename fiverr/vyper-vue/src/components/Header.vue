<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('onOpen')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn
      large
      id="connectButton"
      color="secondary"
      @click="$emit('onConnect')"
      :readonly="!!getUserAddress"
    >
      <img src="@/assets/metamask.webp" />
      {{ getUserAddress ? addrTruncation(getUserAddress) : "Connect Wallet" }}
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  props: ["isOpen"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  comouted: {},
};
</script>
<style>
#connectButton img {
  width: 25px;
  padding: 2px;
  margin-right: 5px;
  background: white;
  border-radius: 20px;
}
</style>
