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
import { ReactComponent as ClipboardIcon } from './svgs/clipboard.svg'
import { ReactComponent as DownloadIcon } from './svgs/download.svg'

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

  const [isTextDownloaded, setIsTextDownloaded] = useState(false)

  const copyBylawsToClipboard = () => {
    const text = bylawsRef.current?.innerText
    text &&
      navigator.clipboard
        .writeText(bylawsRef.current?.innerText)
        .then(() => setIsTextCopied(true))
  }

  const downloadBylaws = () => {}

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
            Die folgende Satzung wurde basierend auf deinen Antworten generiert.
            Bitte überprüfe die Satzung. Gegebenenfalls kannst du natürlich noch
            Ergänzungen vornehmen.
          </p>
          <StyledSmallButtonContainer>
            <StyledCopyButton onClick={copyBylawsToClipboard}>
              <ClipboardIcon />
              <StyledCopyText>
                Satzungstext {isTextCopied ? 'kopiert' : 'kopieren'}
              </StyledCopyText>
            </StyledCopyButton>
            <StyledDownloadButton onClick={downloadBylaws}>
              <DownloadIcon />
              <StyledDownloadText>
                Satzungstext {isTextDownloaded ? 'downgeloaded' : 'downloaden'}
              </StyledDownloadText>
            </StyledDownloadButton>
          </StyledSmallButtonContainer>
          <StyledGeneratedBylaws ref={bylawsRef}>
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
          </StyledGeneratedBylaws>
        </>
      )}
      <StyledSmallButtonContainer>
        <StyledLink to="/questions/1">Fragen neu starten</StyledLink>
      </StyledSmallButtonContainer>
    </StyledContainer>
  )
}

const StyledGeneratedBylaws = styled.div`
  font-weight: 300;
  padding: 20px;
  background-color: var(--white);
  border-radius: 5px;
  margin-top: 20px;
`

const StyledContainer = styled.div`
  padding: 0;
  overflow-y: scroll;
`

const StyledSmallButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledCopyButton = styled.button`
  padding: 10px;
  color: var(--lightgrey);
  background-color: var(--lightblue);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`
const StyledCopyText = styled.span`
  text-align: center;
  flex: 1;
`
const StyledDownloadText = styled.span`
  text-align: center;
  flex: 1;
`

const StyledDownloadButton = styled.button`
  padding: 10px;
  color: var(--lightgrey);
  background-color: var(--lightblue);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledLink = styled(Link)`
  margin: 20px 0;
  text-decoration: none;
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--blue);
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
`
