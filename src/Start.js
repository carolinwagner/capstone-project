import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import StyledSmallButton from './StyledSmallButton'

export default function Start() {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledParagraph>
          Jeder gemeinnützige Verein benötigt gemäß <br />§ 57 des Bürgerlichen
          Gesetzbuches eine Satzung.
        </StyledParagraph>
        <StyledParagraph>
          Beantworte einfach die folgenden Fragen und dir wird im Anschluss eine
          individuell auf deinen Verein abgestimmte Satzung generiert.
        </StyledParagraph>
        <StyledParagraph>
          Mit einem simplen Klick kannst du dir schließlich die Satzung in die
          Zwischenablage kopieren und beliebig wiederverwenden.
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
  flex: 1;
  padding: 10px 0;
`

const StyledParagraph = styled.p`
  color: var(--darkgrey);
  line-height: 1.5;
  font-weight: 300;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
