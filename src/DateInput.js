import React from 'react'
import styled from 'styled-components/macro'

const DateInput = ({ question, register, defaultValue }) => {
  const minToday = question?.validationNative?.minToday
  const getToday = () => new Date().toISOString().split('T')[0]
  return (
    <StyledDateInput
      id={question.name}
      type="date"
      name={question?.name || 'defaultDateInput'}
      ref={register(question.validationHookForm)}
      defaultValue={defaultValue}
      {...(minToday && { min: getToday() })}
    />
  )
}

export default DateInput

const StyledDateInput = styled.input`
  font-family: 'Lato';
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
