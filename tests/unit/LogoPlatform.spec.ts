import { describe, it, expect } from "vitest";
import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import LogoPlatform from "@/components/LogoPlatform.vue";

const vuetify = createVuetify();

describe("LogoPlatform.vue", () => {
  it("Логотип Платформы", () => {
    const wrapper = mount(LogoPlatform, {
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.html()).toContain("corchestra.ru");
  });
});
