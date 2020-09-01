import React, { forwardRef } from 'react'

const RadioInput = forwardRef(({ answerOptions }, ref) => {
  return (
    <div>
      {answerOptions.map((answerOption) => {
        return (
          <div key={answerOption.name}>
            <input ref={ref} name={answerOption.name} type="radio" />
            <label>{answerOption.label}</label>
          </div>
        )
      })}
    </div>
  )
})

export default RadioInput
