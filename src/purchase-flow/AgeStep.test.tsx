import { render, screen } from '@testing-library/react';
import AgeStep from './AgeStep';

describe('Age Step Component', () => {
  test('renders the component', () => {
    render(<AgeStep updateUserData={() => {}}/>);
    const element = screen.getByText(/Age:/i);
    expect(element).toBeInTheDocument();
  });
});
