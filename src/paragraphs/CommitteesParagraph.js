import React from 'react'
import Paragraph from '../Paragraph'

const CommitteesParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="committees"
      headline="§ 13 Arbeitsausschüsse"
      section1={
        answers.committees === 'yesCommittees'
          ? 'Zur sachverständigen Beratung des Vereins bei der Verfolgung seiner Ziele kann der Vorstand Mitglieder des Vereins mit besonderen Fachkenntnissen in Arbeitsausschüsse berufen, ihre Arbeitsbereiche bestimmen und ihnen für ihre Arbeit Richtlinien geben.'
          : 'Arbeitsausschüsse werden nicht gebildet.'
      }
    />
  )
}

export default CommitteesParagraph
