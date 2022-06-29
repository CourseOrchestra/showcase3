import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import LogoCurs from "@/components/LogoCurs.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("LogoCurs.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Логотип КУРСа", () => {
    const wrapper = shallowMount(LogoCurs, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("curs.ru");
  });
});
