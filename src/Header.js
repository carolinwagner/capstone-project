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
        Die folgenden Fragen müssen im Voraus geklärt werden, damit du dir eine
        passende Satzung individuell zusammenbauen kannst.
      </p>
    </>
  )
}

const StyledHeader = styled.h1`
  color: blue;
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  color: var(--lightblue);
`
