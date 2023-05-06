const getters = {
  GET_WEB3: state => {
    return state.web3;
  },
  GET_METAMASK_ACCOUNT: state => {
    return state.metamaskAccount;
  },
  GET_NFT_INSTANCE: state => {
    return state.nftInstance;
  },
  GET_STAKING_INSTANCE: state => {
    return state.stakingInstance;
  }
};

export default getters;
