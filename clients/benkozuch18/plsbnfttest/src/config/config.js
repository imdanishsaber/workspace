
//import dev_config from "@/config/dev_config.json";
import mainnet_config from "@/config/mainnet_config.json";

const config = mainnet_config; //process.env.VUE_APP_VERCEL_GIT_COMMIT_REF === 'master' || process.env.VUE_APP_VERCEL_GIT_COMMIT_REF === 'mainnet' ? mainnet_config : dev_config;

export default config

