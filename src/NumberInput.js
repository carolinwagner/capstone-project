import React from 'react'
import styled from 'styled-components/macro'

const NumberInput = ({ question, register = () => {}, defaultValue }) => {
  return (
    <StyledCenterInput>
      <StyledNumberInput
        autoFocus
        id={question.name}
        type="number"
        ref={register(question.validationHookForm)}
        name={question?.name || 'defaultTextInput'}
        defaultValue={defaultValue}
        {...question?.validationNative}
      />
    </StyledCenterInput>
  )
}

export default NumberInput

const StyledNumberInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`

const StyledCenterInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
