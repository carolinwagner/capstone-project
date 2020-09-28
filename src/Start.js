import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button'

export default function Start() {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledParagraphHeadline>
          Du bist Vereinsgründer und hast noch keine Vereinssatzung?
        </StyledParagraphHeadline>
        <StyledParagraph>
          Gemäß § 57 des Bürgerlichen Gesetzbuches benötigt jeder gemeinnützige
          Verein eine Satzung. Beantworte einfach die folgenden Fragen und dir
          wird im Anschluss eine individuell auf deinen Verein abgestimmte
          Satzung generiert.
        </StyledParagraph>
        <StyledParagraph>
          Mit einem simplen Klick kannst du dir schließlich die Satzung in die
          Zwischenablage kopieren und beliebig wiederverwenden.
        </StyledParagraph>
      </StyledTextContainer>
      <StyledSmallButtonContainer>
        <StyledLink to="/questions/1">
          <Button variant="primary">Zu den Fragen</Button>
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

const StyledParagraphHeadline = styled.h2`
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
