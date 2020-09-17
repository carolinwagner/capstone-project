import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import StyledButton from './StyledButton'

describe('StyledButton', () => {
  it('renders correctly', () => {
    const container = render(<StyledButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
