import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('shows the main headline', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Hello Bylaws')).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('renders Header correctly', () => {
    const container = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
