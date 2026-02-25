import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all squares', () => {
  render(<App />);
  [1, 2, 3, 4, 5].forEach((id) => {
    expect(screen.getByText(String(id))).toBeInTheDocument();
  });
});
