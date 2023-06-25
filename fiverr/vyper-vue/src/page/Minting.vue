<template>
                    <div
                    id="mint"
                    class="row justify-content-center anim"
                    style="--delay: 0s"
                  >
                    <div class="col-12">
                      <div class="video-p-title">
                        Link Token Balance:
                        <span id="TOKENBalance" class="video-p-subtitle"
                          >0.0</span
                        >
                      </div>
                      <div>
                        <label>Minting Amount</label>
                        <input
                          type="text"
                          id="tokenAmount"
                          placeholder="Token to mint"
                        />
                      </div>
                      <button
                        id="tokenApproveButton"
                        onclick="onTokenApprove()"
                        class="chat-vid__button mr-3"
                      >
                        Approve
                      </button>
                      <button
                        id="mintButton"
                        onclick="onMint()"
                        class="chat-vid__button mr-3"
                        disabled
                      >
                        Mint Token
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