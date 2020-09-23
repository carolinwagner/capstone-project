import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Route, Link } from 'react-router-dom'
import questions from './questions.json'
import styled from 'styled-components/macro'
import TextInput from './TextInput'
import NumberInput from './NumberInput'
import CheckboxInput from './CheckboxInput'
import RadioInput from './RadioInput'
import DateInput from './DateInput'
import StyledButton from './StyledButton'

export default function QuestionsForm({ onAddAnswer }) {
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm({
    reValidateMode: 'onSubmit',
  })

  return (
    <>
      {questions.map((question, index) => {
        const isLastQuestion = index === questions.length - 1
        const isFirstQuestion = index === 0

        const buttonNext = isLastQuestion
          ? { path: '/bylawstext', caption: 'Satzung anzeigen' }
          : { path: `/questions/${index + 2}`, caption: 'weiter' }

        const buttonPrevious = isFirstQuestion
          ? { path: '/', caption: 'zur Startseite' }
          : { path: `/questions/${index}`, caption: 'zurück' }

        const onFormSubmit = (data) => {
          onAddAnswer(data)
          history.push(buttonNext.path)
        }

        return (
          <Route key={index} exact path={`/questions/${index + 1}`}>
            <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
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
              </StyledQuestionAndInputContainer>
              <StyledFooterContainer>
                <Link to={buttonPrevious.path}>
                  <StyledButton type="button">
                    {buttonPrevious.caption}
                  </StyledButton>
                </Link>
                <StyledButton type="submit">{buttonNext.caption}</StyledButton>
              </StyledFooterContainer>
            </StyledForm>
          </Route>
        )
      })}
    </>
  )
}

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledQuestionAndInputContainer = styled.div`
  padding: 20px 20px 0 20px;
  flex: 1;
`

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
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
