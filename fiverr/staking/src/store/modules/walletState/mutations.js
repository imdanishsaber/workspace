const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_METAMASK_ACCOUNT: (state, payload) => {
    state.metamaskAccount = payload;
  },
  SET_NFT_INSTANCE: (state, payload) => {
    state.nftInstance = payload;
  },
  SET_STAKING_INSTANCE: (state, payload) => {
    state.stakingInstance = payload;
  }
};

export default mutations;
