import LogoCurs from "@/components/LogoCurs.vue";

describe("LogoCurs.cy.ts", () => {
  it("LogoCurs", () => {
    cy.mount(LogoCurs);
    cy.get("a[href]").each(($el) => {
      cy.wrap($el.attr("href"), { log: false }).should("include", "curs.ru");
    });
  });
});
