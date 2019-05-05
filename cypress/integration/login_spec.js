describe('Login Tests', function() {
  it('Logs in', function() {
    cy.login('foo', 'bar');
    cy.get('li.book').should('have.length', 3);
  });

  it('unable to login with incorrect credentials', function() {
    cy.login('xxx', 'yyy');
    cy.get('li.book').should('have.length', 0);
  });
});