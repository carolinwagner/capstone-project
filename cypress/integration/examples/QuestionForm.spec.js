/// <reference types="cypress" />

context('QuestionForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
})

it('has the right App title', () => {
  cy.title().should('contain.text', 'hello bylaws')
})
