import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import TextInput from './TextInput'

describe('TextInput', () => {
  it('renders TextInput correctly', () => {
    const tree = renderer.create(<TextInput />)
    expect(tree).toMatchSnapshot()
  })
})
