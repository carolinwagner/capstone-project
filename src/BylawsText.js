import React from 'react'

export default function BylawsText({ answers }) {
  const firstParagraph = `Der Name des Vereins lautet ${answers.clubName} e.V. Der Verein hat seinen Sitz in ${answers.clubLocation}.`

  const secondParagraph = 'Geschäftsjahr ist das Kalenderjahr.'

  const thirdParagraph = `Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der Abgabenordnung. Zweck des Vereins ist ${answers.clubPurpose}.`

  const fourthParagraph =
    'Der Verein ist selbstlos tätig. Er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.'

  const fifthParagraph =
    'Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.'

  const sixthParagraph = `${answers.name} können Vereinsmitglieder werden.`

  // Der Aufnahmeantrag ist schriftlich zu stellen.

  // Über den Aufnahmeantrag entscheidet der Vorstand.

  // Gegen die Ablehnung, die keiner Begründung bedarf, steht dem/der Bewerber/in die Berufung an die Mitgliederversammlung zu, welche dann endgültig entscheidet.

  return (
    <>
      <h3>§ 1 Name und Sitz des Vereins</h3>
      <p>{firstParagraph}</p>

      <h3>§ 2 Geschäftsjahr</h3>
      <p>{secondParagraph}</p>

      <h3>§ 3 Zweck des Vereins</h3>
      <p>{thirdParagraph}</p>

      <h3>§ 4 Selbstlose Tätigkeit</h3>
      <p>{fourthParagraph}</p>

      <h3>§ 5 Mittelverwendung</h3>
      <p>{fifthParagraph}</p>

      <h3>§ Erwerb der Mitgliedschaft</h3>
      <p>{sixthParagraph}</p>
    </>
  )
}
