import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elements = screen.getAllByText(/List of Cognitive Biases/i);
  expect(elements.length).toBe(2);
  expect(elements[0]).toBeInTheDocument();
});
