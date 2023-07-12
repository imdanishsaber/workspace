import { walletState } from './state'
import { defineStore } from 'pinia'

export const walletActions = defineStore('wallet.actions', () => {
  const state = walletState()

  async function SET_WEB3(payload) {
    state.web3 = payload
  }
  async function SET_CHAIN_ID(payload) {
    state.CHAIN_ID = payload
  }
  async function SET_USER_ADDRESS(payload) {
    state.userAddress = payload
  }
  async function SET_GTX_INSTANCE(payload) {
    state.GTXInstance = payload
  }
  async function SET_TOKEN_INSTANCE(payload) {
    state.TOKENInstance = payload
  }
  async function SET_LOCKER_INSTANCE(payload) {
    state.LOCKERInstance = payload
  }
  return {
    SET_WEB3,
    SET_CHAIN_ID,
    SET_USER_ADDRESS,
    SET_GTX_INSTANCE,
    SET_TOKEN_INSTANCE,
    SET_LOCKER_INSTANCE,
  }
})
