import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const NumberInput = forwardRef(({ name }, ref) => {
  return (
    <StyledNumberInput
      type="number"
      ref={ref}
      name={name || 'defaultTextInput'}
    />
  )
})

export default NumberInput

const StyledNumberInput = styled.input`
  width: 35%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
