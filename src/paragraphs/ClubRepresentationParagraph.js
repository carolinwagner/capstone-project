import React from 'react'
import Paragraph from '../Paragraph'

const ClubRepresentationParagraph = ({ answers }) => {
  const getclubRepresentation = (representation) => {
    if (representation === 'firstBoardMember') return 'dem 1. Vorsitzenden'
    if (representation === 'firstAndSecondBoardMember')
      return 'dem 1. und dem 2. Vorsitzenden'
    if (representation === 'boardMajority') return 'der Mehrheit des Vorstandes'
  }
  return (
    <Paragraph
      id="clubRepresentation"
      headline="§ 11 Vertretung des Vereins"
      text={` Der Verein wird vertreten von 
        ${getclubRepresentation(answers.clubRepresentation)}.`}
    />
  )
}

export default ClubRepresentationParagraph
