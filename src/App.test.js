import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const comicsH1 = screen.getByText('Comics');
  expect(comicsH1).toBeInTheDocument();
});
