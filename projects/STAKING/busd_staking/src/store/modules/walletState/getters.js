const getters = {
  getWeb3: state => {
    return state.web3;
  },
  getUserAccount: state => {
    return state.userAccount;
  },
  getReferral: state => {
    return state.referral;
  },
  getContractAddress: state => {
    return state.contractAddress;
  },
  getContractABI: state => {
    return state.contractABI;
  },
  getBUSDContractAddress: state => {
    return state.BUSDAddress
  },
  getBUSDContractABI: state => {
    return state.BUSDABI;
  },
  getInstance: state => {
    return state.instance;
  },
  getBUSDInstance: state => {
    return state.BUSDInstance;
  },
};

export default getters;
