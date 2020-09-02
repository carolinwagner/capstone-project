import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const CheckboxInput = forwardRef(({ answerOptions, name }, ref) => {
  return (
    <div>
      {answerOptions.map((answerOption, innerIndex) => {
        const inputName = `${name}[${innerIndex}]`
        return (
          <div key={answerOption.name}>
            <StyledCheckboxInput
              name={inputName}
              id={answerOption.name}
              value={answerOption.label}
              type="checkbox"
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
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--lightblue);
`
