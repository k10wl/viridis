import { motion } from "framer-motion";
import styled from "styled-components";

import { accentColor1, primaryColor1 } from "src/stylesheets/Colors";

export const CardBase = styled(motion.div).attrs({
  tabIndex: 0,
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  overflow: hidden;

  width: 340px;
  height: 550px;

  border: 2px solid ${accentColor1};
  border-radius: 7px;

  margin: 20px;

  &:focus-visible {
    outline: 3px solid ${primaryColor1}80;
    outline-offset: 3px;
  }
`;
