import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <StyledHeader>Hello Bylaws</StyledHeader>
}

const StyledHeader = styled.h1`
  margin-top: 20px;
  margin-bottom: 0;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.05em;
  font-weight: 600;
  text-align: center;
  font-size: 45px;
  color: var(--blue);
`
