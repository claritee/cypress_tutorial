describe('API Tests', function() {
  beforeEach(() => {
    console.log('before all');
    cy.exec('npx sequelize db:seed:undo --seed 20190506113929-e2e-data.js');
    cy.exec('npx sequelize db:seed --seed 20190506113929-e2e-data.js');
  });

  it('books api', function() {
    cy
      .request(Cypress.env('host') + '/api/books', { timeout: 5000 })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(3);
      });
  });
});