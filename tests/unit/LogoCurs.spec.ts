import { describe, it, expect } from "vitest";
import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import LogoCurs from "@/components/LogoCurs.vue";

const vuetify = createVuetify();

describe("LogoCurs.vue", () => {
  it.skip("Логотип КУРСа", () => {
    const wrapper = mount(LogoCurs, {
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.html()).toContain("curs.ru");
  });
});
