/// <reference types="cypress" />

describe('Add an inspection request and check if its showing on Historic', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should handle errors in POST requests', () => {
    cy.getInputNameAndTypeValue('newRequestToCrawl', 'posting');
    
    cy.intercept('POST', '/crawl', async (req) => {
      req.body = 'a'
    }).as('postCrawlWithError');

    cy.get('#btnSubmit').click();
    
    cy.wait('@postCrawlWithError').then((interception) => {
      expect(interception.response.statusCode).to.eq(400);
    })

    cy.get('.alert').first().contains('Error: Request not saved').should('be.visible');
  });
});