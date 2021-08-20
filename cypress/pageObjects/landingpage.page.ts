export default class LandingPage {
  private pageTitle = 'what3words /// The simplest way to talk about location';
  private searchBox = '[data-testid="SearchPanel-Input"]';
  private headerMenu = '[data-testid="HeaderMenu-Menu_open"]';

  verifyPageTitle(): void {
    cy.title().should('eq', this.pageTitle);
  }

  getSearchBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.searchBox).should('be.visible');
  }

  getHeaderMenuButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.headerMenu).should('be.visible');
  }
}
