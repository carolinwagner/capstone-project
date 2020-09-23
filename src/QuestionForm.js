import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CheckboxInput from './CheckboxInput'
import DateInput from './DateInput'
import NumberInput from './NumberInput'
import RadioInput from './RadioInput'
import TextInput from './TextInput'
import { ReactComponent as InfoIcon } from './svgs/info.svg'
import questions from './questions.json'

export default function QuestionForm({
  question,
  index,
  watch,
  errors,
  register,
}) {
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  const toggleInfo = () => setIsInfoVisible(!isInfoVisible)
  return (
    <>
      <StyledQuestionAndInputContainer>
        <StyledQuestionHeadline>
          Frage {index + 1} von {questions.length}
        </StyledQuestionHeadline>
        <label htmlFor={question.name}>{question.questionText}</label>
        {question.answerType === 'text' && (
          <TextInput question={question} register={register} />
        )}
        {question.answerType === 'number' && (
          <NumberInput question={question} register={register} />
        )}
        {question.answerType === 'checkbox' && (
          <CheckboxInput
            question={question}
            register={register}
            watch={watch}
          />
        )}
        {question.answerType === 'radio' && (
          <RadioInput question={question} register={register} />
        )}
        {question.answerType === 'date' && (
          <DateInput question={question} register={register} />
        )}

        {errors[question?.name] && (
          <StyledErrorMessage data-cy={'errorMessage'}>
            Diese Frage muss beantwortet werden
          </StyledErrorMessage>
        )}
        {question.info && (
          <StyledInfoContainer>
            <StyledInfoButton type="button" onClick={toggleInfo}>
              <StyledInfoIcon />
              <StyledInfoText>Mehr Infos</StyledInfoText>
            </StyledInfoButton>
            {isInfoVisible && <p>{question.info}</p>}
          </StyledInfoContainer>
        )}
      </StyledQuestionAndInputContainer>
    </>
  )
}

const StyledQuestionAndInputContainer = styled.div`
  padding: 20px 20px 0 20px;
  flex: 1;
`

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 300;
    font-size: 0.92rem;
  }
`

const StyledInfoButton = styled.div`
  margin-top: 40px;
  padding: 10px;
  color: var(--lightgrey);
  background-color: var(--lightblue);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledInfoIcon = styled(InfoIcon)``

const StyledInfoText = styled.span`
  text-align: center;
  flex: 1;
`

const StyledQuestionHeadline = styled.h2`
  color: var(--darkgrey-main);
`

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 75%;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`
