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
              id={answerOption.name}
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
  margin: 5px 10px 5px 0;
`
