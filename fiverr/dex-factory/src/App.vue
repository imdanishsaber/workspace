<template>
  <div id="app">
    <Hero />
    <div class="depositSection">
      <div class="container">
        <br />
        <br />
        <div class="depoSection">
          <div class="row">
            <div class="col-sm-6">
              <center>
                <div
                  style="
                    margin-bottom: 5px;
                    border-width: 20px;
                    border-style: solid;
                    border-color: initial;
                    border-image-source: linear-gradient(
                      to left,
                      rgb(30, 26, 29),
                      rgb(237, 145, 7)
                    );
                    border-image-slice: 1;
                    border-image-width: initial;
                    border-image-outset: initial;
                    border-image-repeat: initial;
                  "
                >
                  <div class="card-body text-center">
                    <h2 style="font-weight: bold; color: rgb(237, 145, 7)">
                      DAILY REWARD
                    </h2>
                    <h3 style="font-weight: bold">
                      <img
                        src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                        alt="BNB"
                        width="35"
                      />
                      0.0000 BNB
                    </h3>
                  </div>
                </div>
              </center>
            </div>
            <div class="col-sm-6">
              <center>
                <div
                  style="
                    margin-bottom: 5px;
                    border-width: 20px;
                    border-style: solid;
                    border-color: initial;
                    border-image-source: linear-gradient(
                      to left,
                      rgb(30, 26, 29),
                      rgb(237, 145, 7)
                    );
                    border-image-slice: 1;
                    border-image-width: initial;
                    border-image-outset: initial;
                    border-image-repeat: initial;
                  "
                >
                  <div class="card-body text-center">
                    <h2 style="font-weight: bold; color: rgb(237, 145, 7)">
                      DAILY ROI
                    </h2>
                    <h3 style="font-weight: bold">2% - 5%</h3>
                  </div>
                </div>
              </center>
            </div>
          </div>
          <br /><br /><br />
          <div class="row">
            <div class="col-sm-6">
              <center>
                <div
                  class="card depositCard"
                  style="
                    border-radius: 30px;
                    background: rgb(244, 244, 244);
                    border: none;
                  "
                >
                  <div class="card-body">
                    <center>
                      <h1 style="font-weight: bold">DEPOSIT</h1>
                    </center>
                    <br />
                    <table class="table">
                      <tbody>
                        <tr>
                          <td><h5 style="font-weight: bold">BALANCE</h5></td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.0000 BNB
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">TOTAL DEPOSIT</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.0000 BNB
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">MIN DEPOSIT</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.05 BNB
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">DEPOSIT FEE</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">6%</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">WITHDRAW FEE</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">2%</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">Current ROI</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">0%</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <input
                      type="number"
                      placeholder="0.05 BNB"
                      class="form-control"
                      style="
                        background: rgb(217, 217, 217);
                        text-align: center;
                        font-weight: bold;
                        height: 60px;
                        margin-bottom: 10px;
                      "
                    />
                    <center>
                      <button
                        class="btn btn-warning btn-lg btgx"
                        style="width: 50%; border-radius: 20px"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                        >
                          <path
                            d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"
                          ></path>
                        </svg>
                        Deposit
                      </button>
                    </center>
                  </div>
                </div>
              </center>
            </div>
            <div class="col-sm-6">
              <br />
              <center>
                <div
                  class="card depositCard"
                  style="
                    border-radius: 30px;
                    background: rgb(244, 244, 244);
                    border: none;
                  "
                >
                  <div class="card-body">
                    <center>
                      <h1 style="font-weight: bold">REWARDS</h1>
                    </center>
                    <br />
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">Daily Reward</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.0000/0.0000 BNB
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">Withdraw Amount</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.0000 BNB
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button
                              class="btn btn-warning btn-lg btgx"
                              style="border-radius: 20px"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
                                ></path>
                              </svg>
                              RE-INVEST
                            </button>
                          </td>
                          <td style="text-align: right">
                            <button
                              class="btn btn-warning btn-lg btgx"
                              style="border-radius: 20px"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                              >
                                <path
                                  d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"
                                ></path>
                              </svg>
                              COLLECT
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">WITHDRAW TIME</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">Every 24 Hours</h5>
                          </td>
                        </tr>
                        <tr>
                          <td><h5 style="font-weight: bold">WITHDRAW</h5></td>
                          <td style="text-align: right">
                            <button
                              class="btn btn-warning btn-lg btgx"
                              style="border-radius: 20px"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                              >
                                <path
                                  d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                ></path>
                                <path
                                  d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"
                                ></path>
                              </svg>
                              WITHDRAW
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">TOTAL WITHDRAWN</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.0000 BNB
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 style="font-weight: bold">REMAIN EARNING</h5>
                          </td>
                          <td style="text-align: right">
                            <h5 style="font-weight: bold">
                              <img
                                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=024"
                                alt="BNB"
                                width="35"
                              />
                              0.00 / 0.00 BNB
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </center>
            </div>
            <div class="col-sm-12">
              <div
                class="card depositCard"
                style="
                  border-radius: 30px;
                  background: rgb(244, 244, 244);
                  border: none;
                "
              >
                <div class="card-body">
                  <center>
                    <h1 style="font-weight: bold">EXIT PROTOCOL</h1>
                  </center>
                  <br />
                  <center>
                    <button
                      class="btn btn-warning btn-lg btgx"
                      style="width: 50%; border-radius: 20px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        ></path>
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      UNSTAKE
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <Trade />
    <Partners />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Trade from "./components/Trade.vue";
import Partners from "./components/Partners.vue";

export default {
  name: "App",
  components: {
    Hero,
    Trade,
    Partners,
  },
};
</script>
<style>
@import "./styles/styles.css";
@import "./styles/main.css";
@import "./styles/faq.css";
</style>
