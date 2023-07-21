const actions = {
  SET_WEB3({ commit }, payload) {
    commit("SET_WEB3", payload);
  },
  SET_USER_ADDRESS({ commit }, payload) {
    commit("SET_USER_ADDRESS", payload);
  },
  SET_TOKEN_INSTANCE({ commit }, payload) {
    commit("SET_TOKEN_INSTANCE", payload);
  },
  SET_CONTRACT_INSTANCE({ commit }, payload) {
    commit("SET_CONTRACT_INSTANCE", payload);
  },
};

export default actions;
