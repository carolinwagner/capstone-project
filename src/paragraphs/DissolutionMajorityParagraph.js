import React from 'react'
import Paragraph from '../Paragraph'

const DissolutionMajorityParagraph = ({ answers }) => {
  const getDissolutionMajority = (majority) => {
    if (majority === 'absoluteMajorityDissolution') return 'absoluten Mehrheit'
    if (majority === 'twoThirdsMajorityDissolution')
      return 'Zweidrittelmehrheit'
    if (majority === 'simpleMajorityDissolution') return 'einfachen Mehrheit'
  }
  return (
    <Paragraph
      id="dissolutionMajority"
      headline="§ 14 Auflösung des Vereins"
      text={`Die Auflösung des Vereins kann nur mit einer
      ${getDissolutionMajority(answers.dissolutionMajority)} der anwesenden
      Mitglieder bei einer Mitgliederversammlung beschlossen werden.
        `}
    />
  )
}

export default DissolutionMajorityParagraph
