import React from 'react'

export default function Summary({ answers }) {
  const answersArray = Object.entries(answers)
  console.log(answersArray)
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
          {answersArray.map(([question, answer], index) => {
            const isAnswerCheckbox = Array.isArray(answer)

            // Don't show checkboxes with falsy values (not checked ones)
            const displayValue = isAnswerCheckbox
              ? answer.filter(Boolean).join(' und ')
              : answer

            return (
              displayValue && (
                <li key={index}>
                  {question}
                  <br /> <strong>{displayValue}</strong>
                </li>
              )
            )
          })}
        </ul>
      </>
    )
  )
}
