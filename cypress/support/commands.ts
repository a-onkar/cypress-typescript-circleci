import LandingPage from '../pageObjects/landingpage.page';

export {};

const landPageObj = new LandingPage();

declare global {
  namespace Cypress {
    interface Chainable {
      navigateToApplication: typeof navigateToApplication;
    }
  }
}

function navigateToApplication(): void {
  cy.visit('/');
  landPageObj.getAcceptCookiesButton().click();
  landPageObj.getCloseDialogueButton().click();
  landPageObj.getClosePromptButton().click();
}
Cypress.Commands.add('navigateToApplication', navigateToApplication);
