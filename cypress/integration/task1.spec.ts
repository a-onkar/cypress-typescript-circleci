describe('Task 1: Functional automation for web UI testing using Cypress', () => {

  before(() => {
    cy.clearCookies();
  });

  let testdata: any;
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.fixture('example').then((data) => (testdata = data));
  });

  it('TC_01', () => {
    
  });
});
