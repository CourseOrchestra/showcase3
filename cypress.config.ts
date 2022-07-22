import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "tests/cypress/fixtures",
  screenshotsFolder: "tests/cypress/screenshots",
  videosFolder: "tests/cypress/videos",

  component: {
    supportFile: "tests/cypress/support/component.ts",
    specPattern: "tests/cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    indexHtmlFile: "tests/cypress/support/component-index.html",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
