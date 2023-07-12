import { computed } from 'vue'
import { walletState } from './state'
import { defineStore } from 'pinia'

export const walletGetters = defineStore('wallet.getters', () => {
  const state = walletState()

  const getWeb3 = computed(() => state.web3)
  const CHAIN_ID = computed(() => state.CHAIN_ID)
  const getUserAddress = computed(() => state.userAddress)
  const getGTXInstance = computed(() => state.GTXInstance)
  const getTOKENInstance = computed(() => state.TOKENInstance)
  const getLOCKERInstance = computed(() => state.LOCKERInstance)
  return {
    getWeb3,
    CHAIN_ID,
    getUserAddress,
    getGTXInstance,
    getTOKENInstance,
    getLOCKERInstance
  }
})
