import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return <StyledFooter>Impressum</StyledFooter>
}

const StyledFooter = styled.h1`
  margin-bottom: 0;
  font-family: 'Lato';
  font-weight: 600;
  text-align: center;
  font-size: 10px;
  color: var(--blue);
`
