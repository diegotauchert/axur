/// <reference types="cypress" />

const tooShortRequest:string = 'tes';
const tooLongRequest:string = 'tesjkdskjdijsndjisndijsndijsndijnsidnisndisndisndikdflkdklsnd';
const formattedText:string = 'tesjkdskjdijsndjisndijsndijsndij';
const crawlerId:string = 'OKYCzBz5';

describe('Add an inspection request and check if its showing on Historic', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Add and inspection request', () => {
    cy.get('h1').should('be.visible').contains('AXUR / crawling');
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
      .then((text) => text[0].length === formattedText.length);

    cy.intercept('POST', '/crawl', async (req) => {
      req.reply({
        status: 200,
        body: {
          id: crawlerId
        },
      });
    }).as('postCrawl');

    cy.get('#btnSubmit').click();
    
    cy.wait('@postCrawl').then((interception) => {
      expect(interception.response.body).property('id').to.equal(crawlerId)
    });
    cy.get('.alert').first().contains('Saved with success').should('be.visible');
    cy.get('[href="/"]').should('have.class', 'active');
    cy.get('[href="/historic"]').click();
    cy.get('[href="/"]').should('not.have.class', 'active');
    cy.get('[href="/historic"]').should('have.class', 'active');

    cy.intercept('GET', '/crawl/**').as('getCrawl');
    cy.wait('@getCrawl');
    
    cy.get('h1').should('be.visible').contains(/Historic/i);

    cy.get('table').contains('th', 'ID').should('be.visible');
    cy.get('table').contains('th', 'Term').should('be.visible');
    cy.get('table').contains('th', 'Date').should('be.visible');
    cy.get('table').contains('th', 'Status').should('be.visible');
    cy.get('table').contains('th', 'URLs').should('be.visible');

    cy.get('table').contains('td', crawlerId).should('be.visible');
    cy.get('table').contains('td', formattedText).should('be.visible').click();

    cy.get('h2').should('be.visible').contains(`ID: #${crawlerId}`);
    cy.get('#btnBack').should('be.visible').click();
  });
});