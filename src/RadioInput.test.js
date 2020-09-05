import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RadioInput from './RadioInput'

const defaultQuestion = {
  answerOptions: [
    { label: 'a', name: 'a' },
    { label: 'b', name: 'b' },
  ],
}
describe('RadioInput', () => {
  it('renders RadioInput correctly', () => {
    const container = render(<RadioInput question={defaultQuestion} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
