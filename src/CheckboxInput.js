import React from 'react'

export default function CheckboxInput({ index, answerOptions }) {
  return (
    <div>
      {answerOptions.map((answerOption, innerIndex) => {
        const checkboxId = `checkbox${index}${innerIndex}`
        return (
          <div key={checkboxId}>
            <input id={checkboxId} type="checkbox" />
            <label htmlFor={checkboxId}>{answerOption}</label>
          </div>
        )
      })}
    </div>
  )
}
