const getters = {
  getWeb3: (state) => {
    return state.web3;
  },
  isLoading: (state) => {
    return state.isLoading;
  },
  getUserAddress: (state) => {
    return state.userAddress;
  },
  getTOKENInstance: (state) => {
    return state.TOKENInstance;
  },
  getLOCKERInstance: (state) => {
    return state.LOCKERInstance;
  },
  getGTXInstance: (state) => {
    return state.GTXInstance;
  },
};

export default getters;
