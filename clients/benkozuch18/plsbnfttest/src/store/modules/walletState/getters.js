const getters = {
  getWeb3: (state) => {
    return state.web3;
  },
  getUserAddress: (state) => {
    return state.userAddress;
  },
  getTokenInstance: (state) => {
    return state.tokenInstance;
  },
  getContractInstance: (state) => {
    return state.contractInstance;
  },
};

export default getters;
