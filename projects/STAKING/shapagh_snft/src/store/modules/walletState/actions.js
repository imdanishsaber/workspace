const actions = {
  SET_WEB3({ commit }, payload) {
    commit("SET_WEB3", payload);
  },
  SET_METAMASK_ACCOUNT({ commit }, payload) {
    commit("SET_METAMASK_ACCOUNT", payload);
  },
  SET_NFT_INSTANCE({ commit }, payload) {
    commit("SET_NFT_INSTANCE", payload);
  },
  SET_STAKING_INSTANCE({ commit }, payload) {
    commit("SET_STAKING_INSTANCE", payload);
  }
};

export default actions;
