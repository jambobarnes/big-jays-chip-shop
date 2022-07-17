import React from 'react';
import { render, screen } from '@testing-library/react';
import Catalogue from './Catalogue';

test('The basket component exists', () => {
  render(<Catalogue />)
  
  const element = screen.getByTestId("temp-cat");

  expect(element).toBeInTheDocument();

})
