import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from './Button'

export default function Impressum() {
  return (
    <>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Carolin Wagner <br />
        Richardstraße 62
        <br /> 22089 Hamburg
        <br />
        hello@carolin-wagner.de
      </p>

      <StyledSmallButtonContainer>
        <StyledLink to="/">
          <Button variant="primary">Zur Startseite</Button>
        </StyledLink>
      </StyledSmallButtonContainer>
    </>
  )
}

const StyledSmallButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
