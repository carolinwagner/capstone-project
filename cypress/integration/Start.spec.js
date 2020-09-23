/// <reference types="cypress" />

context('Start', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the right App title', () => {
    cy.title().should('include', 'hello')
  })

  it('has a headline', () => {
    cy.get('h1').should('have.length', 1)
  })

  it('has a button', () => {
    cy.get('button').contains('Zu den Fragen')
  })

  it('checks navigation to questions page when clicking on button', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/questions/1')
  })
})
