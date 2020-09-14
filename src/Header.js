import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <>
      <StyledHeader>Hello Bylaws</StyledHeader>
      <p>
        Jeder gemeinnützige Verein benötigt gemäß § 57 des Bürgerlichen
        Gesetzbuches eine Satzung.
      </p>
      <p>
        Beantworte einfach die folgenden Fragen und dir wird im Anschluss eine
        individuell auf deinen Verein abgestimmte Satzung generiert.
      </p>
    </>
  )
}

const StyledHeader = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  color: var(--lightblue);
`
