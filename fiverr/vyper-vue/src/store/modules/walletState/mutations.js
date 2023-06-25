const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_LOADING: (state, payload) => {
    state.isLoading = payload;
  },
  SET_USER_ADDRESS: (state, payload) => {
    state.userAddress = payload;
  },
  SET_TOKEN_INSTANCE: (state, payload) => {
    state.TOKENInstance = payload;
  },
  SET_LOCKER_INSTANCE: (state, payload) => {
    state.LOCKERInstance = payload;
  },
  SET_GTX_INSTANCE: (state, payload) => {
    state.GTXInstance = payload;
  },
};

export default mutations;
