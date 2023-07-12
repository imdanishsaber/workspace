<template>
  <v-row class="anim" style="--delay: 0s">
    <div class="col-12 col-sm-6">
      <div class="d-flex align-center">
        <div class="mr-4">
          <img class="c-icon" src="@/assets/eth.png" />
        </div>
        <div>
          <b>GTX Balance</b> <br />
          <span class="text-red">{{ GTXBalance }}</span>
        </div>
      </div>
    </div>
    <div v-if="isEthereum" class="col-12 col-sm-6">
      <div class="d-flex align-center">
        <div class="mr-4">
          <img class="c-icon" src="@/assets/btc.png" />
        </div>
        <div>
          <b>veGTX Balance</b> <br />
          <span class="text-red">{{ veGTXBalance }}</span>
        </div>
      </div>
    </div>
    <!-- <div v-if="datasets.length" class="col-12 mt-10">
      <h3 class="mb-5">Bitcoin Last 24 Hours Price</h3>
      <LineChart :labels="labels" :datasets="datasets" />
    </div>
    <div v-if="isEthereum" class="col-12 mt-10">
      <h3 class="mb-5">GTX vs veGTX</h3>
      <DoughnutChart :labels="['GTX', 'veGTX']" :datasets="[GTXBalance, veGTXBalance]" />
    </div> -->
  </v-row>
</template>
<script>
// import LineChart from '../components/LineChart.vue'
// import DoughnutChart from '../components/DoughnutChart.vue'
import { walletStore } from '@/store/wallet'

export default {
  name: 'Wallet',
  // components: { LineChart, DoughnutChart },
  data() {
    return {
      GTXBalance: 0,
      veGTXBalance: 0,
      labels: [],
      datasets: []
    }
  },
  mounted() {
const WALLETSTORE = walletStore()
    this.fetchNFTs()
    if (WALLETSTORE.getUserAddress) {
      this.readValues()
    }
  },
  methods: {
    readValues() {
const WALLETSTORE = walletStore()

      Promise.all([
        WALLETSTORE.getGTXInstance.methods.balanceOf(WALLETSTORE.getUserAddress).call(),
        WALLETSTORE.getLOCKERInstance.methods.balanceOf(WALLETSTORE.getUserAddress).call()
      ]).then(([GTXBalance, veGTXBalance]) => {
        console.log('GTXBalance:', GTXBalance)
        console.log('veGTXBalance:', veGTXBalance)
        this.GTXBalance = this.humanized(GTXBalance, 2)
        this.veGTXBalance = this.humanized(veGTXBalance, 2)
      })
    },
    readValuesPoly() {
      Promise.all([this.getTOKENInstance.methods.balanceOf(WALLETSTORE.getUserAddress).call()]).then(
        ([GTXBalance]) => {
          console.log('GTXBalance:', GTXBalance)
          this.GTXBalance = this.humanized(GTXBalance, 2)
        }
      )
    },
    async fetchNFTs() {
      let baseURL = `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1`

      let data = await fetch(baseURL).then((data) => data.json())
      let formatedData = this.extractArraysFromArray(data)
      this.labels = formatedData[0]
      this.datasets = formatedData[1]
    },
    timeConverter(UNIX_timestamp) {
      if (Number(UNIX_timestamp)) {
        var a = new Date(UNIX_timestamp * 1000)
        var months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
        var year = a.getFullYear()
        var month = months[a.getMonth()]
        var date = a.getDate()
        var hour = a.getHours()
        var min = a.getMinutes()
        var sec = a.getSeconds()
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
        return time
      } else return 'No lock time'
    },
    humanized(number, fix) {
      return Number(WALLETSTORE.getWeb3.utils.fromWei(number.toString(), 'ether')).toFixed(
        number == 0 ? 2 : fix
      )
    },
    extractArraysFromArray(arr) {
      let array1 = []
      let array2 = []

      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          array1.push(this.timeConverter(Number(arr[i][0]) / 1000))
          array2.push(arr[i][1])
        }
      }

      return [array1, array2]
    }
  },
  computed: {
    isEthereum() {
const WALLETSTORE = walletStore()

      if (WALLETSTORE.getUserAddress) {
        if (WALLETSTORE.CHAIN_ID === 1 || WALLETSTORE.CHAIN_ID === 11155111) return true
        else return false
      } else {
        return false
      }
    }
  },
  watch: {
    CHAIN_ID() {
      if (this.isEthereum) {
        this.readValues()
      } else {
        this.GTXBalance = 0
        this.veGTXBalance = 0
      }
    },
    async getUserAddress() {
      if (WALLETSTORE.getUserAddress) {
        if (this.isEthereum) {
          this.readValues()
        } else {
          this.readValuesPoly()
        }
      } else {
        this.GTXBalance = 0
        this.veGTXBalance = 0
      }
    }
  }
}
</script>
