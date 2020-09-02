import React from 'react'

export default function Summary({ answers }) {
  const answersArray = Object.entries(answers)
  return (
    <ul>
      <li>{JSON.stringify(answers)}</li>
      {answersArray.map(([question, answer], index) => {
        const displayValue = Array.isArray(answer)
          ? answer.filter(Boolean)
          : answer

        return (
          displayValue.length > 0 && (
            <li key={index}>
              {question}
              <br /> <strong>{displayValue}</strong>
            </li>
          )
        )
      })}
    </ul>
  )
}
