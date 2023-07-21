const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_USER_ADDRESS: (state, payload) => {
    state.userAddress = payload;
  },
  SET_TOKEN_INSTANCE: (state, payload) => {
    state.tokenInstance = payload;
  },
  SET_CONTRACT_INSTANCE: (state, payload) => {
    state.contractInstance = payload;
  },
};

export default mutations;
