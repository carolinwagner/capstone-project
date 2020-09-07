import React from 'react'
import { useForm } from 'react-hook-form'
import questions from './questions.json'
import styled from 'styled-components/macro'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import CheckboxInput from './CheckboxInput'
import RadioInput from './RadioInput'
import Button from './Button'

export default function QuestionsForm({ onClick }) {
  const { register, handleSubmit, errors } = useForm()

  const onFormSubmit = (data) => {
    console.log(data)
    onClick(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {questions.map((question, index) => (
        <React.Fragment key={index}>
          <h2>
            Frage {index + 1} von {questions.length}
          </h2>
          <p>{question.questionText}</p>
          {question.answerType === 'text' && (
            <TextInput
              name={question?.name}
              ref={register({ required: true })}
            />
          )}
          {question.answerType === 'number' && (
            <NumberInput
              name={question?.name}
              ref={register({ required: true })}
            />
          )}
          {question.answerType === 'checkbox' && (
            <CheckboxInput question={question} ref={register} />
          )}
          {question.answerType === 'radio' && (
            <RadioInput
              question={question}
              ref={register({ required: true })}
            />
          )}
          {errors[question?.name] &&
            errors[question?.name].type === 'required' && (
              <p>This is required</p>
            )}
        </React.Fragment>
      ))}
      <StyledContainer>
        <Button type="submit">
          <StyledButtonText>Zusammenfassung anzeigen</StyledButtonText>
        </Button>
      </StyledContainer>
    </form>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`

const StyledButtonText = styled.p`
  font-size: 1.5em;
`
