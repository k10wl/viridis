import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ROUTES } from 'src/router';

import { NavBar } from '../index';

test('NavBar', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );

  ROUTES.forEach(route => {
    const routeNode = screen.getByRole('link', { name: route.name });

    expect(routeNode).toBeInTheDocument();
    expect(routeNode).toHaveAttribute('href', route.path);

    fireEvent.click(routeNode);
    expect(window.location.pathname).toBe(route.path);
  });
});
