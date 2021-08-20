class HeaderMenuPage {
  
  private headerMenu = '[data-testid="HeaderMenu-Menu_open"]';
  private languageSelection = '[data-testid="ThreeWordsLanguage"]';
  private headerMenuCloseButton = '[data-testid="HeaderMenu-Menu_close"]';

  
  getHeaderMenuButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.headerMenu).should('be.visible');
  }

  getLanguageSelection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.languageSelection).should('be.visible');
  }

  selectLanguage(name: string): void {
    cy.get(name).should('be.visible').click();
  }

  getHeaderMenuCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.headerMenuCloseButton).should('be.visible');
  }

}

export default HeaderMenuPage;
