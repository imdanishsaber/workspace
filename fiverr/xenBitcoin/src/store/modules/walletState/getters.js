const getters = {
  getWeb3: (state) => {
    return state.web3;
  },
  getUserAddress: (state) => {
    return state.userAddress;
  },
  ETH_XBTC_INSTANCE: (state) => {
    return state.ETH_XBTC_INSTANCE;
  },
  ETH_USDC_INSTANCE: (state) => {
    return state.ETH_USDC_INSTANCE;
  },
  ETH_CONVERTER_INSTANCE: (state) => {
    return state.ETH_CONVERTER_INSTANCE;
  },
  BSC_XBTC_INSTANCE: (state) => {
    return state.BSC_XBTC_INSTANCE;
  },
  BSC_BUSD_INSTANCE: (state) => {
    return state.BSC_BUSD_INSTANCE;
  },
  BSC_CONVERTER_INSTANCE: (state) => {
    return state.BSC_CONVERTER_INSTANCE;
  },
  PLS_XBTC_INSTANCE: (state) => {
    return state.PLS_XBTC_INSTANCE;
  },
  PLS_USDC_INSTANCE: (state) => {
    return state.PLS_USDC_INSTANCE;
  },
  PLS_PLSB_INSTANCE: (state) => {
    return state.PLS_PLSB_INSTANCE;
  },
  PLS_XEN_INSTANCE: (state) => {
    return state.PLS_XEN_INSTANCE;
  },
  PLS_CONVERTER_INSTANCE: (state) => {
    return state.PLS_CONVERTER_INSTANCE;
  },
  X1_CONVERTER_INSTANCE: (state) => {
    return state.X1_CONVERTER_INSTANCE;
  },
};

export default getters;
