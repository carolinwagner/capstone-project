import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Route, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import QuestionForm from './QuestionForm'
import questions from './questions.json'
import { ReactComponent as ArrowLeftIcon } from './svgs/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from './svgs/arrow-right.svg'

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
                <StyledLink to={buttonPrevious.path}>
                  <StyledPreviousButton type="button">
                    <ArrowLeftIcon />
                    <StyledButtonText>
                      {buttonPrevious.caption}
                    </StyledButtonText>
                  </StyledPreviousButton>
                </StyledLink>
                <StyledNextButton type="submit">
                  <StyledButtonText>{buttonNext.caption}</StyledButtonText>
                  <StyledArrowRightIcon />
                </StyledNextButton>
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
  align-items: stretch;
  justify-content: space-between;
  padding: 20px;
`
const StyledPreviousButton = styled.button`
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

const StyledNextButton = styled.button`
  padding: 20px;
  color: var(--lightgrey);
  background-color: var(--blue);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  flex: 1;
`

const StyledButtonText = styled.span`
  color: var--(lightgrey);
  text-align: center;
  flex: 1;
`
const StyledArrowRightIcon = styled(ArrowRightIcon)``
