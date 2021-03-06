import { motion } from "framer-motion";
import styled, { StyledProps } from "styled-components";

import { primaryColor1 } from "src/stylesheets/Colors";

export type ButtonBaseT = {
  height?: number;
  width?: number;
};

export const ButtonBase = styled(motion.button)<StyledProps<ButtonBaseT>>`
  min-width: ${({ width }): number => width || 150}px;
  height: ${({ height }): number => height || 30}px;

  outline: none;
  border: none;
  border-radius: 4px;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 3px solid ${primaryColor1}80;
    outline-offset: 1px;
  }
`;
