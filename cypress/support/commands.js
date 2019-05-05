// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('login', (username, password) => {
  // go to login page
  cy.visit('/login', { timeout: 10000 });

  // enter required fields and submit
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('[data-cy=login]').click({ position: 'topLeft' });
});
