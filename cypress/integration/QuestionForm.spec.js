/// <reference types="cypress" />

context('QuestionForm', () => {
  beforeEach(() => {
    cy.log('hallo')
    cy.visit('/')
  })

  it('has the right App title', () => {
    cy.title().should('include', 'hello')
  })

  it('has a headline', () => {
    cy.get('h1').should('have.length', 1)
  })

  it('has a button', () => {
    cy.get('button').contains('Zusammenfassung anzeigen')
  })

  it('has questions', () => {
    cy.get('h2').should('have.length.gt', 20)
  })

  it('has some inputs', () => {
    cy.get('input').should('have.length', 54)
  })
})
