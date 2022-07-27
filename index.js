import LogoCurs from "./src/components/LogoCurs.vue";
import LogoPlatform from "./src/components/LogoPlatform.vue";

export default {
  install: (app) => {
    app.component("LogoCurs", LogoCurs);
    app.component("LogoPlatform", LogoPlatform);
  },
};

export { LogoCurs, LogoPlatform };
