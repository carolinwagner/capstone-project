import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import RadioInput from './RadioInput'

const defaultQuestion = {
  answerOptions: [
    { label: 'a', name: 'a' },
    { label: 'b', name: 'b' },
  ],
}
describe('RadioInput', () => {
  it('renders RadioInput correctly', () => {
    const tree = renderer.create(<RadioInput question={defaultQuestion} />)
    expect(tree).toMatchSnapshot()
  })
})
