import React from 'react'
import styled from 'styled-components/macro'

const CheckboxInput = ({ question, register, watch }) => {
  return (
    <div>
      {question.answerOptions.map((answerOption, innerIndex) => {
        const inputName = `${question?.name}[${innerIndex}]`
        return (
          <StyledCheckboxContainer key={answerOption.name}>
            <StyledCheckboxInput
              type="checkbox"
              name={inputName || 'defaultCheckboxInput'}
              id={answerOption.innerId}
              value={answerOption.name}
              ref={register(
                question.validationHookForm?.oneOfGroupRequired && {
                  validate: () =>
                    watch(question.name).some((checkbox) => checkbox),
                }
              )}
            />
            <StyledLabel htmlFor={answerOption.innerId}>
              {answerOption.label}
            </StyledLabel>
          </StyledCheckboxContainer>
        )
      })}
    </div>
  )
}

export default CheckboxInput

const StyledCheckboxContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

const StyledCheckboxInput = styled.input`
  align-self: start;
  margin: 10px 10px 0;
`
const StyledLabel = styled.label`
  line-height: 1.6;
`
