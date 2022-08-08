import { motion } from 'framer-motion';
import styled from 'styled-components';

import { textColor1 } from 'src/stylesheets/Colors';
import GlobalContainer from 'src/stylesheets/GlobalContainer';
import { breakpoint } from 'src/utils';

type TitleT = {
  color?: string;
};

export const Wrapper = styled(motion(GlobalContainer))`
  padding-top: 50px;
  padding-left: 125px;
  max-width: 1200px;
  ${breakpoint(b => b.down('lg'))} {
    max-width: 90vw;
    padding-left: 75px;
  }
  ${breakpoint(b => b.down('md'))} {
    max-width: 90vw;
    padding-left: 40px;
  }
  ${breakpoint(b => b.down('sm'))} {
    max-width: 95vw;
    padding-left: 0;
  }
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
    ${breakpoint(b => b.down('lg'))} {
      font-size: 5rem;
    }
    ${breakpoint(b => b.down('md'))} {
      font-size: 4rem;
    }
    ${breakpoint(b => b.down('sm'))} {
      font-size: 3rem;
    }
  }
  ${breakpoint(b => b.down('sm'))} {
    padding-top: 1.5rem;
  }
`;

export const TitleLetter = styled(motion.h1)<TitleT>`
  display: inline-block;
  font-size: 5rem;
  letter-spacing: 0.15rem;
  font-family: 'PT Serif', sans-serif;
  color: ${({ color }): string => color || textColor1};
  white-space: pre;

  ${breakpoint(b => b.down('lg'))} {
    font-size: 4rem;
  }
  ${breakpoint(b => b.down('md'))} {
    font-size: 3rem;
  }
  ${breakpoint(b => b.down('sm'))} {
    font-size: 2rem;
  }
`;
