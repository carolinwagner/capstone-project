import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <>
      <StyledHeader>Hello Bylaws</StyledHeader>
    </>
  )
}

const StyledHeader = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  color: var(--lightblue);
`
