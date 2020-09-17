import React from 'react'
import join from 'join-array'
import Paragraph from '../Paragraph'

const MemberMeetingParagraph = ({ answers }) => {
  const meetingDuties = join({
    array: answers?.generalMeetingDuties?.filter(Boolean),
    last: ' und ',
  })

  const getGeneralMeetingFrequency = (frequency) => {
    if (frequency === 'monthly') return 'monatlich '
    if (frequency === 'quarterly') return 'vierteljährlich '
    if (frequency === 'everySixMonths') return 'halbjährlich '
    if (frequency === 'yearly') return 'jährlich '
  }

  const getGeneralMeetingMajority = (majority) => {
    if (majority === 'absoluteMajority') return 'absoluten Mehrheit'
    if (majority === 'twoThirdsMajority') return 'Zweidrittelmehrheit'
    if (majority === 'simpleMajority') return 'einfachen Mehrheit'
  }

  return (
    <Paragraph
      id="memberMeeting"
      headline="§ 9 Mitgliederversammlung"
      text={`Die Mitgliederversammlung ist das oberste Vereinsorgan. Die
    Mitgliederversammlung wird vom Vorstand unter Einhaltung einer Frist
    von ${answers.generalMeetingDeadline} Tagen ${
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
      ${getGeneralMeetingFrequency(answers.generalMeetingFrequency)}
      durchgeführt. Die Mitgliederversammlung fasst ihre Beschlüsse mit
      einer ${getGeneralMeetingMajority(answers.generalMeetingMajority)}.`}
    />
  )
}

export default MemberMeetingParagraph
