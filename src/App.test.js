import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// for this app.test is for testing
// Does the React application start without crashing?
// the basic App component render successfully?
// Is there default React content showing?
// Does routing work in the test environment?

// test case that checks if "learn react" text exists
test('renders learn react link', () => {
  // Render the App component wrapped in BrowserRouter
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
  const linkElement = screen.getByText(/learn react/i); // Search for any element containing "learn react"
  expect(linkElement).toBeInTheDocument(); // Check that the element was found and exists in the document
});
