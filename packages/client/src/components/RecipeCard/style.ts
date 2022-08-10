import { motion } from 'framer-motion';
import { rgba } from 'polished';
import styled from 'styled-components';

import { ACCENT_COLOR_1 } from 'src/stylesheets/Colors';

export const Base = styled(motion.div).attrs({
  tabIndex: 0,
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  max-width: 300px;
  height: 445px;
  max-height: 445px;
  border: 1px solid black;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  background: ${rgba(ACCENT_COLOR_1, 0)};
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  padding: 5px;
`;
