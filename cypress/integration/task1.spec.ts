import HeaderMenuPage from '../pageObjects/header-menu.page';
import Homepage from '../pageObjects/homepage.page';

describe('Task 1: Functional automation for web UI testing using Cypress', () => {
  const headerMenuObj = new HeaderMenuPage();
  let testdata: any;

  beforeEach(() => {
    cy.fixture('test-data').then((data) => (testdata = data));
  });

  it('TC_01', () => {
    cy.navigateToApplication();
    headerMenuObj.getSearchBox().type(testdata.codeAddress);
    headerMenuObj.selectAddressFromCodeSearchResult(testdata.codeAddress);
    cy.screenshot();
  });

  it('TC_02', () => {
    cy.navigateToApplication();
    headerMenuObj.getSearchBox().type('Tower Bridge'); //Partial text so did not use fixtures
    headerMenuObj.selectAddressFromKeywordSearchResult('Tower Bridge hotel');
    cy.screenshot();
  });

  it('TC_03', () => {
    cy.navigateToApplication();
    headerMenuObj.getHeaderMenuButton().click();
    headerMenuObj.getLanguageSelection().click();
    headerMenuObj.selectLanguage('Deutsch');
    headerMenuObj.getHeaderMenuCloseButton();
    headerMenuObj.getSearchBox().type('51.521251, -0.20358600');
    headerMenuObj.selectAddressFromKeywordSearchResult('welche.tischtennis.bekannte');
    cy.screenshot();
  });

  it('TC_04', () => {
    cy.navigateToApplication();
    headerMenuObj.getSearchBox().type('hear.limited.frown.know');
    headerMenuObj.verifyWarningLine1Text('No address found.');
    headerMenuObj.verifyWarningLine2Text('Please try searching for the town or nearby place and zoom in to find the what3words address.');
    cy.screenshot();
  });
});
