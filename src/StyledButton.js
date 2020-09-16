import React from 'react'
import styled from 'styled-components/macro'

function ContainerButton({ text }) {
  return (
    <StyledContainer>
      <StyledButton>{text}</StyledButton>
    </StyledContainer>
  )
}

const StyledButton = styled.button`
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--blue);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
`

export default ContainerButton
