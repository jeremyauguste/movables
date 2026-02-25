import { render, screen } from '@testing-library/react';
import App from './App';

test('renders items list', () => {
  render(<App />);
  expect(screen.getByText('1, 2, 3, 4, 5')).toBeInTheDocument();
});
