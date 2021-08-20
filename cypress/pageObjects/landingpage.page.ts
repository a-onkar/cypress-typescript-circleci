class LandingPage {
  private pageTitle = 'what3words /// The simplest way to talk about location';
  private searchBox = '[data-testid="SearchPanel-Input"]';
  private searchBoxHoverText = '[data-testid="ThreeWordAddress-Text"]';
  private headerMenu = '[data-testid="HeaderMenu-Menu_open"]';

  //   Handling cookies
  private acceptCookiesButton = '[data-testid="AcceptAll"]';
  private onBoardDailogClose = '[data-testid="OnboardingDialog-Skip"]';
  private promptCloseButton = '[data-testid="OnboardingPrompt-CloseButton"]';

  verifyPageTitle(): void {
    cy.title().should('eq', this.pageTitle);
  }

  getAcceptCookiesButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.acceptCookiesButton).should('be.visible');
  }

  getCloseDialogueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.onBoardDailogClose).should('be.visible');
  }

  getClosePromptButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.promptCloseButton).should('be.visible');
  }

  removeSearchBoxHoverText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.searchBoxHoverText).should('be.visible').click();
  }

  getSearchBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    this.removeSearchBoxHoverText();
    return cy.get(this.searchBox).should('be.visible');
  }

  getHeaderMenuButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.headerMenu).should('be.visible');
  }
}

export default LandingPage;
