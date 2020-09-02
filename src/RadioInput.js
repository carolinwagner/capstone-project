import React, { forwardRef } from 'react'
// import styled from 'styled-components/macro'

const RadioInput = forwardRef(({ question }, ref) => {
  return (
    <div>
      {question.answerOptions.map((answerOption) => {
        const inputName = answerOption.name
        return (
          <div key={inputName}>
            <input
              name={answerOption}
              id={answerOption.name}
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

// const StyledRadioInput = styled.input`
//   padding: 10px;
//   margin-right: 10px;
//   border: 1px solid var(--lightblue);
// `
