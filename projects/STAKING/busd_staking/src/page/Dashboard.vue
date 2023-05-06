<template>
  <section class="main-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card border-0 mb-4">
            <div class="card-header bg-white border-0 pb-0">
              <p class="card-title mb-0">Your Farm</p>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center mb-4">
                <div class="w-100">
                  <p class="mb-0"><small>BUSD to Harvest:</small></p>
                  <p class="fs-5 fw-bold mb-0">{{ userAvailable }} BUSD</p>
                </div>
                <button
                  :disabled="!getUserAccount || userAvailable === '0.000'"
                  @click="harvest"
                  class="btn btn-primary ms-2 w-50"
                >
                  Harvest
                </button>
              </div>
              <div class="row">
                <div class="col-6 mb-4">
                  <div class="w-100">
                    <p class="mb-0"><small>BUSD in Wallet</small></p>
                    <p class="fs-5 fw-bold mb-0">{{ BUSDBalance }} BUSD</p>
                  </div>
                </div>
                <div class="col-6 mb-4">
                  <div class="w-100">
                    <p class="mb-0"><small>Total Deposit</small></p>
                    <p class="fs-5 fw-bold mb-0">{{ totalDeposit }} BUSD</p>
                  </div>
                </div>
                <div class="col-6 mb-4">
                  <div class="w-100">
                    <p class="mb-0"><small>Total Withdrawn</small></p>
                    <p class="fs-5 fw-bold mb-0">{{ totalWithdrawn }} BUSD</p>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-4">
                  <div class="w-100">
                    <p class="mb-0"><small>Referral Earnings</small></p>
                    <p class="fs-5 fw-bold mb-0">{{ totalBonus }} BUSD</p>
                  </div>
                </div>
                <div class="col-6 col-sm-3 mb-4">
                  <div class="w-100">
                    <p class="mb-0"><small>Invited users</small></p>
                    <p class="fs-5 fw-bold mb-0">{{ totalReferrals }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card border-0 mb-3">
            <div class="card-header bg-white border-0 pb-0">
              <p class="card-title mb-0">Affiliate Program</p>
            </div>
            <div class="card-body">
              <p class="mb-0">1 LVL <small>(your invited user)</small> - 7%</p>
              <p class="mb-0">
                2 LVL <small>(user invited by your 1 lvl)</small> - 3%
              </p>
              <p class="mb-0">3 LVL - 1.5%</p>
              <p class="mb-0">4 LVL - 1%</p>
              <p>5 LVL - 0.5%</p>
              <div class="bg-secondary rounded pb-3 pt-2 px-4">
                <p class="mb-0">Your personal link:</p>
                <div>
                  <input
                    type="text"
                    class="tron-link position-absolute"
                    style="opacity: 0"
                  />
                  <div class="d-flex w-100">
                    <div class="mb-0 w-100 p-2 ps-3 bg-white rounded me-n11">
                      <small
                        id="copy-link"
                        class="py-1 mt-1 copy-link d-block text-truncate"
                      >
                        {{ "https://busdharvest.com/?ref=" + getUserAccount }}
                      </small>
                    </div>
                    <div class="tooltip-container">
                      <button
                        class="btn btn-primary py-2"
                        :disabled="!getUserAccount"
                        @click="copy"
                      >
                        <span class="py-1 d-block"> Copy </span>
                      </button>
                      <span class="tooltip tron-tooltip">{{
                        copied || "copy"
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card border-0 mb-3">
            <div class="card-header bg-white border-0 pb-0">
              <p class="card-title mb-0">Stake BUSD</p>
            </div>
            <div class="card-body p-0">
              <table class="table">
                <thead class="border-bottom">
                  <tr>
                    <td scope="col" class="text-capitalize">
                      <small>days</small>
                    </td>
                    <td scope="col" class="text-capitalize">
                      <small>%daily</small>
                    </td>
                    <td scope="col" class="text-capitalize">
                      <small>total</small>
                    </td>
                    <td></td>
                  </tr>
                </thead>
                <tbody class="position-relative">
                  <tr class="cursor-pointer" @click="row_one = !row_one">
                    <td scope="row"><span> Forever </span></td>
                    <td scope="row"><span> 2% </span></td>
                    <td scope="row"><span> ∞ </span></td>
                    <td scope="row"></td>
                    <td scope="row">
                      <button class="border-0 bg-transparent">
                        <span class="angle mb-1"></span>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="row_one">
                    <td
                      colspan="5"
                      class="p-0 border-0 position-relative end-0"
                    >
                      <div class="sub-item overflow-hidden">
                        <div class="bg-secondary rounded-bottom p-3">
                          <div class="p-1 pe-3">
                            <div
                              v-if="getUserAccount"
                              class="d-flex justify-content-between mb-3 for-xs"
                            >
                              <span class="text-capitalize me-3"
                                >BUSD Available: {{ BUSDBalance }}
                                <!-- <a
                                  href=""
                                  class="btn btn-primary"
                                  v-if="isApproved"
                                  style="padding: 2px 14px; font-size: 15px"
                                  @click.prevent="plan_one_amount = BUSDBalance"
                                  >Max</a
                                > -->
                              </span>
                              <div>
                                <span
                                  v-if="isApproved"
                                  class="text-capitalize me-3"
                                  >Total Earn: ∞ BUSD</span
                                >
                                <button
                                  @click="(rate = 2), (showModal = !showModal)"
                                  class="border-0 bg-transparent ms-auto"
                                >
                                  <img
                                    src="../assets/520294a18c7cf5bc4e34af55694a95f9.svg"
                                    class="me-3"
                                  />
                                </button>
                              </div>
                            </div>
                            <form
                              v-if="isApproved"
                              class="w-lg-75 ms-lg-auto ps-md-4"
                            >
                              <fieldset class="d-flex w-lg-75 ms-auto">
                                <input
                                  type="number"
                                  min="0.05"
                                  step="0.01"
                                  class="form-control me-n11"
                                  placeholder="Enter BUSD amount"
                                  @input="(e) => calculateTotalEarning(e, 0)"
                                  v-model="plan_one_amount"
                                />
                                <button
                                  :disabled="!getUserAccount || isLoading_one"
                                  @click.prevent="stakeBUSD(0)"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ stakeBtn_one }}
                                  </span>
                                </button>
                              </fieldset>
                            </form>
                            <template v-else>
                              <div class="d-flex justify-content-end">
                                <button
                                  @click.prevent="approve('one')"
                                  :disabled="!getUserAccount || isLoading_one"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ approveBtn_one }}</span
                                  >
                                </button>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="position-relative">
                  <tr class="cursor-pointer" @click="row_two = !row_two">
                    <td scope="row"><span> 30 </span></td>
                    <td scope="row"><span> 5% </span></td>
                    <td scope="row"><span> 150% </span></td>
                    <td scope="row"></td>
                    <td scope="row">
                      <button class="border-0 bg-transparent">
                        <span class="angle mb-1"></span>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="row_two">
                    <td
                      colspan="5"
                      class="p-0 border-0 position-relative end-0"
                    >
                      <div class="sub-item overflow-hidden">
                        <div class="bg-secondary rounded-bottom p-3">
                          <div class="p-1 pe-3">
                            <div
                              v-if="getUserAccount"
                              class="d-flex justify-content-between mb-3 for-xs"
                            >
                              <span class="text-capitalize me-3"
                                >BUSD Available: {{ BUSDBalance }}
                                <!-- <a
                                  href=""
                                  class="btn btn-primary"
                                  v-if="isApproved"
                                  style="padding: 2px 14px; font-size: 15px"
                                  @click.prevent="plan_two_amount = BUSDBalance"
                                  >Max</a
                                > -->
                              </span>
                              <div>
                                <span
                                  v-if="isApproved"
                                  class="text-capitalize me-3"
                                  >Total Earn:
                                  {{ total_earning_two }} BUSD</span
                                >
                                <button
                                  @click="(rate = 5), (showModal = !showModal)"
                                  class="border-0 bg-transparent ms-auto"
                                >
                                  <img
                                    src="../assets/520294a18c7cf5bc4e34af55694a95f9.svg"
                                    class="me-3"
                                  />
                                </button>
                              </div>
                            </div>
                            <form
                              v-if="isApproved"
                              class="w-lg-75 ms-lg-auto ps-md-4"
                            >
                              <fieldset class="d-flex w-lg-75 ms-auto">
                                <input
                                  type="number"
                                  min="0.05"
                                  step="0.01"
                                  class="form-control me-n11"
                                  placeholder="Enter BUSD amount"
                                  @input="(e) => calculateTotalEarning(e, 1)"
                                  v-model="plan_two_amount"
                                />
                                <button
                                  :disabled="!getUserAccount || isLoading_two"
                                  @click.prevent="stakeBUSD(1)"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ stakeBtn_two }}
                                  </span>
                                </button>
                              </fieldset>
                            </form>
                            <template v-else>
                              <div class="d-flex justify-content-end">
                                <button
                                  @click.prevent="approve('two')"
                                  :disabled="!getUserAccount || isLoading_two"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ approveBtn_two }}</span
                                  >
                                </button>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="position-relative">
                  <tr class="cursor-pointer" @click="row_three = !row_three">
                    <td scope="row"><span> 60 </span></td>
                    <td scope="row"><span> 3.5% </span></td>
                    <td scope="row"><span> 210% </span></td>
                    <td scope="row"></td>
                    <td scope="row">
                      <button class="border-0 bg-transparent">
                        <span class="angle mb-1"></span>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="row_three">
                    <td
                      colspan="5"
                      class="p-0 border-0 position-relative end-0"
                    >
                      <div class="sub-item overflow-hidden">
                        <div class="bg-secondary rounded-bottom p-3">
                          <div class="p-1 pe-3">
                            <div
                              v-if="getUserAccount"
                              class="d-flex justify-content-between mb-3 for-xs"
                            >
                              <span class="text-capitalize me-3"
                                >BUSD Available: {{ BUSDBalance }}
                                <!-- <a
                                  href=""
                                  class="btn btn-primary"
                                  v-if="isApproved"
                                  style="padding: 2px 14px; font-size: 15px"
                                  @click.prevent="
                                    plan_three_amount = BUSDBalance
                                  "
                                  >Max</a
                                > -->
                              </span>
                              <div>
                                <span
                                  v-if="isApproved"
                                  class="text-capitalize me-3"
                                  >Total Earn:
                                  {{ total_earning_three }} BUSD</span
                                >
                                <button
                                  @click="
                                    (rate = 3.5), (showModal = !showModal)
                                  "
                                  class="border-0 bg-transparent ms-auto"
                                >
                                  <img
                                    src="../assets/520294a18c7cf5bc4e34af55694a95f9.svg"
                                    class="me-3"
                                  />
                                </button>
                              </div>
                            </div>
                            <form
                              v-if="isApproved"
                              class="w-lg-75 ms-lg-auto ps-md-4"
                            >
                              <fieldset class="d-flex w-lg-75 ms-auto">
                                <input
                                  type="number"
                                  min="0.05"
                                  step="0.01"
                                  class="form-control me-n11"
                                  placeholder="Enter BUSD amount"
                                  @input="(e) => calculateTotalEarning(e, 2)"
                                  v-model="plan_three_amount"
                                />
                                <button
                                  :disabled="!getUserAccount || isLoading_three"
                                  @click.prevent="stakeBUSD(2)"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ stakeBtn_three }}
                                  </span>
                                </button>
                              </fieldset>
                            </form>
                            <template v-else>
                              <div class="d-flex justify-content-end">
                                <button
                                  @click.prevent="approve('three')"
                                  :disabled="!getUserAccount || isLoading_three"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ approveBtn_three }}</span
                                  >
                                </button>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody class="position-relative">
                  <tr class="cursor-pointer" @click="row_four = !row_four">
                    <td scope="row"><span> 90 </span></td>
                    <td scope="row"><span> 3% </span></td>
                    <td scope="row"><span> 270% </span></td>
                    <td scope="row"></td>
                    <td scope="row">
                      <button class="border-0 bg-transparent">
                        <span class="angle mb-1"></span>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="row_four">
                    <td
                      colspan="5"
                      class="p-0 border-0 position-relative end-0"
                    >
                      <div class="sub-item overflow-hidden">
                        <div class="bg-secondary rounded-bottom p-3">
                          <div class="p-1 pe-3">
                            <div
                              v-if="getUserAccount"
                              class="d-flex justify-content-between mb-3 for-xs"
                            >
                              <span class="text-capitalize me-3"
                                >BUSD Available: {{ BUSDBalance }}
                                <!-- <a
                                  href=""
                                  class="btn btn-primary"
                                  v-if="isApproved"
                                  style="padding: 2px 14px; font-size: 15px"
                                  @click.prevent="
                                    plan_four_amount = BUSDBalance
                                  "
                                  >Max</a
                                > -->
                              </span>
                              <div>
                                <span
                                  v-if="isApproved"
                                  class="text-capitalize me-3"
                                  >Total Earn:
                                  {{ total_earning_four }} BUSD</span
                                >
                                <button
                                  @click="(rate = 3), (showModal = !showModal)"
                                  class="border-0 bg-transparent ms-auto"
                                >
                                  <img
                                    src="../assets/520294a18c7cf5bc4e34af55694a95f9.svg"
                                    class="me-3"
                                  />
                                </button>
                              </div>
                            </div>
                            <form
                              v-if="isApproved"
                              class="w-lg-75 ms-lg-auto ps-md-4"
                            >
                              <fieldset class="d-flex w-lg-75 ms-auto">
                                <input
                                  type="number"
                                  min="0.05"
                                  step="0.01"
                                  class="form-control me-n11"
                                  placeholder="Enter BUSD amount"
                                  @input="(e) => calculateTotalEarning(e, 3)"
                                  v-model="plan_four_amount"
                                />
                                <button
                                  :disabled="!getUserAccount || isLoading_four"
                                  @click.prevent="stakeBUSD(3)"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ stakeBtn_four }}
                                  </span>
                                </button>
                              </fieldset>
                            </form>
                            <template v-else>
                              <div class="d-flex justify-content-end">
                                <button
                                  @click.prevent="approve('four')"
                                  :disabled="!getUserAccount || isLoading_four"
                                  class="btn btn-primary py-2 px-4"
                                >
                                  <span class="py-1 d-block px-3">
                                    {{ approveBtn_four }}</span
                                  >
                                </button>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card border-0 mb-3">
            <div class="card-header bg-white border-0 pb-0">
              <p class="card-title mb-0">Read before use</p>
            </div>
            <div class="card-body">
              <small class="fw-light mt-n3 d-block lh-xs">
                The principal deposit cannot be withdrawn, the only return users
                can get are daily dividends and referral rewards. Payments is
                possible only if contract balance have enough BUSD. Please
                analyze the transaction history and balance of the smart
                contract before investing. High risk - high profit, DYOR
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="showModal ? 'show' : ''">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ROI</h5>
            <button
              type="button"
              class="btn-close"
              @click="showModal = !showModal"
            ></button>
          </div>
          <div class="modal-body px-0 pt-0">
            <table class="table table-borderless">
              <thead class="border-bottom">
                <tr>
                  <td scope="col" class="text-capitalize">
                    <small>days</small>
                  </td>
                  <td scope="col" class="text-capitalize">
                    <small>ROI;</small>
                  </td>
                  <td scope="col" class="text-capitalize">
                    <small
                      >Income per 1 <br />
                      BUSD:</small
                    >
                  </td>
                  <td></td>
                </tr>
              </thead>
              <tbody class="position-relative">
                <tr class="cursor-pointer">
                  <td scope="row"><span> 1 </span></td>
                  <td scope="row">
                    <span> {{ 1 * rate }}% </span>
                  </td>
                  <td scope="row">
                    <span> {{ ((1 * rate) / 100).toFixed(2) }} </span>
                  </td>
                  <td scope="row"><span> </span></td>
                </tr>
                <tr>
                  <td colspan="4" class="p-0 border-0 position-relative end-0">
                    <!---->
                  </td>
                </tr>
              </tbody>
              <tbody class="position-relative">
                <tr class="cursor-pointer">
                  <td scope="row"><span> 7 </span></td>
                  <td scope="row">
                    <span> {{ 7 * rate }}% </span>
                  </td>
                  <td scope="row">
                    <span> {{ ((7 * rate) / 100).toFixed(2) }} </span>
                  </td>
                  <td scope="row"><span> </span></td>
                </tr>
                <tr>
                  <td colspan="4" class="p-0 border-0 position-relative end-0">
                    <!---->
                  </td>
                </tr>
              </tbody>
              <tbody class="position-relative">
                <tr class="cursor-pointer">
                  <td scope="row"><span> 30 </span></td>
                  <td scope="row">
                    <span> {{ 30 * rate }}% </span>
                  </td>
                  <td scope="row">
                    <span> {{ ((30 * rate) / 100).toFixed(2) }} </span>
                  </td>
                  <td scope="row"><span> </span></td>
                </tr>
                <tr>
                  <td colspan="4" class="p-0 border-0 position-relative end-0">
                    <!---->
                  </td>
                </tr>
              </tbody>
              <tbody class="position-relative">
                <tr class="cursor-pointer">
                  <td scope="row"><span> 90 </span></td>
                  <td scope="row">
                    <span> {{ 90 * rate }}% </span>
                  </td>
                  <td scope="row">
                    <span> {{ ((90 * rate) / 100).toFixed(2) }} </span>
                  </td>
                  <td scope="row"><span> </span></td>
                </tr>
                <tr>
                  <td colspan="4" class="p-0 border-0 position-relative end-0">
                    <!---->
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="text-center">
              <small> Calculated based on compounding 1x daily. </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      rate: "5",
      showModal: false,
      isLoading_one: false,
      isLoading_two: false,
      isLoading_three: false,
      isLoading_four: false,
      isApproved: false,
      stakeBtn_one: "Stake",
      stakeBtn_two: "Stake",
      stakeBtn_three: "Stake",
      stakeBtn_four: "Stake",
      approveBtn_one: "Approve Contract",
      approveBtn_two: "Approve Contract",
      approveBtn_three: "Approve Contract",
      approveBtn_four: "Approve Contract",
      timer: null,
      copied: false,
      row_one: false,
      row_two: false,
      row_three: false,
      row_four: false,
      plan_one_amount: null,
      plan_two_amount: null,
      plan_three_amount: null,
      plan_four_amount: null,
      total_earning_two: 0,
      total_earning_three: 0,
      total_earning_four: 0,
      BUSDBalance: "0.000",
      userAvailable: "0.000",
      totalDeposit: "0.000",
      totalWithdrawn: "0.000",
      totalReferrals: "0",
      totalBonus: "0.000",
    };
  },

  mounted() {
    this.readValue();
    this.timer = setInterval(() => {
      this.readValue();
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    copy() {
      var copyText = document.getElementById("copy-link");
      navigator.clipboard.writeText(copyText.innerHTML);
      this.copied = "Copied";
    },
    readValue() {
      if (this.getWeb3) {
        let methods = this.getInstance.methods;
        Promise.all([
          this.getBUSDInstance.methods.balanceOf(this.getUserAccount).call(),
          this.getBUSDInstance.methods
            .allowance(this.getUserAccount, this.getContractAddress)
            .call(),
          methods.getUserInfo(this.getUserAccount).call(),
          methods.getUserAvailable(this.getUserAccount).call(),
          methods.getUserTotalReferrals(this.getUserAccount).call(),
          methods.getUserTotalWithdrawn(this.getUserAccount).call(),
          methods.getUserReferralTotalBonus(this.getUserAccount).call(),
        ]).then(
          ([
            BUSDBalance,
            allowance,
            userInfo,
            userAvailable,
            totalReferrals,
            totalWithdrawn,
            totalBonus,
          ]) => {
            if (allowance > 0) this.isApproved = true;
            this.BUSDBalance = this.humanized(BUSDBalance, 3);
            this.totalDeposit = this.humanized(userInfo.totalDeposit, 3);
            this.userAvailable = this.humanized(userAvailable, 3);
            this.totalReferrals = totalReferrals;
            this.totalWithdrawn = this.humanized(totalWithdrawn, 3);
            this.totalBonus = this.humanized(totalBonus, 3);
          }
        );
      }
    },
    humanized(number, fix) {
      return Number(
        this.getWeb3.utils.fromWei(number.toString(), "ether")
      ).toFixed(number == 0 ? 3 : fix);
    },
    calculateTotalEarning(e, plan) {
      switch (Number(plan)) {
        case 0:
          break;
        case 1:
          this.total_earning_two = Number(e.target.value * 150) / 100;
          break;
        case 2:
          this.total_earning_three = Number(e.target.value * 210) / 100;
          break;
        case 3:
          this.total_earning_four = Number(e.target.value * 270) / 100;
          break;
      }
    },
    clearBtn() {
      this.isLoading_one = false;
      this.isLoading_two = false;
      this.isLoading_three = false;
      this.isLoading_four = false;
      this.stakeBtn_one = "Stake";
      this.stakeBtn_two = "Stake";
      this.stakeBtn_three = "Stake";
      this.stakeBtn_four = "Stake";
      this.approveBtn_one = "Approve Contract";
      this.approveBtn_two = "Approve Contract";
      this.approveBtn_three = "Approve Contract";
      this.approveBtn_four = "Approve Contract";
    },
    approve(plan) {
      try {
        this["isLoading_" + plan] = true;
        this["approveBtn_" + plan] = "Pending Approval";
        this.getBUSDInstance.methods
          .approve(
            this.getContractAddress,
            "999999999999999999999999999999999999999999999999999999999999999999999999"
          )
          .estimateGas({ from: this.getUserAccount })
          .then((gasAmount) => {
            this.getBUSDInstance.methods
              .approve(
                this.getContractAddress,
                "999999999999999999999999999999999999999999999999999999999999999999999999"
              )
              .send({
                from: this.getUserAccount,
                gasLimit: this.getWeb3.utils.toHex(gasAmount),
              })
              .on("transactionHash", (hash) => {
                console.log("Transaction hash", hash);
                this.$toasted.show("Transaction submitted to the network");
              })
              .on("receipt", (receipt) => {
                this.clearBtn();
                this.isApproved = true;
                console.log("Receipt: ", receipt);
                this.$toasted.show("Transaction completed successfully");
              })
              .on("error", (error) => {
                this.clearBtn();
                console.log("Error receipt: ", error);
              });
          })
          .catch((error) => {
            console.log("Error receipt: ", error);
          });
      } catch {
        this.clearBtn();
      }
    },
    stakeBUSD(plan) {
      try {
        let amount = 0;
        switch (Number(plan)) {
          case 0:
            amount = this.plan_one_amount;
            this.isLoading_one = true;
            this.stakeBtn_one = "Pending Confirmation";
            break;
          case 1:
            amount = this.plan_two_amount;
            this.isLoading_two = true;
            this.stakeBtn_two = "Pending Confirmation";
            break;
          case 2:
            amount = this.plan_three_amount;
            this.isLoading_three = true;
            this.stakeBtn_three = "Pending Confirmation";
            break;
          case 3:
            amount = this.plan_four_amount;
            this.isLoading_four = true;
            this.stakeBtn_four = "Pending Confirmation";
            break;
        }
        console.log(amount);
        if (amount === null || amount === "" || amount == 0) {
          this.clearBtn();
          this.$toasted.show("Enter the amount to stake");
          return;
        }
        this.getInstance.methods
          .invest(
            this.getReferral,
            plan,
            this.getWeb3.utils.toWei(amount.toString(), "ether")
          )
          .send({
            from: this.getUserAccount,
            value: 0,
          })
          .on("transactionHash", (hash) => {
            console.log("Transaction hash", hash);
            this.$toasted.show("Transaction submitted to the network");
          })
          .on("receipt", (receipt) => {
            this.clearBtn();
            console.log("Receipt: ", receipt);
            this.$toasted.show("Transaction completed successfully");
          })
          .on("error", (error) => {
            this.clearBtn();
            console.log("Error receipt: ", error);
          });
      } catch {
        this.clearBtn();
      }
    },
    harvest() {
      this.isLoading = true;
      this.getInstance.methods
        .withdraw()
        .send({
          from: this.getUserAccount,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash", hash);
          this.$toasted.show("Transaction submitted to the network");
        })
        .on("receipt", (receipt) => {
          console.log("Receipt: ", receipt);
          this.$toasted.show("Transaction completed successfully");
        })
        .on("error", (error) => {
          console.log("Error receipt: ", error);
        });
    },
  },
  computed: {
    ...mapGetters("wallet", [
      "getWeb3",
      "getReferral",
      "getUserAccount",
      "getInstance",
      "getContractABI",
      "getContractAddress",
      "getBUSDInstance",
      "getBUSDContractABI",
      "getBUSDContractAddress",
    ]),
  },
  watch: {
    getInstance() {
      this.readValue();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1170px;
}
.error-message {
  position: relative;
  left: 5px;
  top: 5px;
  font-size: 13px;
  color: red;
}
</style>