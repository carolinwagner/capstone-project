import React from 'react'
import Paragraph from '../Paragraph'

const ClubPurposeParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="clubPurpose"
      headline="§ 3 Zweck des Vereins"
      section1="I. Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige
        Zwecke im Sinne des Abschnitts “Steuerbegünstigte Zwecke“ der
        Abgabenordnung."
      section2={`II. Zweck des Vereins ist ${answers.clubPurpose}.`}
    />
  )
}

export default ClubPurposeParagraph
