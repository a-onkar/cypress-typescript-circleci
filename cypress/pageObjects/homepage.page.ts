class LandingPage {
  private pageTitle = 'what3words /// The simplest way to talk about location';

  // Search realated elements
  private searchBoxHoverText = '[data-testid="ThreeWordAddress-Text"]';
  private searchBox = '[data-testid="SearchPanel-Input"]';
  private addressSearchResultPanel = '[data-testid="SearchPanel-Item"]';
  private addressCodeSearchResult = '[data-testid="ThreeWordAddress-Text"]'; //Multiple elements yielded
  private addressWordSearchResult = '.SearchPanel-LocationLine1'; //Multiple elements yielded
  // Warning Lines
  private warningLine1 = '.SearchPanel-Warning > div > div > div:nth-child(1)';
  private warningLine2 = '.SearchPanel-Warning > div > div > div:nth-child(2)';

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

  removeSearchBoxHoverText(): void {
    cy.get(this.searchBoxHoverText).should('be.visible').click();
  }

  getSearchBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    this.removeSearchBoxHoverText();
    return cy.get(this.searchBox).should('be.visible');
  }

  // This function is used to select address that is searched using 3 words code.
  selectAddressFromCodeSearchResult(address: string): void {
    cy.get(this.addressSearchResultPanel)
      .find(this.addressCodeSearchResult)
      .each(($list, index) => {
        const addrs = $list.text();
        if (addrs === address) {
          cy.get(this.addressSearchResultPanel)
            .find(this.addressCodeSearchResult)
            .eq(index)
            .click();
        }
      });
  }

  // This function is used to select address that is searched using actual Word (not 3 string code).

  selectAddressFromKeywordSearchResult(address: string): void {
    cy.get(this.addressSearchResultPanel)
      .find(this.addressWordSearchResult)
      .should('be.visible')
      .contains(address)
      .parents('button')
      .click();
  }

  verifyWarningLine1Text(text: string): void {
    cy.get(this.warningLine1).should('have.text', text);
  }

  verifyWarningLine2Text(text: string): void {
    cy.get(this.warningLine2).should('have.text', text);
  }
}

export default LandingPage;
