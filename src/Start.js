import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import StyledButton from './StyledButton'

export default function Start() {
  return (
    <>
      <p>
        Jeder gemeinnützige Verein benötigt gemäß § 57 des Bürgerlichen
        Gesetzbuches eine Satzung.
      </p>
      <p>
        Beantworte einfach die folgenden Fragen und dir wird im Anschluss eine
        individuell auf deinen Verein abgestimmte Satzung generiert.
      </p>
      <StyledContainer>
        <Link exact to="/questions">
          <StyledButton>Zu den Fragen</StyledButton>
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
