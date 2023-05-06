const getters = {
  getWeb3: state => {
    return state.web3;
  },
  getUserAddress: state => {
    return state.userAddress;
  },
  getV1Instance: state => {
    return state.v1Instance;
  },
  getTokenInstance: state => {
    return state.tokenInstance;
  },
  getStakingInstance: state => {
    return state.stakingInstance;
  },
  getMigrationInstance: state => {
    return state.migrationInstance;
  },
  getPrice: state => {
    return state.price;
  }
};

export default getters;
