const actions = {
  SET_WEB3({ commit }, payload) {
    commit("SET_WEB3", payload);
  },
  SET_USER_ADDRESS({ commit }, payload) {
    commit("SET_USER_ADDRESS", payload);
  },
  SET_ETH_XBTC_INSTANCE({ commit }, payload) {
    commit("SET_ETH_XBTC_INSTANCE", payload);
  },
  SET_ETH_USDC_INSTANCE({ commit }, payload) {
    commit("SET_ETH_USDC_INSTANCE", payload);
  },
  SET_ETH_CONVERTER_INSTANCE({ commit }, payload) {
    commit("SET_ETH_CONVERTER_INSTANCE", payload);
  },
  SET_BSC_XBTC_INSTANCE({ commit }, payload) {
    commit("SET_BSC_XBTC_INSTANCE", payload);
  },
  SET_BSC_BUSD_INSTANCE({ commit }, payload) {
    commit("SET_BSC_BUSD_INSTANCE", payload);
  },
  SET_BSC_CONVERTER_INSTANCE({ commit }, payload) {
    commit("SET_BSC_CONVERTER_INSTANCE", payload);
  },
  SET_PLS_XBTC_INSTANCE({ commit }, payload) {
    commit("SET_PLS_XBTC_INSTANCE", payload);
  },
  SET_PLS_USDC_INSTANCE({ commit }, payload) {
    commit("SET_PLS_USDC_INSTANCE", payload);
  },
  SET_PLS_PLSB_INSTANCE({ commit }, payload) {
    commit("SET_PLS_PLSB_INSTANCE", payload);
  },
  SET_PLS_XEN_INSTANCE({ commit }, payload) {
    commit("SET_PLS_XEN_INSTANCE", payload);
  },
  SET_PLS_CONVERTER_INSTANCE({ commit }, payload) {
    commit("SET_PLS_CONVERTER_INSTANCE", payload);
  },
  SET_X1_CONVERTER_INSTANCE({ commit }, payload) {
    commit("SET_X1_CONVERTER_INSTANCE", payload);
  },
};

export default actions;
