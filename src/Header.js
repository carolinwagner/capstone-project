import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <StyledHeader>Hello Bylaws</StyledHeader>
}

const StyledHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 45px;
  color: var(--blue);
`
