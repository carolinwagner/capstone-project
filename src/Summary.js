import React from 'react'
import styled from 'styled-components/macro'
import questions from './questions.json'

export default function Summary({ answers }) {
  const answersArray = Object.entries(answers)
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
    return isAnswerCheckbox
      ? answer.filter(Boolean).length > 0
      : answer.length > 0
  })

  return (
    anyAnswerGiven && (
      <>
        <h2>Bitte überprüfe noch einmal deine Antworten:</h2>
        <ul>
          {answersArray.map(([questionName, answer], index) => {
            const questionObj = questions.find(
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
                  {questionObj.questionText}
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
