import LogoPlatform from "@/components/LogoPlatform.vue";

describe("LogoPlatform.cy.ts", () => {
  it("LogoPlatform", () => {
    cy.mount(LogoPlatform);
    cy.get("a[href]").each(($el) => {
      cy.wrap($el.attr("href"), { log: false }).should(
        "include",
        "corchestra.ru"
      );
    });
  });
});
