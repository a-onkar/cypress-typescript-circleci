import HeaderMenuPage from '../pageObjects/header-menu.page';
import LandingPage from '../pageObjects/homepage.page';

describe('Task 1: Functional automation for web UI testing using Cypress', () => {
  const landPageObj = new LandingPage();
  const headerMenuObj = new HeaderMenuPage();
  let testdata: any;

  beforeEach(() => {
    cy.fixture('test-data').then((data) => (testdata = data));
  });

  it('TC_01', () => {
    cy.navigateToApplication();
    landPageObj.getSearchBox().type(testdata.address1);
    landPageObj.selectAddressFromSearchResult(testdata.address1);
    cy.screenshot();
  });

  it('TC_02', () => {
    cy.navigateToApplication();
    landPageObj.getSearchBox().type('Tower Bridge'); //Partial text so did not use fixtures
    landPageObj.selectAddressFromSearchPanel('Tower Bridge hotel');
    cy.screenshot();
  });

  it('TC_03', () => {
    cy.navigateToApplication();
    headerMenuObj.getHeaderMenuButton().click();
    headerMenuObj.getLanguageSelection().click();
    headerMenuObj.selectLanguage(testdata.language.German);
    headerMenuObj.getHeaderMenuCloseButton();
    landPageObj.getSearchBox().type('51.521251, -0.20358600');
    landPageObj.selectAddressFromSearchPanel('welche.tischtennis.bekannte');
    cy.screenshot();
  });

  it('TC_04', () => {
    cy.navigateToApplication();
    landPageObj.getSearchBox().type('hear.limited.frown.know');
    landPageObj.verifyWarningLine1Text('No address found.');
    landPageObj.verifyWarningLine2Text('Please try searching for the town or nearby place and zoom in to find the what3words address.');
    cy.screenshot();
  });
});
