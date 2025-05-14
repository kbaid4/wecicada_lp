import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  // Update the selector below to match something unique from your LandingPage
  // TODO: Update the selector below to match something unique from your LandingPage
const landingElement = screen.getByText(/landing/i);
  expect(landingElement).toBeInTheDocument();
});
