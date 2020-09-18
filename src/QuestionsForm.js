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

export default function QuestionsForm({ onClick }) {
  const history = useHistory()
  const { register, handleSubmit, watch, errors } = useForm({
    reValidateMode: 'onSubmit',
  })

  const onFormSubmit = (data) => {
    onClick(data)
    history.push('/bylawstext')
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {questions.map((question, index) => {
        const nextQuestionPath =
          index === questions.length - 1
            ? '/bylawstext'
            : `/questions/${index + 2}`

        const previousQuestionPath = index === 0 ? '/' : `/questions/${index}`

        const buttonNextCaption =
          index === questions.length - 1 ? 'Satzung anzeigen' : 'weiter'

        const buttonPreviousCaption =
          index === 0 ? 'zurück zur Startseite' : `zurück`

        return (
          <React.Fragment key={index}>
            <Route exact path={`/questions/${index + 1}`}>
              <StyledQuestionContainer>
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

                <Link to={nextQuestionPath}>
                  <StyledButton>{buttonNextCaption}</StyledButton>
                </Link>
                <Link to={previousQuestionPath}>
                  <StyledButton>{buttonPreviousCaption}</StyledButton>
                </Link>
              </StyledQuestionContainer>
            </Route>
          </React.Fragment>
        )
      })}
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
