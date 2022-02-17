import styled from "styled-components";
import { motion } from "framer-motion";

import { accentColor4 } from "src/stylesheets/Colors";

export const ButtonBase = styled(motion.button)`
  width: 150px;
  height: 30px;

  outline: none;
  border: none;
  border-radius: 4px;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 3px solid ${accentColor4}80;
    outline-offset: 1px;
  }
`;
