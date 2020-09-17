import React from 'react'
import { useForm } from 'react-hook-form'
import questions from './questions.json'
import styled from 'styled-components/macro'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import CheckboxInput from './CheckboxInput'
import RadioInput from './RadioInput'
import DateInput from './DateInput'
import StyledButton from './StyledButton'

export default function QuestionsForm({ onClick }) {
  const { register, handleSubmit, watch, errors } = useForm({
    reValidateMode: 'onSubmit',
  })

  const onFormSubmit = (data) => {
    onClick(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {questions.map((question, index) => (
        <React.Fragment key={index}>
          <StyledQuestionContainer>
            <h2>
              Frage {index + 1} von {questions.length}
            </h2>
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
          </StyledQuestionContainer>
        </React.Fragment>
      ))}
      <StyledContainer>
        <StyledButton type="submit">Satzungstext anzeigen</StyledButton>
      </StyledContainer>
    </form>
  )
}

const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 75%;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`
