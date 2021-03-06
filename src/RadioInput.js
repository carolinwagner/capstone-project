import React from 'react'
import styled from 'styled-components/macro'

const RadioInput = ({ question, register, defaultValue }) => {
  return (
    <div>
      {question.answerOptions.map((answerOption) => {
        const isChecked = defaultValue === answerOption.name
        return (
          <StyledRadioContainer key={answerOption.name}>
            <StyledRadioInput
              name={question?.name || 'defaultRadioInput'}
              value={answerOption.name}
              id={answerOption.name}
              type="radio"
              ref={register(question.validationHookForm)}
              defaultChecked={isChecked}
              {...question?.validationNative}
            />
            <StyledLabel htmlFor={answerOption.name}>
              {answerOption.label}
            </StyledLabel>
          </StyledRadioContainer>
        )
      })}
    </div>
  )
}

export default RadioInput

const StyledRadioContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

const StyledRadioInput = styled.input`
  align-self: start;
  margin: 10px 10px 0;
`
const StyledLabel = styled.label`
  line-height: 1.6;
`
