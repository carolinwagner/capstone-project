/// <reference types="cypress" />

context('QuestionForm', () => {
  beforeEach(() => {
    cy.visit('/questions/1')
  })

  it('has the right App title', () => {
    cy.title().should('include', 'hello')
  })

  it('has a headline', () => {
    cy.get('h1').should('have.length', 1)
  })

  it('has a button', () => {
    cy.get('button').contains('weiter')
    cy.get('button').contains('zur Startseite')
  })

  it('can fill out and answer all inputs', () => {
    //Question 1
    cy.get('label')
      .contains('Name des Vereins')
      .siblings('input')
      .type('Carolin')
    cy.get('button').contains('weiter').click()

    //Question 2
    cy.get('label').contains('Stadt').siblings('input').type('Hamburg')
    cy.get('button').contains('weiter').click()

    //Question 3
    cy.get('label').contains('Zweck').siblings('input').type('testen')
    cy.get('button').contains('weiter').click()

    //Question 4
    cy.get('label')
      .contains('Wer soll Mitglied')
      .closest('div')
      .find('label')
      .contains('Personengesellschaften')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 5
    cy.get('label')
      .contains('Mitgliedsantrag')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()
    cy.get('label').contains('per E-Mail').click()
    cy.get('button').contains('weiter').click()

    //Question 6
    cy.get('label')
      .contains('Aufnahmegebühr')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 7
    cy.get('label')
      .contains('Mitgliedsbeitrag')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 8
    cy.get('label')
      .contains('Belange soll die Mitgliedsversammlung')
      .closest('div')
      .find('label')
      .contains('Entlastung')
      .click()
    cy.get('label').contains('Haushaltsplan').click()
    cy.get('button').contains('weiter').click()

    //Question 9
    cy.get('label')
      .contains('Einladung zur Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('per E-Mail')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 10
    cy.get('label').contains('soll zur Mitgliederversammlung geladen')
    cy.get('input').type('21')
    cy.get('button').contains('weiter').click()

    //Question 11
    cy.get('label')
      .contains('Mitgliederversammlung beschlussfähig')
      .closest('div')
      .find('label')
      .contains('ordnungsgemäß einberufene Mitgliederversammlung')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 12
    cy.get('label')
      .contains('häufig soll eine Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('monatlich')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 13
    cy.get('label')
      .contains('Mehrheit soll die Mitgliederversammlung ihre Beschlüsse')
      .closest('div')
      .find('label')
      .contains('einfache')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 14
    cy.get('label')
      .contains('Vorstand zusammengesetzt')
      .closest('div')
      .find('label')
      .contains('zwei Vorsitzende')
      .click()
      .parent()
      .parent()
      .get('label')
      .contains('Schatzmeister')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 15
    cy.get('label')
      .contains('Verein nach außen vertreten')
      .closest('div')
      .find('label')
      .contains('Mehrheit des Vorstandes')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 16
    cy.get('label')
      .contains('Zeitraum soll der Vorstand gewählt werden')
      .closest('div')
      .find('label')
      .contains('drei')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 17
    cy.get('label')
      .contains('Wiederwahl des Vorstandes')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 18
    cy.get('label')
      .contains('zur Vorstandssitzung geladen')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 19
    cy.get('label').contains('vorher soll zu einer Vorstandssitzung geladen')
    cy.get('input').type('30')
    cy.get('button').contains('weiter').click()

    //Question 20
    cy.get('label')
      .contains('Mitteilung einer Tagesordnung')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 21
    cy.get('label')
      .contains('Arbeitsausschüsse')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 22
    cy.get('label')
      .contains(
        'Mitgliederversammlung über die Auflösung des Vereins entscheiden'
      )
      .closest('div')
      .find('label')
      .contains('absolute')
      .click()
    cy.get('button').contains('weiter').click()

    //Question 23
    cy.get('label')
      .contains('Tag soll über die Satzung beschlossen')
      .siblings('input')
      .type('2020-12-31')
    cy.get('button').contains('weiter').click()

    //Question 24
    cy.get('label').contains('Satzung unterschreiben')
    cy.get('input').type('10')
    cy.get('button').contains('Satzung anzeigen').click()
    cy.url().should('eq', 'http://localhost:3000/bylawstext')
  })

  it('shows error message if no input is set', () => {
    cy.get('button')
      .contains('weiter')
      .click()
      .get('[data-cy=errorMessage]')
      .should('have.length', 1)
  })

  it('check browser number validation message on invalid input', () => {
    cy.visit('/questions/10')
    cy.get('[type="number"]').first().type('-2')
    cy.get('button').contains('weiter').click()
    cy.get('input:invalid').should('have.length', 1)
  })

  it('check browser date validation message on invalid input', () => {
    cy.visit('/questions/23')
    cy.get('[type="date"]').first().type('2010-12-31')
    cy.get('button').contains('weiter').click()
    cy.get('input:invalid').should('have.length', 1)
  })
})
