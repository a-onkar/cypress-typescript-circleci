import ActionsTab from '../pageObjects/actions-tab.page';
import LandingPage from '../pageObjects/homepage.page';

describe('Task 2: Share - action tab functionality testing using Cypress', () => {
  const landPageObj = new LandingPage();
  const actionsObj = new ActionsTab();
  let testdata: any;
  beforeEach(() => {
    cy.fixture('test-data').then((data) => (testdata = data));
  });

  it('TC_05', () => {
    cy.navigateToApplication();
    landPageObj.getSearchBox().type(testdata.address1);
    landPageObj.selectAddressFromSearchResult(testdata.address1);
    actionsObj.getShareButton().click();

    // Setting permission in browser to read cpoied text
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Browser.grantPermissions',
        params: {
          permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
          origin: window.location.origin,
        },
      })
    );
    actionsObj.getCopyButton().click();
    cy.window()
      .its('navigator.permissions')
      .invoke('query', { name: 'clipboard-read' })
      .its('state')
      .then(cy.log);
    cy.window()
      .its('navigator.clipboard')
      .invoke('readText')
      .should('equal', 'https://w3w.co/certified.potato.vine');
  });
});
