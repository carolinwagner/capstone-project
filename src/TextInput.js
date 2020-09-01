import React, { forwardRef } from 'react'

const TextInput = forwardRef(({ name }, ref) => {
  return <input name={name} ref={ref} type="text" />
})

export default TextInput
