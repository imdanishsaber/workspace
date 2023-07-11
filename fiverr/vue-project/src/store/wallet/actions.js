import { walletState } from './state'
import { defineStore } from 'pinia'

export const walletActions = defineStore('wallet.actions', () => {
  const state = walletState()

  async function setCamerasList(payload) {
    state.camerasList = payload
  }

  return {
    setCamerasList
  }
})
