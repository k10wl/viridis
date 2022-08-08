import React from 'react';
import { useLocation } from 'react-router';

import { routes } from 'src/router';

import { NavBarSearch } from './components';
import { NavBarBase, RouterActiveLink, RouterNavLink } from './styles';

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <NavBarBase>
      {routes.map(route => (
        <RouterNavLink key={route.path} to={route.path} layoutId={route.name}>
          {route.name}
          {pathname === route.path && <RouterActiveLink layoutId="underline" />}
        </RouterNavLink>
      ))}
      <NavBarSearch />
    </NavBarBase>
  );
};
