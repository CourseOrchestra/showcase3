import { App } from "vue";
import LogoCurs from "./src/components/LogoCurs.vue";
import LogoPlatform from "./src/components/LogoPlatform.vue";

export default {
  install: (app: App) => {
    app.component("LogoCurs", LogoCurs);
    app.component("LogoPlatform", LogoPlatform);
  },
};

export { LogoCurs, LogoPlatform };
