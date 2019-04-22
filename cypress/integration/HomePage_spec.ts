// HomePage_spec.ts - some cypress tests for our homepage
// documentation: https://docs.cypress.io/guides/tooling/typescript-support.html#Set-up-your-dev-environment


describe('Cypress testing the home page', () => {
  it('should visit the home page', () => {
    cy.visit('http://localhost:4200');
  });

  it('should have the title Welcome to app', () => {
    cy.visit('http://localhost:4200');
    cy.get('h1').contains('Welcome to app')
  });

  describe('Testing the e2e component', () => {
    it('should have the title Example e2e testing component', () => {
      cy.visit('http://localhost:4200');
      cy.get('app-e2e-cmp h1').contains('Example e2e testing component')
    });

    it('should have a default of 1 point', ()=>{
      cy.get('app-e2e-cmp span').contains('1')
    });

    it('should add points when clicked 3 times', ()=>{
      cy.get('app-e2e-cmp button').contains('Plus 1').click();
      cy.get('app-e2e-cmp button').contains('Plus 1').click();
      cy.get('app-e2e-cmp button').contains('Plus 1').click();
      cy.get('app-e2e-cmp span').contains('4')
    });

    it('should reset when clicked', ()=>{
      cy.get('app-e2e-cmp button').contains('Reset').click();
      cy.get('app-e2e-cmp span').contains('0')
    })
  })
});
