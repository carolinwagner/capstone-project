import React from 'react'
import Paragraph from '../Paragraph'

const BoardMeetingParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="boardMeeting"
      headline="§ 12 Vorstandssitzung"
      section1={`I. Spätestens ${
        answers.boardMeetingDeadline === '1'
          ? '1 Tag'
          : `${answers.boardMeetingDeadline} Tage`
      } vor der Vorstandssitzung muss zu dieser
    ${
      answers.boardInvitation === 'writtenBoardInvitation'
        ? ' schriftlich '
        : ' per E-Mail '
    }
    geladen werden.`}
      section2={` 
    ${
      answers.agendaNotice === 'yesAgendaNotice'
        ? 'II. In der Einladung zur Vorstandssitzung muss die Tagesordnung mitgeteilt werden.'
        : ''
    }`}
    />
  )
}

export default BoardMeetingParagraph
