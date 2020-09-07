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
            <StyledLabel htmlFor={answerOption.name}>
              {answerOption.label}
            </StyledLabel>
          </div>
        )
      })}
    </div>
  )
})

export default CheckboxInput

const StyledCheckboxInput = styled.input`
  margin: 15px 10px 10px 0;
`
const StyledLabel = styled.label`
  line-height: 1.6;
`
