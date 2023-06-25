<template>
                  <div
                    id="locking"
                    class="row justify-content-center anim"
                    style="--delay: 0s"
                  >
                    <div class="col-12">
                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="video-p-title">
                            GTX Balance:
                            <span id="GTXBalance2" class="video-p-subtitle"
                              >0.0</span
                            >
                          </div>
                          <div class="video-p-title">
                            My GTX Lock:
                            <span id="lockedAmount" class="video-p-subtitle"
                              >0.0</span
                            >
                          </div>
                          <div class="video-p-title">
                            Locked Till:
                            <span id="lockedTime" class="video-p-subtitle"
                              >---</span
                            >
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div
                            class="d-flex h-100 justify-content-center align-items-center"
                          >
                            <button
                              id="GTXApproveButton"
                              onclick="onGTXApprove()"
                              class="chat-vid__button mr-3"
                            >
                              Approve GTX First
                            </button>
                            <button
                              id="withdrawButton"
                              onclick="onWithdraw()"
                              class="like red"
                            >
                              Withdraw
                            </button>
                          </div>
                        </div>
                      </div>
                      <div id="lockDiv">
                        <div class="mt-4">
                          <label>GTX Lock Amount</label>
                          <input
                            type="text"
                            id="lockAmount"
                            placeholder="Amount to Lock"
                          />
                        </div>
                        <div>
                          <label>Lock Time</label>
                          <select id="lockTime" class="custom-select">
                            <option selected disabled>Choose...</option>
                            <option value="2 Week">2 Week</option>
                            <option value="1 Month">1 Month</option>
                            <option value="3 Months">3 Months</option>
                            <option value="6 Months">6 Months</option>
                            <option value="1 Year">1 Year</option>
                          </select>
                        </div>
                        <button
                          id="lockButton"
                          onclick="onLock()"
                          class="chat-vid__button"
                        >
                          Create Lock
                        </button>
                      </div>
                      <hr />
                    </div>
                    <div class="col-12">
                      <div>
                        <label>Increase GTX Lock Amount</label>
                        <input
                          type="text"
                          id="incLockAmount"
                          placeholder="Amount to Lock"
                        />
                      </div>
                      <button
                        id="incLockAmountButton"
                        class="chat-vid__button"
                        onclick="onIncLockAmount()"
                      >
                        Increase Lock Amount
                      </button>
                      <hr />
                    </div>
                    <div class="col-12">
                      <div>
                        <label>Increase Lock Time</label>
                        <select id="incLockTime" class="custom-select">
                          <option selected disabled>Choose...</option>
                          <option value="2 Week">2 Week</option>
                          <option value="1 Month">1 Month</option>
                          <option value="3 Months">3 Months</option>
                          <option value="6 Months">6 Months</option>
                          <option value="1 Year">1 Year</option>
                        </select>
                      </div>
                      <button
                        id="incLockTimeButton"
                        class="chat-vid__button"
                        onclick="onIncLockTime()"
                      >
                        Increase Lock Time
                      </button>
                    </div>
                  </div>
</template>
<script>
export default {
  name: "Wallet",
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{

  },
  comouted:{
    
  }
}
</script>