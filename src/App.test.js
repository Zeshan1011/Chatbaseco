import { render, screen } from '@testing-library/react';
import App from './App';
import SignUpPage from './pages/SignUpPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
