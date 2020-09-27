import React from 'react'
import styled from 'styled-components/macro'

const TextInput = ({ question, register, defaultValue }) => {
  const regex =
    question?.validationHookForm?.pattern &&
    new RegExp(question?.validationHookForm?.pattern)

  const validationClone = {
    ...question.validationHookForm,
    ...(regex && { pattern: regex }),
  }

  return (
    <StyledTextInput
      autoFocus
      id={question.name}
      type="text"
      placeholder={question.placeholder}
      name={question?.name || 'defaultTextInput'}
      defaultValue={defaultValue}
      ref={register(validationClone)}
      {...question?.validationNative}
    />
  )
}

export default TextInput

const StyledTextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid var(--blue);
  border-radius: 4px;
`
