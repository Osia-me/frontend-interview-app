import { render, screen } from '@testing-library/react'
import NameStep from './NameStep'

describe('Name Step Componenet', () => {
  test('renders the component', () => {
    render(<NameStep updateUserData={() => {}} />)
    const elements = screen.queryAllByText(/Name:/i)
    expect(elements).toHaveLength(2)
  })
})
