import React from 'react'
import styled from 'styled-components/macro'

const NumberInput = ({ question, register }) => {
  return (
    <StyledNumberInput
      id={question.name}
      type="number"
      ref={register(question.validationHookForm)}
      name={question?.name || 'defaultTextInput'}
      {...question?.validationNative}
    />
  )
}

export default NumberInput

const StyledNumberInput = styled.input`
  width: 35%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
