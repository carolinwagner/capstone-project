import React from 'react'
import Paragraph from '../Paragraph'

const MemberFeeParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="memberFee"
      headline="§ 8 Mitgliedsbeiträge"
      section1={
        answers.memberFee === 'yesMemberFee'
          ? 'Von den Mitgliedern werden Beiträge erhoben. Die Höhe der Beiträge und deren Fälligkeit bestimmt die Mitgliederversammlung.'
          : 'Mitgliedsbeiträge werden nicht erhoben.'
      }
    />
  )
}

export default MemberFeeParagraph
