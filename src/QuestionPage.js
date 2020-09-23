import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Route, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import questions from './questions.json'
import StyledButton from './StyledButton'
import QuestionForm from './QuestionForm'

export default function QuestionPage({ onAddAnswer }) {
  const history = useHistory()
  const { handleSubmit, register, watch, errors } = useForm({
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
              <QuestionForm
                question={question}
                index={index}
                register={register}
                watch={watch}
                errors={errors}
              />
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
  overflow-y: scroll;
`

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
