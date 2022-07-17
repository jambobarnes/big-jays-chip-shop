import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
import Footer from '../Footer';

test('The navbar includes the logo (small and large screens) and basket icon', () => {
  render (<NavBar />);
  const nav = screen.getByTestId("nav");
  const logoSmall = screen.getByTestId("logo-small");
  const logoLarge = screen.getByTestId("logo-large");
  const basketIcon = screen.getByTestId("basket-icon");

  expect(nav).toBeInTheDocument();
  expect(nav).toContainElement(logoSmall);
  expect(nav).toContainElement(logoLarge);
  expect(nav).toContainElement(basketIcon);

});