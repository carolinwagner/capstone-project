import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import questions from './questions.json'
import styled from 'styled-components/macro'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import CheckboxInput from './CheckboxInput'
import RadioInput from './RadioInput'

export default function QuestionsAndAnswerPossibilities({ onClick }) {
  const { register, handleSubmit } = useForm()
  const [answers, setAnswers] = useState({})

  const onAnswer = (name, value) => {
    setAnswers({ [name]: value, ...answers })
  }

  const onSubmit = (data) => {
    console.log(data)
    onClick(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions.map((question, index) => (
        <React.Fragment key={index}>
          <h2>
            Frage {index + 1} von {questions.length}
          </h2>
          <p>{question.questionText}</p>
          {question.answerType === 'text' && (
            <TextInput question={question} onAnswer={onAnswer} />
          )}
          {question.answerType === 'number' && (
            <NumberInput question={question} onAnswer={onAnswer} />
          )}

          {question.answerType === 'checkbox' && (
            <CheckboxInput ref={register} question={question} />
          )}

          {question.answerType === 'radio' && (
            <RadioInput ref={register} question={question} />
          )}
        </React.Fragment>
      ))}
      <StyledContainer>
        <StyledButton type="submit">Zusammenfassung anzeigen</StyledButton>
        {JSON.stringify(answers)}
      </StyledContainer>
    </form>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  margin: 100px;
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--lightblue);
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
