import { motion } from 'framer-motion';
import styled from 'styled-components';

import { TEXT_COLOR_1 } from 'src/stylesheets/Colors';
import GlobalContainer from 'src/stylesheets/GlobalContainer';

type TitleT = {
  color?: string;
};

export const Wrapper = styled(motion(GlobalContainer))`
  padding-top: 50px;
  padding-left: 125px;
  max-width: 1200px;
`;

export const TitleLetterContainer = motion.div;

export const BottomTitleContainer = styled(motion.div)`
  display: flex;
  text-align: right;
  justify-content: flex-end;
  padding-top: 3rem;

  h1:first-child {
    line-height: 0;
    font-size: 6rem;
`;

export const TitleLetter = styled(motion.h1)<TitleT>`
  display: inline-block;
  font-size: 5rem;
  letter-spacing: 0.15rem;
  font-family: 'PT Serif', sans-serif;
  color: ${({ color }): string => color || TEXT_COLOR_1};
  white-space: pre;
`;
