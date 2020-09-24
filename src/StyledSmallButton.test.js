import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import StyledSmallButton from './StyledSmallButton'

describe('StyledSmallButton', () => {
  it('renders correctly', () => {
    const container = render(<StyledSmallButton />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
