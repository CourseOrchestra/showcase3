import LogoCurs from "./src/components/LogoCurs.vue";
import LogoPlatform from "./src/components/LogoPlatform.vue";

export const showcase2 = {
  install(Vue) {
    Vue.component("LogoCurs", LogoCurs);
    Vue.component("LogoPlatform", LogoPlatform);
  },
};

export { LogoCurs };
export { LogoPlatform };
