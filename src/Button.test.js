import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button', () => {
  it('renders Button correctly', () => {
    const tree = renderer.create(<Button />)
    expect(tree).toMatchSnapshot()
  })
})
