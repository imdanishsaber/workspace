<template>
  <v-row>
    <div class="col-12">
      <v-card class="pa-5">
        <h1>F.A.Q</h1>
        <v-divider class="mb-10"></v-divider>
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item, i) in FAQS" :key="i">
            <v-expansion-panel-header class="pa-6">
              <b>
                {{ item.question }}
              </b>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </v-row>
</template>
<script>
export default {
  name: "Faq",
  data() {
    return {
      FAQS: [
        {
          question:
              "Where Does the PulseDogecoin Staking Rewards come from?",
          answer:
            "The rewards come from a percentage of other parts of the carnival activities like the Community ASIC Miner, Lotteries, Hex Community Stake and any other carnival activity that will be added to the mix",
        },
        {
          question:
              "Who gets the 30 CARN fee for staking?",
          answer:
              "All of that CARN is sent to the BUY and BURN Contract is equally split 10 ways between 10 different operations. Check out the Buy and Burn tab for those 10 operations.",
        },


        {
          question:
              "How does the Community ASIC Miner Work?",
          answer:
              "You Deposit some ASIC into the Community Miner, and depending on your percentage of the total ASIC that was deposited for that session, " +
              "you'll get that percentage of PulseBitcoin that is mined for that session. For example lets say a year from now, there is 1 Million ASIC in the Community Miner, " +
              "and you deposit 50 ASIC into the Community Miner. And lets say for example you are the only person to deposit ASIC for that specific mining session. " +
              "Then you will get 100% of ALL the PulseBitcoin mined with the 1,000,050 ASIC tokens. " +
              "If alternatively 4 people each deposited 50 ASIC for that session then those 4 people would split the total PulseBitcoin mined during that session each getting 25% of the PulseBitcoin mined with the 1,000,200 ASIC tokens. ",
        },
        {
          question:
              "Is the deposited ASIC stuck in there forever?",
          answer:
              "No, all the ASIC will be released when the Trapped ASIC release pool reaches 100K CARN, " +
              "and at that point 60% of the ASIC will be released into the PulseDogecoin Staking rewards pool and 40% of it will be released into the WAATCA pool. " +
              "The 100K CARN will all be sent to the Buy and Burn Contract, similar to ALL CARN that's collected at the Carnival"
        },
        {
          question:
              "How does the Buy and Burn work?",
          answer:
              "Any CARN that is collected at the Carnival (like the 30 CARN for PulseDogecoin Staking), is deposited into the Buy and Burn Contract. " +
              "Immediately all that deposited CARN is equally divided amongst 10 different operations you can see in the Buy and Burn tab. 10% of all CARN is burnt. " +
              "10% of all CARN is deposited into the CARN Rewards pool. The other 80% is used to Market Buy different coins on Uniswap and either burn those coins or send them to WAATCA."
        },
        {
          question:
              "Where Does the WAATCA Rewards come from?",
          answer:
              "Similar to the PulseDogecoin Staking Rewards, WAATCA gets a percentage from all the activities of the Carnival, " +
              "but WAATCA also gets a 'copy' of any CARN Rewards that is withdraw from the CARN Rewards PulseBitcoinLock NFT reward pool, " +
              "also WAATCA gets 50% of any USDC used to acquire CARN from the CARN Token Booth",
        },
      ],
    };
  },
};
</script>
