import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const RadioInput = forwardRef(({ question }, ref) => {
  return (
    <div>
      {question.answerOptions.map((answerOption) => {
        return (
          <div key={answerOption.name}>
            <StyledRadioInput
              name={question?.questionText || 'defaulRadioInput'}
              value={answerOption.label}
              type="radio"
              ref={ref}
            />
            <label htmlFor={answerOption.name}>{answerOption.label}</label>
          </div>
        )
      })}
    </div>
  )
})

export default RadioInput

const StyledRadioInput = styled.input`
  margin-right: 10px;
`
