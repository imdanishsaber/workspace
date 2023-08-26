const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_USER_ACCOUNT: (state, payload) => {
    state.userAccount = payload;
  },
  SET_EBRYINSTANCE: (state, payload) => {
    state.EBRYInstance = payload;
  },
  SET_INSTANCE: (state, payload) => {
    state.instance = payload;
  },
  SET_REFERRAL: (state, payload) => {
    state.referral = payload;
  },
};

export default mutations;
