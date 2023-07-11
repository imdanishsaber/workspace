import dev_config from "@/config/dev_config.json";
//import sepolia_config from "@/config/sepolia_config.json";
// import mainnet_config from "@/config/mainnet_config.json";

const config =
  process.env.VUE_APP_VERCEL_GIT_COMMIT_REF === "main" ||
  process.env.VUE_APP_VERCEL_GIT_COMMIT_REF === "mainnet"
    ? dev_config
    : dev_config;

export default config;
