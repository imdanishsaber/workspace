const actions = {
  SET_WEB3({ commit }, payload) {
    commit("SET_WEB3", payload);
  },
  SET_LOADING({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
  SET_USER_ADDRESS({ commit }, payload) {
    commit("SET_USER_ADDRESS", payload);
  },
  SET_RIDE_INSTANCE({ commit }, payload) {
    commit("SET_RIDE_INSTANCE", payload);
  },
  SET_LOCK_INSTANCE({ commit }, payload) {
    commit("SET_LOCK_INSTANCE", payload);
  },
  SET_MINTING_INSTANCE({ commit }, payload) {
    commit("SET_MINTING_INSTANCE", payload);
  },
  SET_USDC_INSTANCE({ commit }, payload) {
    commit("SET_USDC_INSTANCE", payload);
  },
  SET_HEX_INSTANCE({ commit }, payload) {
    commit("SET_HEX_INSTANCE", payload);
  },
  SET_eHEX_INSTANCE({ commit }, payload) {
    commit("SET_eHEX_INSTANCE", payload);
  },
  SET_PLSX_INSTANCE({ commit }, payload) {
    commit("SET_PLSX_INSTANCE", payload);
  },
};

export default actions;
