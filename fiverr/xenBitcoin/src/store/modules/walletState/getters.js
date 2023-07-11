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
  getRIDEInstance: (state) => {
    return state.RIDEInstance;
  },
  getLOCKInstance: (state) => {
    return state.LOCKInstance;
  },
  getMINTINGInstance: (state) => {
    return state.MINTINGInstance;
  },
  getUSDCInstance: (state) => {
    return state.USDCInstance;
  },
  getHEXInstance: (state) => {
    return state.HEXInstance;
  },
  geteHEXInstance: (state) => {
    return state.eHEXInstance;
  },
  getPLSXInstance: (state) => {
    return state.PLSXInstance;
  },
};

export default getters;
