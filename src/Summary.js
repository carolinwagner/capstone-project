import React from 'react'
import styled from 'styled-components/macro'
import questions from './questions.json'

export default function Summary({ answers }) {
  const answersArray = Object.entries(answers)
  const anyAnswerGiven = answersArray.some((oneAnswer) => {
    const isAnswerCheckbox = Array.isArray(oneAnswer[1])
    return isAnswerCheckbox
      ? oneAnswer[1].filter(Boolean).length > 0
      : oneAnswer[1].length > 0
  })

  return (
    anyAnswerGiven && (
      <>
        <h2>Bitte überprüfe noch einmal deine Antworten:</h2>
        <ul>
          {answersArray.map(([questionName, answer], index) => {
            const questionObj = questions.filter(
              (question) => question.name === questionName
            )
            const isAnswerCheckbox = Array.isArray(answer)

            // Don't show checkboxes with falsy values (not checked ones)
            const displayValue = isAnswerCheckbox
              ? answer.filter(Boolean).join(' und ')
              : answer

            return (
              displayValue && (
                <li key={index}>
                  {questionObj[0].questionText}
                  <StyledDisplayValue>{displayValue}</StyledDisplayValue>
                </li>
              )
            )
          })}
        </ul>
      </>
    )
  )
}

const StyledDisplayValue = styled.p`
  font-weight: bold;
  word-wrap: break-word;
`
