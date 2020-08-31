import React from 'react'

export default function NumberInput({ onChange, value, index }) {
  return (
    <input
      onChange={onChange}
      value={value}
      type="number"
      key={`number${index}`}
    />
  )
}
