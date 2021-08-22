import Homepage from "./homepage.page";

export default class ActionsTab extends Homepage {
  shareTab: string;
  shareDescription: string;
  copyIcon: string;
  shareSettingsLink: string;
  facebookIcon: string;
  whatsappIcon: string;
  twitterIcon: string;
  copyLinkIcon: string;
  emailIcon: string;
  navigateTab: string;
  saveTab: string;

  constructor() {
    super();
    // Share tab elements
    this.shareTab = '[data-testid="ActionPanel-Share"]';
    this.shareDescription = '[data-testid="share-description"]';
    this.copyIcon = '.CopyTextIcon > Icon';
    this.shareSettingsLink = '[data-testid="ShareContentDefault-Link"]';
    this.facebookIcon = '[data-testid="IconIcon-facebook"]';
    this.whatsappIcon = '[data-testid="IconIcon-whatsapp"]';
    this.twitterIcon = '[data-testid="IconIcon-twitter"]';
    this.copyLinkIcon = '[data-testid="IconIcon-link"]';
    this.emailIcon = '[data-testid="IconIcon-email"]';
    // Navigate tab
    this.navigateTab = '[data-testid="ActionPanel-Navigate"]';
    // Save tab
    this.saveTab = '[data-testid="ActionPanel-Save"]';
  }

  getShareTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.shareTab).should('be.visible');
  }

  getCopyIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(this.shareDescription)
      .next('li')
      .find(this.copyIcon)
      .should('be.visible');
  }

  getShareSettingsLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.shareSettingsLink).should('be.visible');
  }

  getFacebookIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.facebookIcon).should('be.visible');
  }

  getWhatsAppIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.whatsappIcon).should('be.visible');
  }

  getTwitterIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.twitterIcon).should('be.visible');
  }

  getCopyLinkIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.copyLinkIcon).should('be.visible');
  }

  getEmailIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.emailIcon).should('be.visible');
  }

  getnavigateTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.navigateTab).should('be.visible');
  }

  getsaveTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.saveTab).should('be.visible');
  }
}
