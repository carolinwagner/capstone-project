import React from 'react'
import styled from 'styled-components/macro'

const TextInput = ({ question, register }) => {
  const regex =
    question?.validationHookForm?.pattern &&
    new RegExp(question?.validationHookForm?.pattern)

  const validationClone = {
    ...question.validationHookForm,
    ...(regex && { pattern: regex }),
  }

  return (
    <StyledTextInput
      type="text"
      name={question?.name || 'defaultTextInput'}
      ref={register(validationClone)}
      {...question?.validationNative}
    />
  )
}

export default TextInput

const StyledTextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
