import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const DateInput = forwardRef(({ question }, ref) => {
  const minToday = question?.validationNative?.minToday
  const getToday = () => new Date().toISOString().split('T')[0]
  return (
    <label>
      <StyledDateInput
        type="date"
        name={question?.name || 'defaultDateInput'}
        ref={ref}
        {...(minToday ? { min: getToday() } : {})}
      />
    </label>
  )
})

export default DateInput

const StyledDateInput = styled.input`
  font-family: 'lato';
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--lightblue);
  border-radius: 4px;
`
