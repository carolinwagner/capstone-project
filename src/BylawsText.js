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
    <section>
      <h3>§ 1 Name und Sitz des Vereins</h3>
      <p>{`Der Name des Vereins lautet ${answers.clubName} e.V. Der Verein hat seinen Sitz in ${answers.clubLocation}.`}</p>
    </section>
  )

  // const businessYearParagraph = (
  //   <section>
  //     <h3>§ 2 Geschäftsjahr</h3>
  //     <p>Geschäftsjahr ist das Kalenderjahr.</p>
  //   </section>
  // )

  const clubPurposeParagraph = (
    <section>
      <h3>§ 3 Zweck des Vereins</h3>
      <p>
        {`Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke
        im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der Abgabenordnung.
        Zweck des Vereins ist ${answers.clubPurpose}.`}
      </p>
    </section>
  )

  // const nonprofitParagraph = (
  //   <section>
  //     <h3>§ 4 Gemeinnützigkeit</h3>
  //     <p>
  //       Der Verein ist selbstlos tätig. Er verfolgt nicht in erster Linie
  //       eigenwirtschaftliche Zwecke.
  //     </p>
  //   </section>
  // )

  // const useOfFundsParagraph = (
  //   <section>
  //     <h3>§ 5 Mittelverwendung</h3>
  //     <p>
  //       Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet
  //       werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des
  //       Vereins.
  //     </p>
  //   </section>
  // )

  const memberParagraph = () => {
    const members = join({
      array: answers?.typeOfMembers?.filter(Boolean),
      last: ' und ',
    })
    return (
      <section>
        <h3>§ 6 Erwerb der Mitgliedschaft</h3>
        <p>
          {`${members} können Vereinsmitglieder werden. Der Aufnahmeantrag ist ${answers.typeOfRequest} zu stellen. Über den Aufnahmeantrag entscheidet der Vorstand.Gegen die Ablehnung, die keiner Begründung bedarf, steht dem/der Bewerber/in die Berufung an die Mitgliederversammlung zu, welche dann endgültig entscheidet.`}
        </p>
      </section>
    )
  }

  //only if checkbox is clicked on "yes"
  const admissionFeeParagraph = (
    <section>
      <h3>§ 7 Aufnahmegebühr</h3>
      <p>
        Vor dem Eintritt wird eine Aufnahmegebühr fällig. Die Höhe bestimmt die
        Mitgliederversammlung.
      </p>
    </section>
  )

  const memberFeeParagraph = (
    <section>
      <h3>§ 7 Mitgliedsbeiträge</h3>
      <p>
        Von den Mitgliedern werden Beiträge erhoben. Die Höhe der Beiträge und
        deren Fälligkeit bestimmt die Mitgliederversammlung.
      </p>
    </section>
  )

  const memberMeetingParagraph = (
    <section>
      <h3>§ 7 Mitgliederversammlung</h3>
      <p>{`Die Mitgliederversammlung ist das oberste Vereinsorgan. Die Mitgliederversammlung wird vom Vorstand unter Einhaltung einer Frist von ${answers.generalMeetingDeadline} Tagen ${answers.typeOfInvitationGeneralMeeting} unter Angabe der Tagesordnung einberufen. Die Mitgliederversammlung entscheidet über Belange der ${answers.generalMeetingDuties}. Die Mitgliederversammlung ist beschlussfähig, wenn ${answers.quorumQuote}. Die Mitgliederversammlung wird ${answers.generalMeetingFrequency} durchgeführt. Die Mitgliederversammlung fasst ihre Beschlüsse mit einer ${answers.generalMeetingMajority}`}</p>
    </section>
  )

  const boardCompositionParagraph = (
    <section>
      <h3>§ 8 Zusammensetzung des Vorstandes</h3>
      <p>{`Der Vorstand setzt sich zusammen aus ${answers.boardComposition} und wird für einen Zeitraum von ${answers.boardPeriod} gewählt.`}</p>
      <p>
        Eine Wiederwahl ist
        {answers.boardReelection === 'yesReelection' ? '' : ' nicht'} möglich.
      </p>
    </section>
  )

  const clubRepresentationParagraph = (
    <section>
      <h3>§ 8 Vertretung des Vereins</h3>
      <p>{`Der Verein wird vertreten von ${answers.clubRepresentation}.`}</p>
    </section>
  )

  const location = `${answers.clubLocation}`

  return (
    anyAnswerGiven && (
      <>
        {nameAndLocationParagraph}
        {/* {businessYearParagraph} */}
        {clubPurposeParagraph}
        {/* {nonprofitParagraph}
        {useOfFundsParagraph} */}
        {memberParagraph()}
        {admissionFeeParagraph}
        {memberFeeParagraph}
        {memberMeetingParagraph}
        {boardCompositionParagraph}
        {clubRepresentationParagraph}

        <h3>§ 11Vorstandssitzung</h3>
        <h3>§ 12 Mitgliederversammlung</h3>
        <h3>§ 13 Beschlussfassung</h3>
        <h3>§ 14 Arbeitsausschüsse</h3>
        <h3>§ 15 Auflösung des Vereins</h3>

        <h4>{location}, Datum</h4>
      </>
    )
  )
}
