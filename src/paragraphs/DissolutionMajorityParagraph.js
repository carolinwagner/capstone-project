import React from 'react'
import Paragraph from '../Paragraph'

const DissolutionMajorityParagraph = ({ answers }) => {
  const dissolutionMajority = {
    absoluteMajorityDissolution: 'absoluten Mehrheit',
    twoThirdsMajorityDissolution: 'Zweidrittelmehrheit',
    simpleMajorityDissolution: 'einfachen Mehrheit',
  }

  return (
    <Paragraph
      id="dissolutionMajority"
      headline="§ 14 Auflösung des Vereins"
      text={`Die Auflösung des Vereins kann nur mit einer
      ${dissolutionMajority[answers.dissolutionMajority]} der anwesenden
      Mitglieder bei einer Mitgliederversammlung beschlossen werden.
        `}
    />
  )
}

export default DissolutionMajorityParagraph
