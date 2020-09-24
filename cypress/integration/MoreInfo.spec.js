/// <reference types="cypress" />

context('Bylawstext', () => {
  beforeEach(() => {
    cy.visit('/bylawstext')
  })

  it('shows more information when clicking the corresponding info button', () => {
    cy.visit('/questions/1')

    cy.get('span').contains('Mehr Infos').click()
    cy.get('p').contains('unmissverständlich')
    cy.get('span').contains('Weniger Infos').click().contains('Mehr Infos')
  })
})
