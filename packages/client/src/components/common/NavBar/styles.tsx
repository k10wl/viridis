import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { backgroundColor1, accentColor2 } from "src/stylesheets/Colors";
import { motion } from "framer-motion";

export const NavBarBase = styled.header`
  display: flex;
  align-items: center;
  overflow: hidden;

  width: 100%;
  height: 69px;
  background-color: ${accentColor2};

  padding: 0 50px;
`;

export const RouterNavLink = styled(motion(NavLink))`
  position: relative;

  padding: 27px 40px;

  color: ${backgroundColor1};
  text-decoration: none;

  font-family: "Roboto Thin", sans-serif;
  font-size: 1rem;

  &.active {
    font-family: "Roboto Regular", sans-serif;
  }
`;

export const RouterActiveLink = styled(motion.div)`
  position: absolute;
  left: 25%;
  top: -15px;

  border-radius: 50%;

  width: 50%;
  height: 20px;

  background-color: ${backgroundColor1};
`;
