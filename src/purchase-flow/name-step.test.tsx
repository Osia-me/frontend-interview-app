import { render, screen } from '@testing-library/react'
import NameStep from './name-step.component'

describe('Name Step Componenet', () => {
  test('renders the component', () => {
    render(<NameStep updateUserData={() => {}} />)
    const elements = screen.queryAllByText(/Name:/i)
    expect(elements).toHaveLength(2)
  })
})
