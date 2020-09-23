import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import StyledButton from './StyledButton'

export default function Start() {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <p>
          Jeder gemeinnützige Verein benötigt gemäß § 57 des Bürgerlichen
          Gesetzbuches eine Satzung.
        </p>
        <p>
          Beantworte einfach die folgenden Fragen und dir wird im Anschluss eine
          individuell auf deinen Verein abgestimmte Satzung generiert.
        </p>
        <p>
          Mit einem simplen Klick kannst du dir schließlich die Satzung in die
          Zwischenablage kopieren und beliebig wiederverwenden.
        </p>
      </StyledTextContainer>
      <StyledButtonContainer>
        <Link to="/questions/1">
          <StyledButton>Zu den Fragen</StyledButton>
        </Link>
      </StyledButtonContainer>
    </StyledContainer>
  )
}

const StyledButtonContainer = styled.div`
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
`
