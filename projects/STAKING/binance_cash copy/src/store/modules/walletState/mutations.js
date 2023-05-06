const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_USER_ADDRESS: (state, payload) => {
    state.userAddress = payload;
  },
  SET_V1_INSTANCE: (state, payload) => {
    state.v1Instance = payload;
  },
  SET_TOKEN_INSTANCE: (state, payload) => {
    state.tokenInstance = payload;
  },
  SET_STAKING_INSTANCE: (state, payload) => {
    state.stakingInstance = payload;
  },
  SET_MIGRATION_INSTANCE: (state, payload) => {
    state.migrationInstance = payload;
  },
  SET_PRICE: (state, payload) => {
    state.price = payload;
  },
};

export default mutations;
