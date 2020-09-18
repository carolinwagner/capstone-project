import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import StyledButton from './StyledButton'
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
  const answersArray = Object.entries(answers || {})
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
    return isAnswerCheckbox
      ? answer.filter(Boolean).length > 0
      : answer.length > 0
  })
  const LocationAndDate = (
    <h4 id="locationAndDate">
      {answers.clubLocation}, {answers.decisionDate}
    </h4>
  )

  return (
    <>
      {anyAnswerGiven && (
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

          {LocationAndDate}

          <p>
            Unterschriften der {answers.signaturesNumber} Gründungsmitglieder:
          </p>
        </>
      )}
      <StyledContainer>
        <Link to="/questions">
          <StyledButton>Zurück zu den Fragen</StyledButton>
        </Link>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
`
