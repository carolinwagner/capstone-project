import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DateInput from './DateInput'

describe('DateInput', () => {
  it('renders correctly', () => {
    const container = render(<DateInput />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
