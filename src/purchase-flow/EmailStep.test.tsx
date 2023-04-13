import { render, screen } from '@testing-library/react'
import EmailStep from './EmailStep'

describe('Email Step Component', () => {
  test('renders the component', () => {
    render(<EmailStep updateUserData={() => {}} />)
    const element = screen.getByText(/Email:/i)
    expect(element).toBeInTheDocument()
  })
})
