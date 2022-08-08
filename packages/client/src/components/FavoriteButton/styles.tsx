import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ReactComponent as HeartRegular } from 'src/static/icons/heart/heart-regular.svg';
import { ReactComponent as HeartSolid } from 'src/static/icons/heart/heart-solid.svg';
import { primaryColor1 } from 'src/stylesheets/Colors';

export const HeartRegularSVG = motion(HeartRegular);
export const HeartSolidSVG = motion(HeartSolid);

export const FavoriteButtonBase = styled.button.attrs({
  'data-testid': 'favorite-button',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;

  transform: translateY(-2px);

  border: none;
  border-radius: 50%;

  padding: 3px 0 0;
  margin: 0;

  background-color: transparent;

  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${primaryColor1}80;
    outline-offset: 3px;
  }
`;
