<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('onOpen')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn
      large
      id="connectButton"
      color="secondary"
      @click="$emit('onConnect')"
      :disabled="!!getUserAddress"
    >
      <img src="@/assets/metamask.webp" />
      {{ getUserAddress ? addrTruncation(getUserAddress) : "Connect Wallet" }}
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
};
</script>
