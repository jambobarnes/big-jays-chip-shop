import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('The app renders the nav and footer', () => {
  render(<App />);
  const nav = screen.getByTestId("nav");
  const footer = screen.getByTestId("footer")
  //const nav = header.

  expect(nav).toBeInTheDocument();
  expect(footer).toBeInTheDocument();

});

// test('The app renders the product catalogue component');
// test('The app displays a basket when the basket icon is clicked');