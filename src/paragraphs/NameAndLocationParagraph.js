import React from 'react'
import Paragraph from '../Paragraph'

const NameAndLocationParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="nameAndLocation"
      headline="§ 1 Name und Sitz des Vereins"
      section1={`I. Der Name des Vereins lautet ${answers.clubName}. ${
        answers.clubRegistration === 'yesClubRegistration'
          ? 'Er soll in das Vereinsregister eingetragen werden und trägt dann den Zusatz "e. V."'
          : ''
      }`}
      section2={`
      II. Der Verein hat seinen Sitz in ${answers.clubLocation}.`}
    />
  )
}

export default NameAndLocationParagraph
