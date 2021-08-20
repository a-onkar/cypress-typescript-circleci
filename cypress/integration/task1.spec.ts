import LandingPage from '../pageObjects/landingpage.page';

describe('Task 1: Functional automation for web UI testing using Cypress', () => {
  const landPageObj = new LandingPage();
  let testdata: any;
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.fixture('test-data').then((data) => (testdata = data));
  });

  it('TC_01', () => {
    cy.navigateToApplication();
    landPageObj.getSearchBox().type('certified.potato.vine');
  });
});