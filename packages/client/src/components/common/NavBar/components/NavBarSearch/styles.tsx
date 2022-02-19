import styled from "styled-components";
import { motion } from "framer-motion";

import { ReactComponent as SearchSvg } from "src/static/icons/magnifying-glass-solid.svg";

import {
  accentColor7,
  backgroundColor1,
  textColor1,
} from "src/stylesheets/Colors";

export const SearchBase = styled(motion.span).attrs({
  "data-testid": "search-container",
})`
  display: flex;
  margin-left: auto;
  background-color: ${accentColor7};
  border-radius: 25px;
`;

export const SearchButton = styled(motion.button)`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;
  outline: none;

  background-color: ${accentColor7};

  cursor: pointer;
`;

export const SearchIcon = styled(motion(SearchSvg))`
  fill: ${backgroundColor1};

  padding: 7px;
`;

export const Input = styled(motion.input).attrs({
  type: "search",
  maxLength: 50,
  placeholder: "What are we searching?",
})`
  width: 0;
  padding: 0;

  color: ${backgroundColor1};

  outline: none;
  border: none;
  background-color: transparent;

  font-family: "Roboto Regular", sans-serif;

  &::placeholder {
    color: ${textColor1};
  }
`;
