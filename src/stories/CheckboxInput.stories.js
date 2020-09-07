import React from 'react'
import CheckboxInput from '../CheckboxInput'

export default {
  title: 'CheckboxInput',
  component: CheckboxInput,
}

const defaultQuestion = {
  answerOptions: [
    { label: 'a', name: 'a' },
    { label: 'b', name: 'b' },
    { label: 'c', name: 'd' },
    { label: 'd', name: 'd' },
  ],
}
export const DefaultCheckboxInput = () => (
  <CheckboxInput question={defaultQuestion} />
)
