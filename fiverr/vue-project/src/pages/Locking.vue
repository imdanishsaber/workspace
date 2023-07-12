<template>
  <v-row class="justify-content-center anim" style="--delay: 0s">
    <div class="col-12">
      <v-row class="mb-10">
        <div class="col-12 col-md-6">
          <div class="mb-5">
            <b>
              GTX Balance:
              <span class="text-red">{{ GTXBalance }}</span>
            </b>
          </div>
          <div class="mb-5">
            <b>
              My GTX Lock:
              <span class="text-red">{{ lockedAmount }}</span>
            </b>
          </div>

          <div>
            <b>
              Locked Till:
              <span class="text-red">{{ lockedTime }}</span>
            </b>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="withdraw-section">
            <v-btn
              size="large"
              variant="flat"
              class="mr-5"
              color="primary"
              @click="onGTXApprove"
              :disabled="!isEthereum || isLoading || isApproved"
            >
              {{ isApproved ? `Already Approved: ${GTXAllowance}` : 'Approve GTX First' }}
            </v-btn>
            <v-btn
              size="large"
              variant="flat"
              class="mr-5"
              color="secondary"
              @click="onWithdraw"
              :disabled="!isEthereum || isLoading || isWithdrawable"
            >
              Withdraw
            </v-btn>
          </div>
        </div>
      </v-row>
      <div v-if="hash1" class="my-5">
        <v-alert dense text type="success" style="display: inline-block; margin-bottom: 0">
          Transaction is submitted to network! &#160;
          <strong class="cursor-pointer" @click="openScan(hash1)">
            View on
            {{ isEthereum ? 'Etherscan' : 'Polygonscan' }}
          </strong>
        </v-alert>
      </div>
      <div v-if="isLockAllow">
        <h3 class="mb-10">Lock GTX</h3>
        <div class="mt-4">
          <v-text-field
            density="compact"
            variant="outlined"
            v-model.number="lockAmount"
            label="GTX Lock Amount"
            placeholder="Amount to Lock"
          ></v-text-field>
        </div>
        <v-select
          density="compact"
          variant="outlined"
          v-model="lockTime"
          :items="lockTimes"
          item-text="label"
          item-value="value"
          label="Lock Time"
        ></v-select>
        <v-btn
          size="large"
          variant="flat"
          color="primary"
          class="mr-5"
          @click="onLock"
          :disabled="!isEthereum || isLoading || !isApproved"
        >
          Create Lock
        </v-btn>
        <div v-if="hash2" class="mt-10">
          <v-alert dense text type="success" style="display: inline-block; margin-bottom: 0">
            Transaction is submitted to network! &#160;
            <strong class="cursor-pointer" @click="openScan(hash2)">
              View on
              {{ isEthereum ? 'Etherscan' : 'Polygonscan' }}
            </strong>
          </v-alert>
        </div>
      </div>
      <hr />
    </div>
    <div class="col-12">
      <h3 class="mb-10">Increase Lock Amount</h3>
      <div>
        <v-text-field
          density="compact"
          variant="outlined"
          v-model.number="incLockAmount"
          label="Increase GTX Lock Amount"
          placeholder="Amount to Lock"
        ></v-text-field>
      </div>
      <v-btn
        size="large"
        variant="flat"
        color="primary"
        class="mr-5"
        @click="onIncLockAmount"
        :disabled="!isEthereum || isLoading || !isApproved"
      >
        Increase Lock Amount
      </v-btn>
      <div v-if="hash3" class="mt-10">
        <v-alert dense text type="success" style="display: inline-block; margin-bottom: 0">
          Transaction is submitted to network! &#160;
          <strong class="cursor-pointer" @click="openScan(hash3)">
            View on
            {{ isEthereum ? 'Etherscan' : 'Polygonscan' }}
          </strong>
        </v-alert>
      </div>
      <hr />
    </div>
    <div class="col-12">
      <h3 class="mb-10">Increase Lock Time</h3>
      <v-select
        density="compact"
        variant="outlined"
        v-model="incLockTime"
        :items="incLockTimes"
        item-text="label"
        item-value="value"
        label="Increase Lock Time"
      ></v-select>

      <v-btn
        size="large"
        variant="flat"
        color="primary"
        class="mr-5"
        @click="onIncLockTime"
        :disabled="!isEthereum || isLoading || !isApproved"
      >
        Increase Lock Time
      </v-btn>
      <div v-if="hash4" class="mt-10">
        <v-alert dense text type="success" style="display: inline-block; margin-bottom: 0">
          Transaction is submitted to network! &#160;
          <strong class="cursor-pointer" @click="openScan(hash4)">
            View on
            {{ isEthereum ? 'Etherscan' : 'Polygonscan' }}
          </strong>
        </v-alert>
      </div>
    </div>
  </v-row>
