/// <reference types="cypress" />

describe('Add an inspection request and check if its showing on Historic', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Add and inspection request', () => {
    const tooShortRequest = 'tes';
    const tooLongRequest = 'tesjkdskjdijsndjisndijsndijsndijnsidnisndisndisndikdflkdklsnd';
    const formatedText = 'tesjkdskjdijsndjisndijsndijsndij';

    cy.get('h1').should('be.visible').contains('AXUR crawling');
    cy.get('a').first().should('be.visible').contains('Developed by Diego Tauchert');
    cy.get('#powered').should('be.visible').contains('Powered by');
    cy.get('input[placeholder*="Type an inspection request"]').should('be.visible');
    cy.get('input[placeholder*="Type an inspection request"]').should('have.value', '');

    cy.getInputNameAndTypeValue('newRequestToCrawl', tooShortRequest);

    cy.get('#btnSubmit').click();

    cy.get('.alert').first().contains('Error: Input need to be greater than 4').should('be.visible');

    cy.getInputNameAndTypeValue('newRequestToCrawl', tooLongRequest);

    cy.get('input[placeholder*="Type an inspection request"]')
      .should('have.attr', 'minlength', '4')
      .should('have.attr', 'maxlength', '32')
      .invoke('val')
      .then((text) => text[0].length === formatedText.length);

    cy.intercept('POST', '/crawl', {
      body: {"keyword": "security"}
    }).as('postCrawl');
    cy.get('#btnSubmit').click();
    cy.wait('@postCrawl');
  })
})