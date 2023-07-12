<template>
  <v-row class="anim" style="--delay: 0s">
    <div class="col-12">
      <div class="mb-10">
        <b>
          Link Token Balance:
          <span class="text-red">{{ tokenBalance }}</span>
        </b>
      </div>
      <v-text-field
        density="compact"
        variant="outlined"
        v-model.number="tokenAmount"
        label="Minting Amount"
        placeholder="Token to mint"
      ></v-text-field>
      <div class="approve-section">
        <v-btn
          size="large"
          variant="flat"
          color="primary"
          class="mr-5"
          @click="onTokenApprove"
          :disabled="!isEthereum || isLoading || isApproved"
        >
          {{ isApproved ? `Already Approved: ${tokenAllowance}` : 'Approve' }}
        </v-btn>
        <v-btn
          size="large"
          variant="flat"
          color="secondary"
          class="mr-5"
          @click="onMint"
          :disabled="!isEthereum || isLoading || !isApproved"
        >
          Mint Token
        </v-btn>
      </div>
      <div v-if="hash" class="mt-10 text-center">
        <v-alert dense text type="success" style="display: inline-block; margin-bottom: 0">
          Transaction is submitted to network! &#160;
          <strong class="cursor-pointer" @click="openScan">
            View on
            {{ isEthereum ? 'Etherscan' : 'Polygonscan' }}
          </strong>
        </v-alert>
      </div>
    </div>
  </v-row>
</template>
<script setup>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import config from '@/config/addresses'
import { walletStore } from '@/store/wallet'
import { ref, computed, onMounted } from 'vue'

const WALLETSTORE = walletStore()
const GTX_ADDRESS = ref(config.GTX_ADDRESS)

const hash = ref(null)
const tokenAmount = ref(0)
const isLoading = ref(false)
const isApproved = ref(false)
const tokenBalance = ref(0)
const tokenAllowance = ref(0)

const NETWORKS = ref({
  1: 'https://etherscan.io',
  11155111: 'https://sepolia.etherscan.io',
  137: 'https://polygonscan.com',
  80001: 'https://mumbai.polygonscan.com'
})

onMounted(async () => {
  if (WALLETSTORE.getUserAddress && isEthereum.value) {
    readValues()
  }
})

const readValues = async () => {
  Promise.all([
    WALLETSTORE.getTOKENInstance.methods.balanceOf(WALLETSTORE.getUserAddress).call(),
    WALLETSTORE.getTOKENInstance.methods
      .allowance(WALLETSTORE.getUserAddress, GTX_ADDRESS.value)
      .call()
  ]).then(([tokenBalance, tokenAllowance]) => {
    console.log('tokenBalance:', tokenBalance)
    console.log('tokenAllowance:', tokenAllowance)
    tokenBalance.value = humanized(tokenBalance, 2)
    isApproved.value = !!Number(tokenAllowance)
    tokenAllowance.value = humanized(tokenAllowance, 2)
  })
}

const onTokenApprove = async () => {
  hash.value = null
  if (!WALLETSTORE.getUserAddress) {
    toast.success('Connect your wallet first')
    return
  } else if (!Number(this.tokenAmount)) {
    toast.success('Enter Minting Amount')
    return
  }

  isLoading.value = true
  WALLETSTORE.getTOKENInstance.methods
    .approve(GTX_ADDRESS.value, '1000000000000000000000000000')
    .send({
      from: WALLETSTORE.getUserAddress
    })
    .on('transactionHash', (hash) => {
      hash.value = hash
      isApproved.value = true
      console.log('Transaction Hash: ', hash)
      toast.success('Transaction is submitted to the network')
    })
    .on('receipt', (receipt) => {
      readValues()
      isApproved.value = true
      isLoading.value = false
      console.log('Receipt: ', receipt)
      toast.success('Transaction completed successfully')
    })
    .on('error', (error, receipt) => {
      isApproved.value = false
      isLoading.value = false
      console.log('Error receipt: ', receipt)
      toast.success('Transaction rejected')
    })
}

const onMint = async () => {
  hash.value = null
  if (!WALLETSTORE.getUserAddress) {
    toast.success('Connect your wallet first')
    return
  } else if (!Number(this.tokenAmount)) {
    toast.success('Enter Minting Amount')
    return
  }

  let tokenAmount = WALLETSTORE.getWeb3.utils.toWei(this.tokenAmount.toString(), 'ether')
  isLoading.value = true
  WALLETSTORE.getGTXInstance.methods
    .mintWithOLDCrv(tokenAmount)
    .send({
      from: WALLETSTORE.getUserAddress
    })
    .on('transactionHash', (hash) => {
      hash.value = hash
      console.log('Transaction Hash: ', hash)
      toast.success('Transaction is submitted to the network')
    })
    .on('receipt', (receipt) => {
      readValues()
      isLoading.value = false
      console.log('Receipt: ', receipt)
      toast.success('Transaction completed successfully')
    })
    .on('error', (error, receipt) => {
      isLoading.value = false
      console.log('Error receipt: ', receipt)
      toast.success('Transaction rejected')
    })
}

const openScan = async () => {
  let url = `${this.NETWORKS[WALLETSTORE.CHAIN_ID]}/tx/${hash.value}`
  window.open(url, '_blank')
}

const humanized = async (number, fix) => {
  {
    return Number(WALLETSTORE.getWeb3.utils.fromWei(number.toString(), 'ether')).toFixed(
      number == 0 ? 2 : fix
    )
  }

  const isEthereum = computed(() => {
    if (WALLETSTORE.getUserAddress) {
      if (WALLETSTORE.CHAIN_ID === 1 || WALLETSTORE.CHAIN_ID === 11155111) return true
      else return false
    } else {
      return false
    }
  })

  // watch: {
  //   CHAIN_ID() {
  //     if (isEthereum.value) {
  //       readValues()
  //     } else {
  //       this.tokenAmount = 0
  //       isLoading.value = false
  //       isApproved.value = false
  //       this.tokenBalance = 0
  //       this.tokenAllowance = 0
  //     }
  //   },
  //   async getUserAddress() {
  //     if (isEthereum.value && WALLETSTORE.getUserAddress) {
  //       readValues()
  //     } else {
  //       this.tokenAmount = 0
  //       isLoading.value = false
  //       isApproved.value = false
  //       this.tokenBalance = 0
  //       this.tokenAllowance = 0
  //     }
  //   }
  // }
}
</script>
