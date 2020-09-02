import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const RadioInput = forwardRef(({ answerOptions }, ref) => {
  return (
    <div>
      {answerOptions.map((answerOption) => {
        return (
          <div key={answerOption.name}>
            <StyledRadioInput ref={ref} name={answerOption.name} type="radio" />
            <label>{answerOption.label}</label>
          </div>
        )
      })}
    </div>
  )
})

export default RadioInput

const StyledRadioInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--lightblue);
`
