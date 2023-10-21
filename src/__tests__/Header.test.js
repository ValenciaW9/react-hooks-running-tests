import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('displays the text "hello from the Header!"', () => {
  render(<Header />);
  const headerText = screen.getByText(/hello.*Header/i);
  expect(headerText).toBeInTheDocument();
});