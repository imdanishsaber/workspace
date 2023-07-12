const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_USER_ADDRESS: (state, payload) => {
    state.userAddress = payload;
  },
  SET_ETH_XBTC_INSTANCE: (state, payload) => {
    state.ETH_XBTC_INSTANCE = payload;
  },
  SET_ETH_USDC_INSTANCE: (state, payload) => {
    state.ETH_USDC_INSTANCE = payload;
  },
  SET_ETH_CONVERTER_INSTANCE: (state, payload) => {
    state.ETH_CONVERTER_INSTANCE = payload;
  },
  SET_BSC_XBTC_INSTANCE: (state, payload) => {
    state.BSC_XBTC_INSTANCE = payload;
  },
  SET_BSC_BUSD_INSTANCE: (state, payload) => {
    state.BSC_BUSD_INSTANCE = payload;
  },
  SET_BSC_CONVERTER_INSTANCE: (state, payload) => {
    state.BSC_CONVERTER_INSTANCE = payload;
  },
  SET_PLS_XBTC_INSTANCE: (state, payload) => {
    state.PLS_XBTC_INSTANCE = payload;
  },
  SET_PLS_USDC_INSTANCE: (state, payload) => {
    state.PLS_USDC_INSTANCE = payload;
  },
  SET_PLS_PLSB_INSTANCE: (state, payload) => {
    state.PLS_PLSB_INSTANCE = payload;
  },
  SET_PLS_XEN_INSTANCE: (state, payload) => {
    state.PLS_XEN_INSTANCE = payload;
  },
  SET_PLS_CONVERTER_INSTANCE: (state, payload) => {
    state.PLS_CONVERTER_INSTANCE = payload;
  },
  SET_X1_CONVERTER_INSTANCE: (state, payload) => {
    state.X1_CONVERTER_INSTANCE = payload;
  },
};

export default mutations;
