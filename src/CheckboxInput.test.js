import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import CheckboxInput from './CheckboxInput'

const defaultQuestion = {
  answerOptions: [
    { label: 'a', name: 'a' },
    { label: 'b', name: 'b' },
    { label: 'c', name: 'd' },
    { label: 'd', name: 'd' },
  ],
}

describe('CheckboxInput', () => {
  it('renders CheckboxInput correctly', () => {
    const container = render(<CheckboxInput question={defaultQuestion} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
