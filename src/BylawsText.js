import React from 'react'
import AdmissionFeeParagraph from './paragraphs/AdmissionFeeParagraph'
import BoardCompositionParagraph from './paragraphs/BoardCompositionParagraph'
import BoardMeetingParagraph from './paragraphs/BoardMeetingParagraph'
import BusinessYearParagraph from './paragraphs/BusinessYearParagraph'
import ClubPurposeParagraph from './paragraphs/ClubPurposeParagraph'
import ClubRepresentationParagraph from './paragraphs/ClubRepresentationParagraph'
import CommitteesParagraph from './paragraphs/CommitteesParagraph'
import DissolutionMajorityParagraph from './paragraphs/DissolutionMajorityParagraph'
import MemberFeeParagraph from './paragraphs/MemberFeeParagraph'
import MemberMeetingParagraph from './paragraphs/MemberMeetingParagraph'
import MembersParagraph from './paragraphs/MembersParagraph'
import NameAndLocationParagraph from './paragraphs/NameAndLocationParagraph'
import NonProfitParagraph from './paragraphs/NonProfitParagraph'
import UseOfFundsParagraph from './paragraphs/UseOfFundsParagraph'

export default function BylawsText({ answers }) {
  const answersArray = Object.entries(answers)
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
    return isAnswerCheckbox
      ? answer.filter(Boolean).length > 0
      : answer.length > 0
  })
  const location = <p id="location">{answers.clubLocation}</p>
  const date = <p id="date">{answers.decisionDate}</p>

  return (
    anyAnswerGiven && (
      <>
        <p>
          Die folgende Satzung wurde basierend auf deinen Antworten erstellt.
        </p>
        <NameAndLocationParagraph answers={answers} />
        <BusinessYearParagraph />
        <ClubPurposeParagraph answers={answers} />
        <NonProfitParagraph />
        <UseOfFundsParagraph />
        <MembersParagraph answers={answers} />
        <AdmissionFeeParagraph answers={answers} />
        <MemberFeeParagraph answers={answers} />
        <MemberMeetingParagraph answers={answers} />
        <BoardCompositionParagraph answers={answers} />
        <ClubRepresentationParagraph answers={answers} />
        <BoardMeetingParagraph answers={answers} />
        <CommitteesParagraph answers={answers} />
        <DissolutionMajorityParagraph answers={answers} />

        <h4>
          {location}, {date}
        </h4>
        <h4>__________________________________</h4>
        <p>Unterschrift der Gründungsmitglieder</p>
      </>
    )
  )
}
