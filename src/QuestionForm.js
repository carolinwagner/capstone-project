import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components/macro'
import CheckboxInput from './CheckboxInput'
import DateInput from './DateInput'
import NumberInput from './NumberInput'
import RadioInput from './RadioInput'
import TextInput from './TextInput'
import { ReactComponent as InfoIcon } from './svgs/info.svg'
import { ReactComponent as ChevronUpIcon } from './svgs/chevron-up.svg'
import questions from './questions.json'
import Button from './Button'

export default function QuestionForm({
  question,
  index,
  watch,
  errors,
  register,
}) {
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible)
  }

  const transitions = useTransition(isInfoVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

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
            <Button variant="secondary" type="button" onClick={toggleInfo}>
              <InfoIcon />
              <StyledInfoText>
                {isInfoVisible ? 'Weniger' : 'Mehr'} Infos
              </StyledInfoText>
              <StyledChevronUpIcon isInfoVisible={isInfoVisible} />
            </Button>
            {transitions.map(
              ({ item, key, props }) =>
                item && (
                  <animated.p key={key} style={props}>
                    {question.info}
                  </animated.p>
                )
            )}
          </StyledInfoContainer>
        )}
      </StyledQuestionAndInputContainer>
    </>
  )
}

const StyledQuestionAndInputContainer = styled.section`
  padding: 20px 20px 0 20px;
  flex: 1;
`

const StyledInfoContainer = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  & p {
    color: var(--darkgrey);
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`

const StyledInfoText = styled.span`
  text-align: center;
  flex: 1;
`

const StyledChevronUpIcon = styled(ChevronUpIcon)`
  transform: ${(props) =>
    props.isInfoVisible ? 'rotate(0deg);' : 'rotate(180deg)'};
  transition: transform 0.5s ease-in-out;
`

const StyledQuestionHeadline = styled.h2`
  color: var(--darkgrey-main);
`

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 75%;

  ::before {
    display: inline;
    content: '❗️';
  }
`
