/// <reference types="cypress" />

context('QuestionForm', () => {
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
    cy.get('button').contains('Zusammenfassung anzeigen').click()
  })

  it('has more than 20 questions', () => {
    cy.get('h2').should('have.length.gt', 20)
  })

  it('has some inputs', () => {
    cy.get('input').should('have.length.gt', 20)
  })

  it('shows text input in question no. 1', () => {
    cy.get('label')
      .contains('Name des Vereins')
      .get('input[id=clubName]')
      .type('Testverein')
  })

  it('shows text input in question no. 2', () => {
    cy.get('label')
      .contains('Stadt')
      .get('input[id=clubLocation]')
      .type('Teststadt')
      .should('have.value', 'Teststadt')
  })

  it('shows number input in question no. 9', () => {
    cy.get('label')
      .contains('Wie viele Tage vorher soll zur Mitgliederversammlung')
      .get('input[id=generalMeetingDeadline]')
      .type('15')
      .parents()
      .get('button')
      .click()
  })

  it.only('shows all answers in the summary', () => {
    cy.get('input[id=1]')
      .type('Cypress Testverein')
      .get('input[id=2]')
      .type('Hamburg')
      .get('input[id=3]')
      .type('testen')
      .get('input[id=inner1]')
      .click()
      .get('input[id=inner2]')
      .click()
  })
})
