import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders Button correctly', () => {
    const container = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
