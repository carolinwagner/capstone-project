import React from 'react'
import Paragraph from '../Paragraph'

const ClubRepresentationParagraph = ({ answers }) => {
  const clubRepresentation = {
    firstBoardMember: 'dem 1. Vorsitzenden',
    firstAndSecondBoardMember: 'dem 1. und dem 2. Vorsitzenden',
    boardMajority: 'der Mehrheit des Vorstandes',
    twoBoardMembers: 'zwei Mitgliedern des Vorstandes',
  }

  return (
    <Paragraph
      id="clubRepresentation"
      headline="§ 11 Vertretung des Vereins"
      section1={` Der Verein wird vertreten von 
        ${clubRepresentation[answers.clubRepresentation]}.`}
    />
  )
}

export default ClubRepresentationParagraph
