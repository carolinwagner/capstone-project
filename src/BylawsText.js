import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
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
import StyledButton from './StyledButton'

export default function BylawsText({ answers }) {
  const bylawsRef = useRef(null)
  const answersArray = Object.entries(answers || {})
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
    return isAnswerCheckbox
      ? answer.filter(Boolean).length > 0
      : answer.length > 0
  })
  const [isTextCopied, setIsTextCopied] = useState(false)

  const copyBylawsToClipboard = () => {
    const text = bylawsRef.current?.innerText
    text &&
      navigator.clipboard
        .writeText(bylawsRef.current?.innerText)
        .then(() => setIsTextCopied(true))
  }

  const LocationAndDate = (
    <h4 id="locationAndDate">
      {answers.clubLocation},{' den '}
      {new Date(answers.decisionDate).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </h4>
  )

  return (
    <StyledContainer>
      {anyAnswerGiven && (
        <>
          <p>
            Die folgende Satzung wurde basierend auf deinen Antworten erstellt.
          </p>
          <div ref={bylawsRef}>
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
          </div>
        </>
      )}
      <StyledButtonContainer>
        <StyledButton onClick={copyBylawsToClipboard}>
          Satzungstext kopieren {isTextCopied ? ' ✅' : ''}
        </StyledButton>
        <StyledLink to="/questions/1">Fragen neu starten</StyledLink>
      </StyledButtonContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding: 20px;
  overflow-y: scroll;
`

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const StyledLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--blue);
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
`
