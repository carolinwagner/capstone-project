import React from 'react'

export default function Summary({ answers }) {
  return (
    <ol>
      {answers.map((answer, index) => (
        <li key={index}>{answer} </li>
      ))}
    </ol>
  )
}
