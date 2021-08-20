export {};

// Different ways to Declare & Define custom commands

declare global {
  namespace Cypress {
    interface Chainable {
      navigateToApplication: typeof navigateToApplication;
    }
  }
}

function navigateToApplication(): void {
  cy.visit('/')
}
Cypress.Commands.add('navigateToApplication', navigateToApplication);
