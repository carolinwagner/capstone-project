import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const CheckboxInput = forwardRef(({ question }, ref) => {
  return (
    <div>
      {question.answerOptions.map((answerOption, innerIndex) => {
        const inputName = `${question?.questionText}[${innerIndex}]`
        return (
          <div key={answerOption.name}>
            <StyledCheckboxInput
              type="checkbox"
              name={inputName || 'defaultCheckboxInput'}
              id={answerOption.name}
              value={answerOption.label}
              ref={ref}
            />
            <label htmlFor={answerOption.name}>{answerOption.label}</label>
          </div>
        )
      })}
    </div>
  )
})

export default CheckboxInput

const StyledCheckboxInput = styled.input`
  margin: 5px 10px 5px 0;
`
