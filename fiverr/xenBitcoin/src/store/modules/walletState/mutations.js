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
  SET_RIDE_INSTANCE: (state, payload) => {
    state.RIDEInstance = payload;
  },
  SET_LOCK_INSTANCE: (state, payload) => {
    state.LOCKInstance = payload;
  },
  SET_MINTING_INSTANCE: (state, payload) => {
    state.MINTINGInstance = payload;
  },
  SET_USDC_INSTANCE: (state, payload) => {
    state.USDCInstance = payload;
  },
  SET_HEX_INSTANCE: (state, payload) => {
    state.HEXInstance = payload;
  },
  SET_eHEX_INSTANCE: (state, payload) => {
    state.eHEXInstance = payload;
  },
  SET_PLSX_INSTANCE: (state, payload) => {
    state.PLSXInstance = payload;
  },
};

export default mutations;
