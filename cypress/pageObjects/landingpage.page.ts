export default class LandingPage {
  private pageTitle: string =
    'what3words /// The simplest way to talk about location';

  verifyPageTitle(): void {
    cy.title().should('eq', this.pageTitle);
  }
}
