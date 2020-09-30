import React from 'react'
import Button from '../Button'

export default {
  title: 'Button',
  component: Button,
}

export const PrimaryButton = () => (
  <Button variant="primary">Primary Button</Button>
)
export const SecondaryButton = () => (
  <Button variant="secondary">Secondary Button</Button>
)
