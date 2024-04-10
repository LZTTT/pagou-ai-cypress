const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const pgp = require('pg-promise')();
const { db } = require('./dbConfig');

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3333',
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase({ email }) {
          const query = 'SELECT * FROM public.users';
          return db.oneOrNone(query, email);
        },
      });

      on('task', {
        deleteEmailDatabase() {
          const query = "DELETE FROM users WHERE email like 'pagouai@teste.com'";
          return db.oneOrNone(query);
        },
      });

    },
    defaultCommandTimeout: 20000,
  },
};