const getters = {
  getWeb3: state => {
    return state.web3;
  },
  getUserAccount: state => {
    return state.userAccount;
  },
  getMintingInstance: state => {
    return state.mintingInstance;
  },
  getStakingInstance: state => {
    return state.stakingInstance;
  },
  getERC20StakingInstance: state => {
    return state.ERC20StakingInstance;
  },
  getRewardInstance: state => {
    return state.rewardInstance;
  },
  getTokenInstance: state => {
    return state.tokenInstance;
  },
};

export default getters;
