describe('End to End Tests', function() {
  it('Logs in', function() {
    cy.login('foo', 'bar');
    cy.get('li.book').should('have.length', 3);
  });
});