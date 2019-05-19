// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { exec } = require('child_process');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    'e2e-seed-db': () => {
      console.log(`echo ------- running e2e unseed -------`);
      exec(`npx sequelize db:seed:undo --seed 20190506113929-e2e-data.js`, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return err;
        }
        console.log(`echo ------- running e2e seed -------`);
          exec(`npx sequelize db:seed --seed 20190506113929-e2e-data.js`, (e, stdo, stde) => {
            if (e) {
              console.error(e);
              return e;
            }
            console.log(stdo);
        });
        console.log(stdout);
      });
      return true;
    }
  })
}
