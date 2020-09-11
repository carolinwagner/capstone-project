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
      .siblings('input')
      .type('Carolin e. V.')
  })

  // it('shows text input in question no. 2', () => {
  //   cy.get('label')
  //     .contains('Stadt')
  //     .get('input[id=2]')
  //     .type('Teststadt')
  //     .should('have.value', 'Teststadt')
  // })

  // it('shows number input in question no. 9', () => {
  //   cy.get('label')
  //     .contains('Wie viele Tage vorher soll zur Mitgliederversammlung')
  //     .get('input[id=9]')
  //     .type('15')
  //     .parents()
  //     .get('button')
  //     .click()
  // })

  it.only('shows all answers in the summary', () => {
    cy.get('label')
      .contains('Name des Vereins')
      .siblings('input')
      .type('Carolin e. V.', { delay: 100 })

      .get('label')
      .contains('Stadt')
      .siblings('input')
      .type('Hamburg')

      .get('label')
      .contains('Zweck')
      .siblings('input')
      .type('testen')

      .get('label')
      .contains('Wer soll Mitglied')
      .closest('div')
      .find('label')
      .contains('Personengesellschaften')
      .click()

      .get('label')
      .contains('Mitgliedsantrag')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()
      .parent()
      .parent()
      .get('label')
      .contains('per E-Mail')
      .click()

      .get('label')
      .contains('Aufnahmegebühr')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()

      .get('label')
      .contains('Belange soll die Mitgliedsversammlung')
      .closest('div')
      .find('label')
      .contains('Entlastung')
      .click()
      .parent()
      .parent()
      .get('label')
      .contains('Haushaltsplan')
      .click()

      .get('label')
      .contains('Einladung zur Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('per E-Mail')
      .click()

      .get('label')
      .contains('Tage vorher soll zur Mitgliederversammlung geladen')
      .siblings('input')
      .type('21')

      .get('label')
      .contains('Mitgliederversammlung beschlussfähig')
      .closest('div')
      .find('label')
      .contains('ordnungsgemäß einberufene Mitgliederversammlung')
      .click()

      .get('label')
      .contains('häufig soll eine Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('monatlich')
      .click()

      .get('label')
      .contains('Mehrheit soll die Mitgliederversammlung ihre Beschlüsse')
      .closest('div')
      .find('label')
      .contains('einfache')
      .click()

      .get('label')
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

      .get('label')
      .contains('Verein nach außen vertreten')
      .closest('div')
      .find('label')
      .contains('Mehrheit des Vorstandes')
      .click()

      .get('label')
      .contains('Zeitraum soll der Vorstand gewählt werden')
      .closest('div')
      .find('label')
      .contains('drei')
      .click()

      .get('label')
      .contains('Wiederwahl des Vorstandes')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()

      .get('label')
      .contains('zur Vorstandssitzung geladen')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()

      .get('label')
      .contains('Tage vorher soll zu einer Vorstandssitzung geladen')
      .siblings('input')
      .type('30')

      .get('label')
      .contains('Mitteilung einer Tagesordnung')
      .closest('div')
      .find('label')
      .contains('nein')
      .click()

      .get('label')
      .contains('Arbeitsausschüsse')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()

      .get('label')
      .contains(
        'Mitgliederversammlung über die Auflösung des Vereins entscheiden'
      )
      .closest('div')
      .find('label')
      .contains('absolute')
      .click()

    cy.get('label')
      .contains('Tag soll über die Satzung beschlossen')
      .siblings('input')
      .type('2020-12-31')

      .get('label')
      .contains('Satzung unterschreiben')
      .siblings('input')
      .type('10')

      .get('button')
      .click()
  })
})
