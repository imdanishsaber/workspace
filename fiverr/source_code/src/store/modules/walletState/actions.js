const actions = {
  SET_WEB3({ commit }, payload) {
    commit("SET_WEB3", payload);
  },
  SET_USER_ACCOUNT({ commit }, payload) {
    commit("SET_USER_ACCOUNT", payload);
  },
  SET_REFERRAL({ commit }, payload) {
    commit("SET_REFERRAL", payload);
  },
  SET_INSTANCE({ commit }, payload) {
    commit("SET_INSTANCE", payload);
  },
  SET_EBRYINSTANCE({ commit }, payload) {
    commit("SET_EBRYINSTANCE", payload);
  },
};

export default actions;
