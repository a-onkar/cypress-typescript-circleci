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
    landPageObj.getSearchBox().type(testdata.address1);
    landPageObj.selectAddressFromSearchResult(testdata.address1);
  });

  it('TC_02', () => {
    cy.navigateToApplication();
    landPageObj.getSearchBox().type('Tower Bridge');
    landPageObj.selectAddressFromSearchPanel('Tower Bridge hotel');
  });

  it('TC_03', () => {
    cy.navigateToApplication();
    landPageObj.getHeaderMenuButton().click()
    landPageObj.getLanguageSelection().click()
    landPageObj.selectLanguage(testdata.language.German)
    landPageObj.getHeaderMenuCloseButton();
    landPageObj.getSearchBox().type('51.521251, -0.20358600');
    landPageObj.selectAddressFromSearchPanel('welche.tischtennis.bekannte');
  });
});
