import React from 'react'

export default function RadioInput({ index, answerOptions }) {
  return (
    <div>
      {answerOptions.map((answerOption, innerIndex) => (
        <div key={`radio${index}${innerIndex}`}>
          <input name={index} type="radio" />
          <label>{answerOption}</label>
        </div>
      ))}
    </div>
  )
}
