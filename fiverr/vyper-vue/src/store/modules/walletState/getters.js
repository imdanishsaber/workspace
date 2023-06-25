const getters = {
  getWeb3: (state) => {
    return state.web3;
  },

  getUserAddress: (state) => {
    return state.userAddress;
  },

  getGTXInstance: (state) => {
    return state.GTXInstance;
  },

  getTOKENInstance: (state) => {
    return state.TOKENInstance;
  },

  getLOCKERInstance: (state) => {
    return state.LOCKERInstance;
  },
};

export default getters;
