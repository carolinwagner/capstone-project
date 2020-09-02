import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const TextInput = forwardRef(({ question, onChange }) => {
  return (
    <StyledTextInput name={question.name} onChange={onChange} type="text" />
  )
})

export default TextInput

const StyledTextInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
