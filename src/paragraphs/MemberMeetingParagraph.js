import React from 'react'
import join from 'join-array'
import Paragraph from '../Paragraph'

const MemberMeetingParagraph = ({ answers }) => {
  const meetingDuties = join({
    array: answers?.generalMeetingDuties?.filter(Boolean),
    last: ' und ',
  })

  const generalMeetingFrequency = {
    monthly: 'monatlich',
    quarterly: 'vierteljährlich',
    everySixMonths: 'halbjährlich',
    yearly: 'jährlich',
  }

  const generalMeetingMajority = {
    absoluteMajority: 'absoluten Mehrheit',
    twoThirdsMajority: 'Zweidrittelmehrheit',
    simpleMajority: 'einfachen Mehrheit',
  }

  return (
    <Paragraph
      id="memberMeeting"
      headline="§ 9 Mitgliederversammlung"
      text={`Die Mitgliederversammlung ist das oberste Vereinsorgan. Die
    Mitgliederversammlung wird vom Vorstand unter Einhaltung einer Frist
    von ${
      answers.boardMeetingDeadline === '1'
        ? 'einem Tag'
        : `${answers.boardMeetingDeadline} Tagen`
    }
     
    ${
      answers.typeOfInvitationGeneralMeeting === 'writtenInvitation'
        ? ' schriftlich '
        : ' per E-Mail '
    }
    unter Angabe der Tagesordnung einberufen. Die Mitgliederversammlung
        entscheidet über ${meetingDuties}. 
        ${
          answers.quorumQuote === 'quorum'
            ? 'Jede ordnungsgemäß einberufene Mitgliederversammlung ist beschlussfähig.'
            : 'Die Mitgliederversammlung ist beschlussfähig, wenn mindestens die Hälfte der Mitglieder anwesend ist.'
        }
      Die Mitgliederversammlung wird 
      ${generalMeetingFrequency[answers.generalMeetingFrequency]}
      durchgeführt. Die Mitgliederversammlung fasst ihre Beschlüsse mit
      einer ${
        generalMeetingMajority[answers.generalMeetingMajority]
      }.Über die Beschlüsse der Mitgliederversammlung ist ein Protokoll anzufertigen, das vom Versammlungsleiter und dem Schriftführer zu unterzeichnen ist.`}
    />
  )
}

export default MemberMeetingParagraph
