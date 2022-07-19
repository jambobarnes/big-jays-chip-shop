import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('The footer includes correct business contact details', () => {
  render (<Footer />)
  const footer = screen.getByTestId("footer");
  const businessName = screen.getByTestId("business-name");
  const phoneNumber1 = screen.getByTestId("phone-number-main");
  const phoneNumber2 = screen.getByTestId("phone-number-secondary");
  const address = screen.getByTestId("address");

  expect(footer).toBeInTheDocument();
  expect(businessName).toHaveTextContent("The Big Chipper");
  expect(phoneNumber1).toHaveTextContent("0330 123 456");
  expect(phoneNumber2).toHaveTextContent("0330 123 457");
  expect(address).toHaveTextContent("123 Any Street");

});
