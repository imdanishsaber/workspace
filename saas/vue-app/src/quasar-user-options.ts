import "./styles/quasar.scss";
import { Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify: {
      timeout: 2000,
      progress: true,
      position: "bottom",
    },
  },
  plugins: {
    Notify,
  },
};
