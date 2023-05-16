import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 720,
    viewportWidth: 1366,
    chromeWebSecurity: false,
    video: false,
    retries: 1,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000,
    requestTimeout: 50000,
    responseTimeout: 50000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
