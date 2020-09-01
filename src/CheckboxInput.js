import React from 'react'

export default function CheckboxInput({ index, answerOptions, onChange }) {
  return (
    <div>
      {answerOptions.map((answerOption, innerIndex) => {
        const checkboxId = `checkbox${index}${innerIndex}`
        return (
          <div key={checkboxId}>
            <input
              onChange={(event) => onChange(innerIndex, event.target.checked)}
              id={checkboxId}
              type="checkbox"
            />
            <label htmlFor={checkboxId}>{answerOption}</label>
          </div>
        )
      })}
    </div>
  )
}
