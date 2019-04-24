describe('End to End Tests', function() {
  it('Logs in', function() {
    cy.visit('/login', { timeout: 5000 });
    cy.get('button').click({ position: 'topLeft' });
  })
})