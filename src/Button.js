import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ children, variant, ...rest }) {
  const buttonSwitch = {
    primary: <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>,
    secondary: (
      <StyledSecondaryButton {...rest}>{children}</StyledSecondaryButton>
    ),
  }
  return buttonSwitch[variant]
}

const StyledBaseButton = styled.button`
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  border: none;
`

const StyledPrimaryButton = styled(StyledBaseButton)`
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--blue);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  flex: 1;
`

const StyledSecondaryButton = styled(StyledBaseButton)`
  padding: 10px;
  color: var(--lightgrey);
  background-color: var(--lightblue);
`
