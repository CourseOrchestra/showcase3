/*


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

*/

import LogoCurs from "./src/components/LogoCurs.vue";
import LogoPlatform from "./src/components/LogoPlatform.vue";

export declare const createShowcase3: () => {
  install: (app: App) => void;
};

export { LogoCurs };
export { LogoPlatform };

/*
export {createShowcase3}
    declare module 'showcase3' {
    import Vue from 'vue';
    class LogoCurs extends Vue { }
    class LogoPlatform extends Vue { }
    export { LogoCurs, LogoPlatform }
*/
