/// <reference types="cypress" />

Cypress.Commands.add('getInputNameAndTypeValue', (name, value) => cy.get(`[name="${name}"]`).should('be.visible').clear().focus().type(value).blur());
