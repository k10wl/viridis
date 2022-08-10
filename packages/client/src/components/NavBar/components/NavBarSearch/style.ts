import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ReactComponent as SearchSvg } from 'src/static/icons/magnifying-glass-solid.svg';
import {
  ACCENT_COLOR_3,
  BACKGROUND_COLOR_1,
  TEXT_COLOR_1,
} from 'src/stylesheets/Colors';

export const SearchBase = styled(motion.span).attrs({
  'data-testid': 'search-container',
})`
  display: flex;
  margin-left: auto;
  background-color: ${ACCENT_COLOR_3};
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

  background-color: ${ACCENT_COLOR_3};

  cursor: pointer;
`;

export const SearchIcon = styled(motion(SearchSvg))`
  fill: ${BACKGROUND_COLOR_1};

  padding: 7px;
`;

export const Input = styled(motion.input).attrs({
  type: 'search',
  maxLength: 50,
  placeholder: 'What are we searching?',
})`
  width: 0;
  padding: 0;

  color: ${BACKGROUND_COLOR_1};

  outline: none;
  border: none;
  background-color: transparent;

  font-family: 'Roboto Regular', sans-serif;

  &::placeholder {
    color: ${TEXT_COLOR_1};
  }
`;
