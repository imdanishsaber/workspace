<template>
  <v-app>
    <Sidebar @onClose="onClose" :isOpen="isOpen"></Sidebar>
    <Header @onOpen="isOpen = !isOpen" @onConnect="onConnect"></Header>
    <v-main>
      <v-row class="start">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <router-view />
            </div>
          </div>
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Web3 from 'web3'
import abis from '@/config/abis.json'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

import { EthereumProvider } from '@walletconnect/ethereum-provider'
import config from '@/config/addresses'
import { walletStore } from '@/store/wallet'

export default {
  name: 'App',
  components: { Sidebar, Header },
  data() {
    return {
      isOpen: true,
      NETWORKS: {
        1: 'https://etherscan.io',
        11155111: 'https://sepolia.etherscan.io',
        137: 'https://polygonscan.com',
        80001: 'https://mumbai.polygonscan.com'
      },
      GTX_ADDRESS: config.GTX_ADDRESS,
      TOKEN_ADDRESS: config.TOKEN_ADDRESS,
      LOCKER_ADDRESS: config.LOCKER_ADDRESS,
      TOKEN_POLYGON_ADDRESS: config.TOKEN_POLYGON_ADDRESS
    }
  },
  methods: {
    onConnect() {
      const WALLETSTORE = walletStore()
      WALLETSTORE.SET_WEB3(web3)
      WALLETSTORE.SET_CHAIN_ID(chainId)
      WALLETSTORE.SET_USER_ADDRESS(accounts[0])
    },
    // async onConnect() {
    //   try {
    //     const provider = await EthereumProvider.init({
    //       chains: [1],
    //       showQrModal: true,
    //       projectId: '2aca272d18deb10ff748260da5f78bfd'
    //     })
    //     await provider.connect()
    //     console.log('provider:', provider)
    //     this.onProvider(provider)
    //     provider.on('accountsChanged', (accounts) => {
    //       console.log(accounts)
    //       this.onProvider(provider)
    //     })
    //     provider.on('chainChanged', (chainId) => {
    //       console.log(chainId)
    //       this.onProvider(provider)
    //     })
    //   } catch (e) {
    //     console.log('Could not get a wallet connection', e)
    //     return
    //   }
    // },
    async onProvider(provider) {
      let web3 = new Web3(provider)
      let accounts = await web3.eth.getAccounts()
      let chainId = await web3.eth.getChainId()
      let CHAIN_IDs = Object.keys(this.NETWORKS)
      if (!CHAIN_IDs.includes(chainId.toString())) {
        this.$toasted.show(`Only Ethereum or Polygon Network Supported`)
        return
      }

      const WALLETSTORE = walletStore()
      WALLETSTORE.SET_WEB3(web3)
      WALLETSTORE.SET_CHAIN_ID(chainId)
      WALLETSTORE.SET_USER_ADDRESS(accounts[0])

      if (this.isEthereum) {
        let GTX_INSTANCE = new web3.eth.Contract(abis.GTX_ABI, this.GTX_ADDRESS)
        let TOKEN_INSTANCE = new web3.eth.Contract(abis.TOKEN_ABI, this.TOKEN_ADDRESS)
        let LOCKER_INSTANCE = new web3.eth.Contract(abis.LOCKER_ABI, this.LOCKER_ADDRESS)
        WALLETSTORE.SET_GTX_INSTANCE(GTX_INSTANCE)
        WALLETSTORE.SET_TOKEN_INSTANCE(TOKEN_INSTANCE)
        WALLETSTORE.SET_LOCKER_INSTANCE(LOCKER_INSTANCE)
      } else {
        let TOKEN_INSTANCE = new web3.eth.Contract(abis.TOKEN_ABI, this.TOKEN_POLYGON_ADDRESS)
        WALLETSTORE.SET_GTX_INSTANCE(null)
        WALLETSTORE.SET_TOKEN_INSTANCE(TOKEN_INSTANCE)
        WALLETSTORE.SET_LOCKER_INSTANCE(null)
      }
    },

    onClose(isClose) {
      if (!isClose) this.isOpen = false
    }
  },
  watch: {
    async getUserAddress() {
      if (!this.getUserAddress) {
        provider = null
      }
    }
  }
}
</script>
