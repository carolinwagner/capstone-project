import React from 'react'
import join from 'join-array'

export default function BylawsText({ answers }) {
  const answersArray = Object.entries(answers)
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
    return isAnswerCheckbox
      ? answer.filter(Boolean).length > 0
      : answer.length > 0
  })

  console.log('answers:', answers)

  const nameAndLocationParagraph = (
    <section id="nameAndLocation">
      <h3>§ 1 Name und Sitz des Vereins</h3>
      <p>
        Der Name des Vereins lautet {answers.clubName} e.V. Der Verein hat
        seinen Sitz in {answers.clubLocation}.
      </p>
    </section>
  )

  const businessYearParagraph = (
    <section id="businessYear">
      <h3>§ 2 Geschäftsjahr</h3>
      <p>Geschäftsjahr ist das Kalenderjahr.</p>
    </section>
  )

  const clubPurposeParagraph = (
    <section id="clubPurpose">
      <h3>§ 3 Zweck des Vereins</h3>
      <p>
        Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke
        im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der Abgabenordnung.
        Zweck des Vereins ist {answers.clubPurpose}.
      </p>
    </section>
  )

  const nonProfitParagraph = (
    <section id="nonProfit">
      <h3>§ 4 Gemeinnützigkeit</h3>
      <p>
        Der Verein ist selbstlos tätig. Er verfolgt nicht in erster Linie
        eigenwirtschaftliche Zwecke.
      </p>
    </section>
  )

  const useOfFundsParagraph = (
    <section id="useOfFunds">
      <h3>§ 5 Mittelverwendung</h3>
      <p>
        Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet
        werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des
        Vereins.
      </p>
    </section>
  )

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
      <section id="members">
        <h3>§ 6 Erwerb der Mitgliedschaft</h3>
        <p>
          {members} können Vereinsmitglieder werden. Der Aufnahmeantrag kann{' '}
          {typeOfRequest} gestellt werden. Über den Aufnahmeantrag entscheidet
          der Vorstand.Gegen die Ablehnung, die keiner Begründung bedarf, steht
          dem/der Bewerber/in die Berufung an die Mitgliederversammlung zu,
          welche dann endgültig entscheidet.
        </p>
      </section>
    )
  }

  const admissionFeeParagraph = () => {
    return (
      <section id="admissionFee">
        <h3>§ 7 Aufnahmegebühr</h3>
        {answers.admissionFee === 'yesAdmissionFee' ? (
          <p>
            Vor dem Eintritt wird eine Aufnahmegebühr fällig. Die Höhe bestimmt
            die Mitgliederversammlung.
          </p>
        ) : (
          <p>Eine Aufnahmegebühr wird nicht erhoben.</p>
        )}
      </section>
    )
  }

  const memberFeeParagraph = () => {
    return (
      <section id="memberFee">
        <h3>§ 8 Mitgliedsbeiträge</h3>
        {answers.memberFee === 'yesMemberFee' ? (
          <p>
            Von den Mitgliedern werden Beiträge erhoben. Die Höhe der Beiträge
            und deren Fälligkeit bestimmt die Mitgliederversammlung.
          </p>
        ) : (
          <p>Mitgliedsbeiträge werden nicht erhoben.</p>
        )}
      </section>
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
      <section id="memberMeeting">
        <h3>§ 9 Mitgliederversammlung</h3>
        <p>
          Die Mitgliederversammlung ist das oberste Vereinsorgan. Die
          Mitgliederversammlung wird vom Vorstand unter Einhaltung einer Frist
          von {answers.generalMeetingDeadline} Tagen
          {answers.typeOfInvitationGeneralMeeting === 'writtenInvitation'
            ? ' schriftlich '
            : ' per E-Mail '}
          unter Angabe der Tagesordnung einberufen. Die Mitgliederversammlung
          entscheidet über {meetingDuties}.
          {answers.quorumQuote === 'quorum'
            ? ' Jede ordnungsgemäß einberufene Mitgliederversammlung ist beschlussfähig. '
            : ' Die Mitgliederversammlung ist beschlussfähig, wenn mindestens die Hälfte der Mitglieder anwesend ist. '}
          Die Mitgliederversammlung wird{' '}
          {getGeneralMeetingFrequency(answers.generalMeetingFrequency)}
          durchgeführt. Die Mitgliederversammlung fasst ihre Beschlüsse mit
          einer {getGeneralMeetingMajority(answers.generalMeetingMajority)}.
        </p>
      </section>
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
      <section id="boardComposition">
        <h3>§ 10 Zusammensetzung des Vorstandes</h3>
        <p>
          Der Vorstand setzt sich zusammen aus {boardComposition}. Er wird für
          einen Zeitraum von {getBoardPeriod(answers.boardPeriod)} gewählt. Eine
          Wiederwahl ist
          {answers.boardReelection === 'yesReelection' ? '' : ' nicht'} möglich.
        </p>
      </section>
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
      <section id="clubRepresentation">
        <h3>§ 11 Vertretung des Vereins</h3>
        <p>
          Der Verein wird vertreten von{' '}
          {getclubRepresentation(answers.clubRepresentation)}.
        </p>
      </section>
    )
  }

  const boardMeetingParagraph = () => {
    return (
      <section id="boardMeeting">
        <h3>§ 11 Vorstandssitzung</h3>
        <p>
          {answers.boardMeetingDeadline} Tage vor der Vorstandssitzung muss zu
          dieser{' '}
          {answers.boardInvitation === 'writtenBoardInvitation'
            ? ' schriftlich '
            : ' per E-Mail '}
          geladen werden.
          {answers.agendaNotice === 'yesAgendaNotice'
            ? ' In der Einladung zur Vorstandssitzung muss die Tagesordnung mitgeteilt werden.'
            : ''}
        </p>
      </section>
    )
  }

  const committeesParagraph = () => {
    return (
      <section id="committees">
        <h3>§ 12 Arbeitsausschüsse</h3>
        {answers.committees === 'yesCommittees' ? (
          <p>
            Zur sachverständigen Beratung des Vereins bei der Verfolgung seiner
            Ziele kann der Vorstand Mitglieder des Vereins mit besonderen
            Fachkenntnissen in Arbeitsausschüsse berufen, ihre Arbeitsbereiche
            bestimmen und ihnen für ihre Arbeit Richtlinien geben.
          </p>
        ) : (
          <p>Arbeitsausschüsse werden nicht gebildet.</p>
        )}
      </section>
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
      <section id="dissolutionMajority">
        <h3>§ 12 Auflösung des Vereins</h3>
        <p>
          Die Auflösung des Vereins kann nur mit einer{' '}
          {getDissolutionMajority(answers.dissolutionMajority)} der anwesenden
          Mitglieder bei einer Mitgliederversammlung beschlossen werden.
        </p>
      </section>
    )
  }

  const location = <p id="location">{answers.clubLocation}</p>

  const date = <p id="date">{answers.decisionDate}</p>

  return (
    anyAnswerGiven && (
      <>
        {nameAndLocationParagraph}
        {businessYearParagraph}
        {clubPurposeParagraph}
        {nonProfitParagraph}
        {useOfFundsParagraph}
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
