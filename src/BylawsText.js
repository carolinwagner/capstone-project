import React from 'react'
import join from 'join-array'
import Paragraph from './Paragraph'

export default function BylawsText({ answers }) {
  const answersArray = Object.entries(answers)
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
    return isAnswerCheckbox
      ? answer.filter(Boolean).length > 0
      : answer.length > 0
  })

  const nameAndLocationParagraph = () => {
    return (
      <Paragraph
        id="nameAndLocation"
        headline="§ 1 Name und Sitz des Vereins"
        text={`Der Name des Vereins lautet ${answers.clubName} e.V. Der Verein hat
  seinen Sitz in ${answers.clubLocation}.`}
      />
    )
  }

  const businessYearParagraph = () => {
    return (
      <Paragraph
        id="businessYear"
        headline="§ 2 Geschäftsjahr"
        text="Geschäftsjahr ist das Kalenderjahr."
      />
    )
  }

  const clubPurposeParagraph = () => {
    return (
      <Paragraph
        id="clubPurpose"
        headline="§ 3 Zweck des Vereins"
        text={`Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige
          Zwecke im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der
          Abgabenordnung. Zweck des Vereins ist ${answers.clubPurpose}.`}
      />
    )
  }

  const nonProfitParagraph = () => {
    return (
      <Paragraph
        id="nonProfit"
        headline="§ 4 Gemeinnützigkeit"
        text="Der Verein ist selbstlos tätig. Er verfolgt nicht in erster Linie
        eigenwirtschaftliche Zwecke."
      />
    )
  }

  const fundsParagraph = () => {
    return (
      <Paragraph
        id="useOfFunds"
        headline="§ 5 Mittelverwendung"
        text="Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet
      werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des
      Vereins."
      />
    )
  }

  const membersParagraph = () => {
    const members = join({
      array: answers?.typeOfMembers?.filter(Boolean),
      last: ' und ',
    })

    const typeOfRequest = join({
      array: answers?.typeOfRequest?.filter(Boolean),
      last: ' oder ',
    })

    return (
      <Paragraph
        id="members"
        headline="§ 6 Erwerb der Mitgliedschaft"
        text={`${members} können Vereinsmitglieder werden. Der Aufnahmeantrag kann 
     ${typeOfRequest} gestellt werden. Über den Aufnahmeantrag entscheidet
      der Vorstand.Gegen die Ablehnung, die keiner Begründung bedarf, steht
      dem/der Bewerber/in die Berufung an die Mitgliederversammlung zu,
      welche dann endgültig entscheidet.`}
      />
    )
  }

  const admissionFeeParagraph = () => {
    return (
      <Paragraph
        id="admissionFee"
        headline="§ 7 Aufnahmegebühr"
        text={
          answers.admissionFee === 'yesAdmissionFee'
            ? 'Vor dem Eintritt wird eine Aufnahmegebühr fällig. Die Höhe bestimmt die Mitgliederversammlung.'
            : 'Eine Aufnahmegebühr wird nicht erhoben.'
        }
      />
    )
  }

  const memberFeeParagraph = () => {
    return (
      <Paragraph
        id="memberFee"
        headline="§ 8 Mitgliedsbeiträge"
        text={
          answers.memberFee === 'yesMemberFee'
            ? 'Von den Mitgliedern werden Beiträge erhoben. Die Höhe der Beiträge und deren Fälligkeit bestimmt die Mitgliederversammlung.'
            : 'Mitgliedsbeiträge werden nicht erhoben.'
        }
      />
    )
  }

  const memberMeetingParagraph = () => {
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

  const boardCompositionParagraph = () => {
    const boardComposition = join({
      array: answers?.boardComposition?.filter(Boolean),
      last: ' und ',
    })

    const getBoardPeriod = (period) => {
      if (period === 'oneYear') return 'einem Jahr'
      if (period === 'twoYears') return 'zwei Jahren'
      if (period === 'threeYears') return 'drei Jahren'
      if (period === 'fourYears') return 'vier Jahren'
    }

    return (
      <Paragraph
        id="boardComposition"
        headline="§ 10 Zusammensetzung des Vorstandes"
        text={` Der Vorstand setzt sich zusammen aus ${boardComposition}. Er wird für
        einen Zeitraum von ${getBoardPeriod(answers.boardPeriod)} gewählt. Eine
        Wiederwahl ist
        ${
          answers.boardReelection === 'yesReelection' ? '' : ' nicht'
        } möglich.`}
      />
    )
  }

  const clubRepresentationParagraph = () => {
    const getclubRepresentation = (representation) => {
      if (representation === 'firstBoardMember') return 'dem 1. Vorsitzenden'
      if (representation === 'firstAndSecondBoardMember')
        return 'dem 1. und dem 2. Vorsitzenden'
      if (representation === 'boardMajority')
        return 'der Mehrheit des Vorstandes'
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

  const boardMeetingParagraph = () => {
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

  const committeesParagraph = () => {
    return (
      <Paragraph
        id="committees"
        headline="§ 13 Arbeitsausschüsse"
        text={
          answers.committees === 'yesCommittees'
            ? 'Zur sachverständigen Beratung des Vereins bei der Verfolgung seiner Ziele kann der Vorstand Mitglieder des Vereins mit besonderen Fachkenntnissen in Arbeitsausschüsse berufen, ihre Arbeitsbereiche bestimmen und ihnen für ihre Arbeit Richtlinien geben.'
            : 'Arbeitsausschüsse werden nicht gebildet.'
        }
      />
    )
  }

  const dissolutionMajorityParagraph = () => {
    const getDissolutionMajority = (majority) => {
      if (majority === 'absoluteMajorityDissolution')
        return 'absoluten Mehrheit'
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
        ${
          answers.committees === 'yesCommittees'
            ? 'Zur sachverständigen Beratung des Vereins bei der Verfolgung seiner Ziele kann der Vorstand Mitglieder des Vereins mit besonderen Fachkenntnissen in Arbeitsausschüsse berufen, ihre Arbeitsbereiche bestimmen und ihnen für ihre Arbeit Richtlinien geben.'
            : 'Arbeitsausschüsse werden nicht gebildet.'
        }`}
      />
    )
  }

  const location = <p id="location">{answers.clubLocation}</p>

  const date = <p id="date">{answers.decisionDate}</p>

  return (
    anyAnswerGiven && (
      <>
        <p>
          Die folgende Satzung wurde basierend auf deinen Antworten erstellt.
        </p>
        {nameAndLocationParagraph()}
        {businessYearParagraph()}
        {clubPurposeParagraph()}
        {nonProfitParagraph()}
        {fundsParagraph()}
        {membersParagraph()}
        {admissionFeeParagraph()}
        {memberFeeParagraph()}
        {memberMeetingParagraph()}
        {boardCompositionParagraph()}
        {clubRepresentationParagraph()}
        {boardMeetingParagraph()}
        {committeesParagraph()}
        {dissolutionMajorityParagraph()}

        <h4>
          {location}, {date}
        </h4>

        <h4>__________________________________</h4>
        <p>Unterschrift der Gründungsmitglieder</p>
      </>
    )
  )
}
