import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import StyledSmallButton from './StyledSmallButton'

export default function Start() {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledParagraphHeadline>
          Du bist möchtest einen gemeinnützigen Verein gründen, hast aber noch
          keine Satzung parat?
        </StyledParagraphHeadline>
        <StyledParagraph>
          Gemäß § 57 des Bürgerlichen Gesetzbuches benötigt jeder gemeinnützige
          Verein eine Satzung. Beantworte einfach die folgenden Fragen und dir
          wird im Anschluss eine individuell auf deinen Verein abgestimmte
          Satzung generiert.
        </StyledParagraph>
        <StyledParagraph>
          Mit einem simplen Klick kannst du dir schließlich die Satzung in die
          Zwischenablage kopieren und beliebig wiederverwenden oder die Satzung
          als text-Datei downloaden.
        </StyledParagraph>
      </StyledTextContainer>
      <StyledSmallButtonContainer>
        <StyledLink to="/questions/1">
          <StyledSmallButton>Zu den Fragen</StyledSmallButton>
        </StyledLink>
      </StyledSmallButtonContainer>
    </StyledContainer>
  )
}

const StyledSmallButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  height: 100%;
`

const StyledTextContainer = styled.div`
  padding: 25px 0;
`

const StyledParagraphHeadline = styled.p`
  color: var(--darkgrey);
  line-height: 1.5;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
`
const StyledParagraph = styled.p`
  color: var(--darkgrey);
  line-height: 1.5;
  font-weight: 300;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
