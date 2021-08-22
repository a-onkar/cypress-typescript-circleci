import Homepage from "./homepage.page";

class HeaderMenuPage extends Homepage{
  headerMenu: string;
  headerMenuCloseButton: string;
  languageSelection: string;

  constructor() {
    super();
    this.headerMenu = '[data-testid="HeaderMenu-Menu_open"]';
    this.headerMenuCloseButton = '[data-testid="HeaderMenu-Menu_close"]';
    this.languageSelection = '[data-testid="ThreeWordsLanguage"]';
  }

  getHeaderMenuButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.headerMenu).should('be.visible');
  }

  getLanguageSelection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.languageSelection).should('be.visible');
  }

  selectLanguage(name: string): void {
    cy.get(`[data-testid="Language-${name}"]`).should('be.visible').click();
  }

  getHeaderMenuCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.headerMenuCloseButton).should('be.visible');
  }
}

export default HeaderMenuPage;
