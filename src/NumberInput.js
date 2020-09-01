import React, { forwardRef } from 'react'

const NumberInput = forwardRef(({ name }, ref) => {
  return <input type="number" ref={ref} name={name} />
})

export default NumberInput
