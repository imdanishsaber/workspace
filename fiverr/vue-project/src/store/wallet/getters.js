import { computed } from 'vue'
import { walletState } from './state'
import { defineStore } from 'pinia'

export const walletGetters = defineStore('wallet.getters', () => {
  const state = walletState()

  const camerasList = computed(() => state.camerasList)

  return {
    camerasList
  }
})
