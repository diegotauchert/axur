declare namespace Cypress {
  interface Chainable {
    
    /**
     * @example cy.getInputNameAndTypeValue('newRequestToCrawl', 'security')
     */
    getInputNameAndTypeValue(name: string, value: string): void;
  }
}