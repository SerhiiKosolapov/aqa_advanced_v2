describe('Rozetka test', () => {
  it('should open homepage', () => {
    cy.visit('https://rozetka.com.ua/');
    cy.contains('Пошук').should('exist');
  });
});