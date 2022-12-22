const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    defaultCommandTimeout: 5000,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
