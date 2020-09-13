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
    cy.get('button').contains('Zusammenfassung anzeigen')
  })

  it('has more than 20 questions', () => {
    cy.get('h2').should('have.length.gt', 20)
  })

  it('has some inputs', () => {
    cy.get('input').should('have.length.gt', 20)
  })

  it('shows all answers in the summary', () => {
    cy.get('label')
      .contains('Name des Vereins')
      .siblings('input')
      .type('Carolin e. V.', { delay: 100 })

    cy.get('label')
      .contains('Stadt')
      .siblings('input')
      .type('Hamburg', { delay: 100 })

    cy.get('label')
      .contains('Zweck')
      .siblings('input')
      .type('testen', { delay: 100 })

    cy.get('label')
      .contains('Wer soll Mitglied')
      .closest('div')
      .find('label')
      .contains('Personengesellschaften')
      .click()

    cy.get('label')
      .contains('Mitgliedsantrag')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()
      .parent()
      .parent()
    cy.get('label').contains('per E-Mail').click()

    cy.get('label')
      .contains('Aufnahmegebühr')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()

    cy.get('label')
      .contains('Belange soll die Mitgliedsversammlung')
      .closest('div')
      .find('label')
      .contains('Entlastung')
      .click()
      .parent()
      .parent()
    cy.get('label').contains('Haushaltsplan').click()

    cy.get('label')
      .contains('Einladung zur Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('per E-Mail')
      .click()

    cy.get('label')
      .contains('Tage vorher soll zur Mitgliederversammlung geladen')
      .siblings('input')
      .type('21')

    cy.get('label')
      .contains('Mitgliederversammlung beschlussfähig')
      .closest('div')
      .find('label')
      .contains('ordnungsgemäß einberufene Mitgliederversammlung')
      .click()

    cy.get('label')
      .contains('häufig soll eine Mitgliederversammlung')
      .closest('div')
      .find('label')
      .contains('monatlich')
      .click()

    cy.get('label')
      .contains('Mehrheit soll die Mitgliederversammlung ihre Beschlüsse')
      .closest('div')
      .find('label')
      .contains('einfache')
      .click()

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

    cy.get('label')
      .contains('Verein nach außen vertreten')
      .closest('div')
      .find('label')
      .contains('Mehrheit des Vorstandes')
      .click()

    cy.get('label')
      .contains('Zeitraum soll der Vorstand gewählt werden')
      .closest('div')
      .find('label')
      .contains('drei')
      .click()

    cy.get('label')
      .contains('Wiederwahl des Vorstandes')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()

    cy.get('label')
      .contains('zur Vorstandssitzung geladen')
      .closest('div')
      .find('label')
      .contains('schriftlich')
      .click()

    cy.get('label')
      .contains('Tage vorher soll zu einer Vorstandssitzung geladen')
      .siblings('input')
      .type('30')

    cy.get('label')
      .contains('Mitteilung einer Tagesordnung')
      .closest('div')
      .find('label')
      .contains('nein')
      .click()

    cy.get('label')
      .contains('Arbeitsausschüsse')
      .closest('div')
      .find('label')
      .contains('ja')
      .click()

    cy.get('label')
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

    cy.get('label')
      .contains('Satzung unterschreiben')
      .siblings('input')
      .type('10')

    cy.get('button').click()

    cy.get('li').contains('Name des Vereins')
    cy.get('p').contains('Carolin')

    cy.get('li').contains('Stadt')
    cy.get('p').contains('Hamburg')

    cy.get('li').contains('Zweck')
    cy.get('p').contains('testen')

    cy.get('li').contains('Wer soll Mitglied')
    cy.get('p').contains('Unternehmen')

    cy.get('li').contains('Mitglieder einen Mitgliedsantrag')
    cy.get('p').contains('schriftlich und email')

    cy.get('li').contains('Aufnahmegebühr')
    cy.get('p').contains('ja')

    cy.get('li').contains('Belange soll die Mitgliedsversammlung')
    cy.get('p').contains('Vorstandsentlastung und Haushaltsplan')

    cy.get('li').contains('Einladung zur Mitgliederversammlung')
    cy.get('p').contains('per eMail')

    cy.get('li').contains('Tage vorher soll zur Mitgliederversammlung')
    cy.get('p').contains('21')

    cy.get('li').contains('Mitgliederversammlung beschlussfähig')
    cy.get('p').contains('Immer')

    cy.get('li').contains('häufig soll eine Mitgliederversammlung')
    cy.get('p').contains('monatlich')

    cy.get('li').contains(
      'Mehrheit soll die Mitgliederversammlung ihre Beschlüsse'
    )
    cy.get('p').contains('einfache')

    cy.get('li').contains('Vorstand zusammengesetzt')
    cy.get('p').contains('zwei Vorsitzende und Schatzmeister')

    cy.get('li').contains('Verein nach außen vertreten')
    cy.get('p').contains('Vorstandsmehrheit')

    cy.get('li').contains('Zeitraum soll der Vorstand')
    cy.get('p').contains('drei Jahre')

    cy.get('li').contains('Wiederwahl des Vorstandes')
    cy.get('p').contains('Ja')

    cy.get('li').contains('zur Vorstandssitzung geladen')
    cy.get('p').contains('schriftlich')

    cy.get('li').contains('Tage vorher soll zu einer Vorstandssitzung')
    cy.get('p').contains('30')

    cy.get('li').contains('Mitteilung einer Tagesordnung')
    cy.get('p').contains('Nein')

    cy.get('li').contains('Arbeitsausschüsse')
    cy.get('p').contains('Ja')

    cy.get('li').contains(
      'Mitgliederversammlung über die Auflösung des Vereins'
    )
    cy.get('p').contains('absolute Mehrheit')

    cy.get('li').contains('Tag soll über die Satzung beschlossen')
    cy.get('p').contains('2020-12-31')

    cy.get('li').contains('Mitglieder sollen die Satzung untersch')
    cy.get('p').contains('10')
  })

  it('shows error messages if no input is set', () => {
    cy.get('button')
      .click()
      .get('[data-cy=errorMessage]')
      .should('have.length', 23)
  })

  it('check browser number validation message on invalid input', () => {
    cy.get('[type="number"]').first().type('-2')
    cy.get('button').contains('Zusammenfassung anzeigen').click()
    cy.get('input:invalid').should('have.length', 1)
  })

  it('check browser date validation message on invalid input', () => {
    cy.get('[type="date"]').first().type('2010-12-31')
    cy.get('button').contains('Zusammenfassung anzeigen').click()
    cy.get('input:invalid').should('have.length', 1)
  })
})
