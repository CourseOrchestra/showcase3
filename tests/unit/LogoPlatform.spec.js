import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import LogoPlatform from "@/components/LogoPlatform.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("LogoPlatform.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Логотип КУРСа", () => {
    const wrapper = shallowMount(LogoPlatform, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("corchestra.ru");
  });
});
