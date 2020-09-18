import React from 'react'
import styled from 'styled-components/macro'

const DateInput = ({ question, register }) => {
  const minToday = question?.validationNative?.minToday
  const getToday = () => new Date().toISOString().split('T')[0]
  return (
    <StyledDateInput
      tabindex="0"
      id={question.name}
      type="date"
      name={question?.name || 'defaultDateInput'}
      ref={register(question.validationHookForm)}
      {...(minToday && { min: getToday() })}
    />
  )
}

export default DateInput

const StyledDateInput = styled.input`
  font-family: 'lato';
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
