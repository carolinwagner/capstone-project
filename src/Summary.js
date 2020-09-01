import React from 'react'

export default function Summary({ answers }) {
  const answersArray = Object.entries(answers)
  console.log('Answers Array', answersArray)
  return (
    <ul>
      {answersArray.map((answer, index) => {
        return (
          answer[1] && (
            <li key={index}>
              {answer[0]}:{' '}
              {Array.isArray(answer[1])
                ? JSON.stringify(answer[1].filter(Boolean))
                : answer[1]}
            </li>
          )
        )
      })}
    </ul>
  )
}
