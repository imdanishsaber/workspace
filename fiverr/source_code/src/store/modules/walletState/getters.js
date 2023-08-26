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
  getEBRYContractAddress: state => {
    return state.EBRYAddress
  },
  getEBRYContractABI: state => {
    return state.EBRYABI;
  },
  getInstance: state => {
    return state.instance;
  },
  getEBRYInstance: state => {
    return state.EBRYInstance;
  },
};

export default getters;
