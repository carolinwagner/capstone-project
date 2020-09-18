import React from 'react'
import join from 'join-array'
import Paragraph from '../Paragraph'

const BoardCompositionParagraph = ({ answers }) => {
  const boardComposition = join({
    array: answers?.boardComposition?.filter(Boolean),
    last: ' und ',
  })

  const boardPeriod = {
    oneYear: 'einem Jahr',
    twoYears: 'zwei Jahren',
    threeYears: 'drei Jahren',
    fourYears: 'vier Jahren',
  }

  return (
    <Paragraph
      id="boardComposition"
      headline="§ 10 Zusammensetzung des Vorstandes"
      text={` Der Vorstand setzt sich zusammen aus ${boardComposition}. Er wird für
      einen Zeitraum von ${boardPeriod[answers.boardPeriod]} gewählt. Eine
      Wiederwahl ist
      ${answers.boardReelection === 'yesReelection' ? '' : ' nicht'} möglich.`}
    />
  )
}

export default BoardCompositionParagraph
