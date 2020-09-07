import React from 'react'
import RadioInput from '../RadioInput'

export default {
  title: 'RadioInput',
  component: RadioInput,
}

const defaultQuestion = {
  answerOptions: [
    { label: 'a', name: 'a' },
    { label: 'b', name: 'b' },
  ],
}
export const DefaultRadioInput = () => <RadioInput question={defaultQuestion} />
