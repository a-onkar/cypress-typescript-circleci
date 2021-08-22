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
    landPageObj.getSearchBox().type(testdata.codeAddress);
    landPageObj.selectAddressFromCodeSearchResult(testdata.codeAddress);
    actionsObj.getShareTab().click();

    // Setting permission in browser to read copied text. This line should be commented while running on CircleCI.
    // cy.wrap(
    //   Cypress.automation('remote:debugger:protocol', {
    //     command: 'Browser.grantPermissions',
    //     params: {
    //       permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
    //       origin: window.location.origin,
    //     },
    //   })
    // );

    // Cliking the Copy button
    actionsObj.getCopyIcon().click();
    // Giving permission to read clipboard
    cy.window()
      .its('navigator.permissions')
      .invoke('query', { name: 'clipboard-read' })
      .its('state')
      .then(cy.log);
    // Reading the text copied in clipboard
    cy.window()
      .its('navigator.clipboard')
      .invoke('readText')
      .should('equal', 'https://w3w.co/certified.potato.vine');
    //  Share settings link & text
    actionsObj
      .getShareSettingsLink()
      .should('have.text', 'Customise share settings');
    //  Facebook button & text
    actionsObj
      .getFacebookIcon()
      .children('div')
      .should('have.text', 'Facebook');
    //  Whatsapp button & text
    actionsObj
      .getWhatsAppIcon()
      .children('div')
      .should('have.text', 'Whatsapp');
    //  Twitter button & text
    actionsObj.getTwitterIcon().children('div').should('have.text', 'Twitter');
    //  Copy Link button & text
    actionsObj
      .getCopyLinkIcon()
      .children('div')
      .should('have.text', 'Copy Link');
    //  Email button & text
    actionsObj.getEmailIcon().children('div').should('have.text', 'Email');
  });
});
