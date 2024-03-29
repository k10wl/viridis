import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ACCENT_COLOR_1, BACKGROUND_COLOR_1 } from 'src/stylesheets/Colors';

export const NavBarBase = styled.header`
  display: flex;
  align-items: center;
  overflow: hidden;

  width: 100%;
  height: 69px;
  background-color: ${ACCENT_COLOR_1};

  padding: 0 50px;
`;

const RouterNavLinkT = styled(NavLink)`
  position: relative;

  padding: 27px 40px;

  color: ${BACKGROUND_COLOR_1};
  text-decoration: none;

  font-family: 'Roboto Thin', sans-serif;
  font-size: 1rem;

  &.active {
    font-family: 'Roboto Regular', sans-serif;
  }
`;

export const RouterNavLink = motion(RouterNavLinkT);

export const RouterActiveLink = styled(motion.div)`
  position: absolute;
  left: 25%;
  top: -15px;

  border-radius: 50%;

  width: 50%;
  height: 20px;

  background-color: ${BACKGROUND_COLOR_1};
`;
