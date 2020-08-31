import React from 'react'

export default function TextInput({ onChange, value }) {
  return <input onChange={onChange} value={value} type="text" />
}
