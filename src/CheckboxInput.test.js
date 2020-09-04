import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
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
    const tree = renderer.create(<CheckboxInput question={defaultQuestion} />)
    expect(tree).toMatchSnapshot()
  })
})
