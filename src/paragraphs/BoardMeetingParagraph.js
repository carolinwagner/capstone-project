import React from 'react'
import Paragraph from '../Paragraph'

const BoardMeetingParagraph = ({ answers }) => {
  return (
    <Paragraph
      id="boardMeeting"
      headline="§ 12 Vorstandssitzung"
      text={`${
        answers.boardMeetingDeadline
      } Tage vor der Vorstandssitzung muss zu
    dieser
    ${
      answers.boardInvitation === 'writtenBoardInvitation'
        ? ' schriftlich '
        : ' per E-Mail '
    }
    geladen werden. 
    ${
      answers.agendaNotice === 'yesAgendaNotice'
        ? 'In der Einladung zur Vorstandssitzung muss die Tagesordnung mitgeteilt werden.'
        : ''
    }.`}
    />
  )
}

export default BoardMeetingParagraph
