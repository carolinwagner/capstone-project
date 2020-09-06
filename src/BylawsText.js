import React from 'react'

export default function BylawsText({ answers }) {
  const firstParagraph = `Mein Verein heißt ${answers.clubName}. ${
    answers.clubLocation
      ? `Der Sitz des Vereins ist in ${answers.clubLocation}`
      : ''
  }.`

  return (
    <>
      <p>{firstParagraph}</p>
    </>
  )
}
