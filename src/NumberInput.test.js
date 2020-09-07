import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import NumberInput from './NumberInput'

describe('NumberInput', () => {
  it('renders correctly', () => {
    const container = render(<NumberInput />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
