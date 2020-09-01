import React, { forwardRef } from 'react'

const CheckboxInput = forwardRef(({ answerOptions, name }, ref) => {
  return (
    <div>
      {answerOptions.map((answerOption, innerIndex) => {
        const inputName = `${name}[${innerIndex}]`
        return (
          <div key={answerOption.name}>
            <input
              name={inputName}
              id={answerOption.name}
              value={answerOption.name}
              type="checkbox"
              ref={ref}
            />
            <label htmlFor={answerOption.name}>{answerOption.label}</label>
          </div>
        )
      })}
    </div>
  )
})

export default CheckboxInput
