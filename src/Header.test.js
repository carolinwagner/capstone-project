import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header', () => {
  it('shows the main headline', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Hello Bylaws')).toBeInTheDocument()
  })
})

describe('Header', () => {
  it('renders Header correctly', () => {
    const tree = renderer.create(<Header />)
    expect(tree).toMatchSnapshot()
  })
})
