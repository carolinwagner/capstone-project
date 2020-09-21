import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import StyledButton from './StyledButton'

export default function Start() {
  return (
    <StyledContainer>
      <p>
        Jeder gemeinnützige Verein benötigt gemäß § 57 des Bürgerlichen
        Gesetzbuches eine Satzung.
      </p>
      <p>
        Beantworte einfach die folgenden Fragen und dir wird im Anschluss eine
        individuell auf deinen Verein abgestimmte Satzung generiert.
      </p>
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
  width: 100%;
  padding: 20px;
`
