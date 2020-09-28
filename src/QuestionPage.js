import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Route, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import QuestionForm from './QuestionForm'
import questions from './questions.json'
import { ReactComponent as ArrowLeftIcon } from './svgs/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from './svgs/arrow-right.svg'
import Button from './Button'

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
          ? { path: '/bylawstext', caption: 'zur Satzung' }
          : { path: `/questions/${index + 2}`, caption: 'weiter' }

        const buttonPrevious = isFirstQuestion
          ? { path: '/', caption: 'Startseite' }
          : { path: `/questions/${index}`, caption: 'zurück' }

        const onFormSubmit = (data) => {
          onAddAnswer(data)
          history.push(buttonNext.path)
        }

        return (
          <Route key={question.name} exact path={`/questions/${index + 1}`}>
            <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
              <QuestionForm
                question={question}
                index={index}
                register={register}
                watch={watch}
                errors={errors}
              />
              <StyledFooterContainer>
                <StyledPreviousLink to={buttonPrevious.path}>
                  <ArrowLeftIcon />
                  <StyledSmallButtonText>
                    {buttonPrevious.caption}
                  </StyledSmallButtonText>
                </StyledPreviousLink>
                <Button variant="primary" type="submit">
                  <StyledSmallButtonText>
                    {buttonNext.caption}
                  </StyledSmallButtonText>
                  <ArrowRightIcon />
                </Button>
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

const StyledFooterContainer = styled.footer`
  display: flex;
  padding: 20px;
`

const StyledPreviousLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
  color: var(--blue);
  background-color: var(--lightgrey);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  flex: 1;
`

const StyledSmallButtonText = styled.span`
  color: var--(lightgrey);
  text-align: center;
  flex: 1;
`
