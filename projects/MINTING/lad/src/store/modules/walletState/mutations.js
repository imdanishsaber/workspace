const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_USER_ACCOUNT: (state, payload) => {
    state.userAccount = payload;
  },
  SET_MINTING_INSTANCE: (state, payload) => {
    state.mintingInstance = payload;
  },
  SET_STAKING_INSTANCE: (state, payload) => {
    state.stakingInstance = payload;
  },
  SET_ERC20_STAKING_INSTANCE: (state, payload) => {
    state.ERC20StakingInstance = payload;
  },
  SET_REWARD_INSTANCE: (state, payload) => {
    state.rewardInstance = payload;
  },
  SET_TOKEN_INSTANCE: (state, payload) => {
    state.tokenInstance = payload;
  }
};

export default mutations;
