describe('API Tests', function() {
  beforeEach(() => {
    console.log('before all');
    cy.task('e2e-seed-db', null, { timeout: 20000 });
  });

  it('books api', function() {
    cy
      .request(Cypress.env('host') + '/api/books', { timeout: 5000 })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(4);
      });
  });
});