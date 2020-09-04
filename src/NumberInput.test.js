import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import NumberInput from './NumberInput'

describe('NumberInput', () => {
  it('renders NumberInput correctly', () => {
    const tree = renderer.create(<NumberInput />)
    expect(tree).toMatchSnapshot()
  })
})
