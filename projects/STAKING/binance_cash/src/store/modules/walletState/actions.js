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
  SET_V1_INSTANCE({ commit }, payload) {
    commit("SET_V1_INSTANCE", payload);
  },
  SET_STAKING_INSTANCE({ commit }, payload) {
    commit("SET_STAKING_INSTANCE", payload);
  },
  SET_MIGRATION_INSTANCE({ commit }, payload) {
    commit("SET_MIGRATION_INSTANCE", payload);
  },
  SET_PRICE({ commit }, payload) {
    commit("SET_PRICE", payload);
  }
};

export default actions;
