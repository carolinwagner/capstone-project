import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button'
import { ReactComponent as WorkingIllustration } from './svgs/wfh_1.svg'

export default function Start() {
  return (
    <StyledContainer>
      <StyledParagraphHeadline>
        Du möchtest einen gemeinnützigen Verein gründen, hast aber noch keine
        Satzung parat?
      </StyledParagraphHeadline>
      <StyledIllustration />
      <StyledParagraphred>
        Dies ist ein Abschlussprojekt des Web-Development Bootcamps der
        neuefische GmbH und dient lediglich dem Zweck der Programmierung. Eine
        verbindliche Rechtsauskunft kann daher nicht gegeben werden.
      </StyledParagraphred>
      <StyledParagraph>
        Gemäß § 57 des Bürgerlichen Gesetzbuches benötigt jeder Verein eine
        Satzung. Beantworte einfach die folgenden Fragen und dir wird im
        Anschluss eine individuell auf deinen Verein abgestimmte Satzung
        generiert.
      </StyledParagraph>
      <StyledParagraph>
        Mit einem simplen Klick kannst du schließlich die Satzung in die
        Zwischenablage kopieren und beliebig wiederverwenden oder die Satzung
        als .txt Datei downloaden.
      </StyledParagraph>
      <StyledSmallButtonContainer>
        <StyledLink to="/questions/1">
          <Button variant="primary">Zu den Fragen</Button>
        </StyledLink>
      </StyledSmallButtonContainer>
    </StyledContainer>
  )
}

const StyledIllustration = styled(WorkingIllustration)`
  height: 24%;
  opacity: 0.85;
`

const StyledSmallButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 20px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
`

const StyledParagraphHeadline = styled.h2`
  color: var(--darkgrey);
  line-height: 1.5;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`
const StyledParagraph = styled.p`
  color: var(--darkgrey);
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 5px;
  margin-top: 5px;
`
const StyledParagraphred = styled.p`
  color: red;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