</template>
<script>
import config from '@/config/addresses'
export default {
  name: 'Locking',
  data() {
    return {
      hash1: null,
      hash2: null,
      hash3: null,
      hash4: null,
      isLockAllow: true,
      GTXBalance: 0,
      lockedAmount: 0,
      lockedTime: '---',

      lockAmount: null,
      lockTime: 'Choose...',

      incLockAmount: null,
      incLockTime: 'Choose...',

      lockTimes: [
        { label: 'Choose...', value: 'Choose...', disabled: true },
        { label: '2 Week', value: '2 Week', disabled: false },
        { label: '1 Month', value: '1 Month', disabled: false },
        { label: '3 Months', value: '3 Months', disabled: false },
        { label: '6 Months', value: '6 Months', disabled: false },
        { label: '1 Year', value: '1 Year', disabled: false }
      ],
      incLockTimes: [
        { label: 'Choose...', value: 'Choose...', disabled: true },
        { label: '2 Week', value: '2 Week', disabled: false },
        { label: '1 Month', value: '1 Month', disabled: false },
        { label: '3 Months', value: '3 Months', disabled: false },
        { label: '6 Months', value: '6 Months', disabled: false },
        { label: '1 Year', value: '1 Year', disabled: false }
      ],

      isApproved: false,
      GTXAllowance: 0,

      isLoading: false,
      isWithdrawable: false,

      NETWORKS: {
        1: 'https://etherscan.io',
        11155111: 'https://sepolia.etherscan.io',
        137: 'https://polygonscan.com',
        80001: 'https://mumbai.polygonscan.com'
      },
      LOCKER_ADDRESS: config.LOCKER_ADDRESS,
    }
  },
  mounted() {
    if (WALLETSTORE.getUserAddress) {
      this.readValues()
    }
  },
  methods: {
    readValues() {
      Promise.all([
        WALLETSTORE.getGTXInstance.methods.balanceOf(WALLETSTORE.getUserAddress).call(),
        WALLETSTORE.getGTXInstance.methods.allowance(WALLETSTORE.getUserAddress, this.LOCKER_ADDRESS).call(),
        WALLETSTORE.getLOCKERInstance.methods.locked(WALLETSTORE.getUserAddress).call()
      ]).then(([GTXBalance, GTXAllowance, locked]) => {
        console.log('GTXBalance:', GTXBalance)
        console.log('GTXAllowance:', GTXAllowance)
        console.log('locked:', locked)

        this.GTXBalance = this.humanized(GTXBalance, 2)
        this.isApproved = !!Number(GTXAllowance)
        this.GTXAllowance = this.humanized(GTXAllowance, 2)

        this.lockedTime = this.timeConverter(locked.end)
        this.lockedAmount = this.humanized(locked.amount, 2)

        if (Number(locked.amount)) this.isLockAllow = false
        else this.isLockAllow = true

        if (!Number(locked.end) || Number(locked.end) > Math.floor(new Date().getTime() / 1000)) {
          this.isWithdrawable = true
          this.incLockTimes.forEach((option) => {
            var optionValue = this.calculateEpochTimestamp(option.value)
            if (optionValue <= Number(locked.end)) option.disabled = true
            else option.disabled = false
          })
        } else {
          this.isWithdrawable = false
        }
      })
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
    onGTXApprove() {
      this.hash1 = null
      this.hash2 = null
      this.hash3 = null
      this.hash4 = null
      if (!WALLETSTORE.getUserAddress) {
        this.$toasted.show('Connect your wallet first')
        return
      }
      WALLETSTORE.getGTXInstance.methods
        .approve(this.LOCKER_ADDRESS, '1000000000000000000000000000')
        .send({
          from: WALLETSTORE.getUserAddress
        })
        .on('transactionHash', (hash) => {
          this.hash1 = hash
          console.log('Transaction Hash: ', hash)
          this.$toasted.show('Transaction is submitted to the network')
        })
        .on('receipt', (receipt) => {
          this.readValues()
          console.log('Receipt: ', receipt)
          this.$toasted.show('Transaction completed successfully')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.$toasted.show('Transaction rejected')
        })
    },

    onLock() {
      this.hash1 = null
      this.hash2 = null
      this.hash3 = null
      this.hash4 = null
      let timeText = this.lockTime
      let time = this.calculateEpochTimestamp(timeText)
      if (!WALLETSTORE.getUserAddress) {
        this.$toasted.show('Connect your wallet first')
        return
      } else if (!Number(this.lockAmount)) {
        this.$toasted.show('Enter Locking Amount')
        return
      } else if (!Number(time)) {
        this.$toasted.show('Select Locking period')
        return
      }
      let amount = WALLETSTORE.getWeb3.utils.toWei(this.lockAmount.toString(), 'ether')
      WALLETSTORE.getLOCKERInstance.methods
        .createLock(amount, time)
        .send({
          from: WALLETSTORE.getUserAddress
        })
        .on('transactionHash', (hash) => {
          this.hash2 = hash
          console.log('Transaction Hash: ', hash)
          this.$toasted.show('Transaction is submitted to the network')
        })
        .on('receipt', (receipt) => {
          this.readValues()
          console.log('Receipt: ', receipt)
          this.$toasted.show('Transaction completed successfully')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.$toasted.show('Transaction rejected')
        })
    },

    onIncLockAmount() {
      this.hash1 = null
      this.hash2 = null
      this.hash3 = null
      this.hash4 = null
      if (!WALLETSTORE.getUserAddress) {
        this.$toasted.show('Connect your wallet first')
        return
      } else if (!Number(this.incLockAmount)) {
        this.$toasted.show('Enter Locking Amount')
        return
      }

      let amount = WALLETSTORE.getWeb3.utils.toWei(this.incLockAmount.toString(), 'ether')

      WALLETSTORE.getLOCKERInstance.methods
        .increaseAmount(amount)
        .send({
          from: WALLETSTORE.getUserAddress
        })
        .on('transactionHash', (hash) => {
          this.hash3 = hash
          console.log('Transaction Hash: ', hash)
          this.$toasted.show('Transaction is submitted to the network')
        })
        .on('receipt', (receipt) => {
          this.readValues()
          console.log('Receipt: ', receipt)
          this.$toasted.show('Transaction completed successfully')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.$toasted.show('Transaction rejected')
        })
    },

    onIncLockTime() {
      this.hash1 = null
      this.hash2 = null
      this.hash3 = null
      this.hash4 = null
      let timeText = this.incLockTime
      let time = this.calculateEpochTimestamp(timeText)

      if (!WALLETSTORE.getUserAddress) {
        this.$toasted.show('Connect your wallet first')
        return
      } else if (!Number(time)) {
        this.$toasted.show('Select Locking period')
        return
      }

      WALLETSTORE.getLOCKERInstance.methods
        .increaseUnlockTime(time)
        .send({
          from: WALLETSTORE.getUserAddress
        })
        .on('transactionHash', (hash) => {
          this.hash4 = hash
          console.log('Transaction Hash: ', hash)
          this.$toasted.show('Transaction is submitted to the network')
        })
        .on('receipt', (receipt) => {
          this.readValues()
          console.log('Receipt: ', receipt)
          this.$toasted.show('Transaction completed successfully')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.$toasted.show('Transaction rejected')
        })
    },

    onWithdraw() {
      this.hash1 = null
      this.hash2 = null
      this.hash3 = null
      this.hash4 = null
      if (!WALLETSTORE.getUserAddress) {
        this.$toasted.show('Connect your wallet first')
        return
      }
      WALLETSTORE.getLOCKERInstance.methods
        .withdraw()
        .send({
          from: WALLETSTORE.getUserAddress
        })
        .on('transactionHash', (hash) => {
          this.hash1 = hash
          console.log('Transaction Hash: ', hash)
          this.$toasted.show('Transaction is submitted to the network')
        })
        .on('receipt', (receipt) => {
          this.readValues()
          console.log('Receipt: ', receipt)
          this.$toasted.show('Transaction completed successfully')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
        })
    },
    openScan(hash) {
      let url = `${this.NETWORKS[WALLETSTORE.CHAIN_ID]}/tx/${hash}`
      window.open(url, '_blank')
    },
    calculateEpochTimestamp(duration) {
      const now = Math.floor(Date.now() / 1000) // Current epoch timestamp in seconds
      const secondsInMinute = 60
      const secondsInHour = 60 * secondsInMinute
      const secondsInDay = 24 * secondsInHour
      const secondsInWeek = 7 * secondsInDay
      const secondsInMonth = 30 * secondsInDay
      const secondsInYear = 365 * secondsInDay

      let durationInSeconds

      if (duration.endsWith('Week')) {
        const weeks = parseInt(duration)
        durationInSeconds = weeks * secondsInWeek
      } else if (duration.endsWith('Month')) {
        const months = parseInt(duration)
        durationInSeconds = months * secondsInMonth
      } else if (duration.endsWith('Months')) {
        const months = parseInt(duration)
        durationInSeconds = months * secondsInMonth
      } else if (duration.endsWith('Year')) {
        const years = parseInt(duration)
        durationInSeconds = years * secondsInYear
      } else {
        return ''
      }

      return now + durationInSeconds
    }
  },
  computed: {
    isEthereum() {
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
        this.isLockAllow = true
        this.GTXBalance = 0
        this.lockedAmount = 0
        this.lockedTime = '---'
        this.lockAmount = null
        this.lockTime = 'Choose...'
        this.incLockAmount = null
        this.incLockTime = 'Choose...'
        this.isApproved = false
        this.GTXAllowance = 0
        this.isLoading = false
        this.isWithdrawable = false
      }
    },
    async getUserAddress() {
      if (this.isEthereum && WALLETSTORE.getUserAddress) {
        this.readValues()
      } else {
        this.isLockAllow = true
        this.GTXBalance = 0
        this.lockedAmount = 0
        this.lockedTime = '---'
        this.lockAmount = null
        this.lockTime = 'Choose...'
        this.incLockAmount = null
        this.incLockTime = 'Choose...'
        this.isApproved = false
        this.GTXAllowance = 0
        this.isLoading = false
        this.isWithdrawable = false
      }
    }
  }
}
</script>
