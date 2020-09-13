import React from 'react'
import styled from 'styled-components/macro'
import questions from './questions.json'

export default function Summary({ answers }) {
  const answersArray = Object.entries(answers)
<<<<<<< HEAD
  console.log('answerArray', answersArray)
  const anyAnswerGiven = answersArray.some(([_, answer]) => {
    const isAnswerCheckbox = Array.isArray(answer)
=======
  const anyAnswerGiven = answersArray.some((oneAnswer) => {
    const isAnswerCheckbox = Array.isArray(oneAnswer[1])
>>>>>>> master
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
<<<<<<< HEAD
            const questionObj = questions.find(
=======
            const questionObj = questions.filter(
>>>>>>> master
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
<<<<<<< HEAD
                  {questionObj.questionText}
=======
                  {questionObj[0].questionText}
>>>>>>> master
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
