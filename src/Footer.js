import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <StyledFooterContainer>
      <StyledLink to="/impressum">Impressum</StyledLink>
    </StyledFooterContainer>
  )
}

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
