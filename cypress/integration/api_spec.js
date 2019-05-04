describe('API Tests', function() {
  it('books api', function() {
    cy
      .request(Cypress.env('host') + '/api/books', { timeout: 5000 })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(3);
      });
  });
});