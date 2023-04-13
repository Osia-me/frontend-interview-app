import { render, screen } from '@testing-library/react'
import EmailStep from './email-step.component'

describe('Email Step Component', () => {
  test('renders the component', () => {
    render(<EmailStep updateUserData={() => {}} />)
    const element = screen.getByText(/Email:/i)
    expect(element).toBeInTheDocument()
  })
})
