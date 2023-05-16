import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportHeight: 720,
    viewportWidth: 1366,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});