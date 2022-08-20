import { motion } from 'framer-motion';
import styled, { StyledProps } from 'styled-components';

import { PRIMARY_COLOR_1 } from 'src/stylesheets/Colors';

import { ButtonProps, Size } from './type';

export const ButtonBase = styled(motion.button)<StyledProps<ButtonProps>>`
  min-width: ${({ width }): Size => width || '150px'};
  height: ${({ height }): Size => height || '30px'};
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }): Size => borderRadius || '4px'};
  font-size: ${({ fontSize }): Size => fontSize || '1rem'};
  font-family: 'Roboto', sans-serif;

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 3px solid ${PRIMARY_COLOR_1}80;
    outline-offset: 1px;
  }
`;
