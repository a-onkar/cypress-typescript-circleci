export default class ActionsTab {
    // Share tab elements
    private shareButton = '[data-testid="ActionPanel-Share"]';
    private shareDescription = '[data-testid="share-description"]';
    private copyButton = '.CopyTextButton > button';
    private shareSettingsLink = '[data-testid="ShareContentDefault-Link"]';
    private facebookButton = '[data-testid="ButtonIcon-facebook"]';
    private whatsappButton = '[data-testid="ButtonIcon-whatsapp"]';
    private twitterButton = '[data-testid="ButtonIcon-twitter"]';
    private copyLinkButton = '[data-testid="ButtonIcon-link"]';
    private emailButton = '[data-testid="ButtonIcon-twitter"]';
  
    // Navigate tab elements
    private navigateButton = '[data-testid="ActionPanel-Navigate"]';
    // Save tab elements
    private saveButton = '[data-testid="ActionPanel-Save"]';
  
    getShareButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.shareButton).should('be.visible');
    }
  
    getNavigateButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.navigateButton).should('be.visible');
    }
  
    getSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.saveButton).should('be.visible');
    }
  
    getCopyButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy
        .get(this.shareDescription)
        .next('li')
        .find(this.copyButton)
        .should('be.visible');
    }
  
    getShareSettingsLink(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.shareSettingsLink).should('be.visible');
    }
  
    getFacebookButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.facebookButton).should('be.visible');
    }
  
    getWhatsAppButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.whatsappButton).should('be.visible');
    }
  
    getTwitterButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.twitterButton).should('be.visible');
    }
  
    getCopyLinkButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.copyLinkButton).should('be.visible');
    }
  
    getEmailButton(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(this.emailButton).should('be.visible');
    }
  }
  