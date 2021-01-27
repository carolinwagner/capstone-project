import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return <StyledFooter>Impressum</StyledFooter>
}

const StyledFooter = styled.h1`
  margin-top: 20px;
  margin-bottom: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-align: center;
  font-size: 30px;
  color: var(--blue);
`
