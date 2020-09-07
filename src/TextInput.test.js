import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TextInput from './TextInput'

describe('TextInput', () => {
  it('renders correctly', () => {
    const container = render(<TextInput />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
