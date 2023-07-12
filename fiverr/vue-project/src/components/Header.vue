<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('onOpen')"></v-app-bar-nav-icon>
    <v-alert v-if="getUserAddress" @click="openScan" dense text type="info">
      <img v-if="isEthereum" src="@/assets/eth.png" width="25px" />
      <img v-else src="@/assets/matic.png" width="25px" />
      {{ addrTruncation(getUserAddress) }}
    </v-alert>
    <v-spacer></v-spacer>
    <w3m-core-button></w3m-core-button>

    <v-btn
      v-if="getUserAddress"
      size="large"
      variant="flat"
      color="secondary"
      id="connectButton"
      @click="onDisconnect"
    >
      Disconnect
    </v-btn>
    <v-btn
      v-else
      size="large"
      variant="flat"
      color="secondary"
      id="connectButton"
      @click="$emit('onConnect')"
    >
      <img src="@/assets/metamask.webp" />
      Connect Wallet
    </v-btn>
  </v-app-bar>
</template>
<script setup>
import { ref } from 'vue'
import { walletStore } from '@/store/wallet'
const WALLETSTORE = walletStore()

const NETWORKS = ref({
  1: 'https://etherscan.io',
  11155111: 'https://sepolia.etherscan.io',
  137: 'https://polygonscan.com',
  80001: 'https://mumbai.polygonscan.com'
})

const onDisconnect = () => {
  WALLETSTORE.SET_WEB3(null)
  WALLETSTORE.SET_CHAIN_ID(null)
  WALLETSTORE.SET_USER_ADDRESS(null)
  WALLETSTORE.SET_GTX_INSTANCE(null)
  WALLETSTORE.SET_TOKEN_INSTANCE(null)
  WALLETSTORE.SET_LOCKER_INSTANCE(null)
}
const addrTruncation = (addr) => {
  return addr.slice(0, 6) + '. . . . . .' + addr.slice(addr.length - 6, addr.length)
}
const openScan = () => {
  let url = `${NETWORKS.value[WALLETSTORE.CHAIN_ID]}/address/${WALLETSTORE.getUserAddress}`
  window.open(url, '_blank')
}
</script>
<style>
.v-app-bar .v-alert {
  cursor: pointer;
  margin-bottom: 0;
}
.v-app-bar .v-alert__icon {
  display: none !important;
}
.v-app-bar .v-alert__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-app-bar .v-alert__content img {
  margin-right: 10px;
}
</style>
