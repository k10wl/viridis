import styled from "styled-components";
import { motion } from "framer-motion";

import { textColor1 } from "src/stylesheets/Colors";
import GlobalContainer from "src/stylesheets/GlobalContainer";

type TitleT = {
  color?: string;
};

export const Wrapper = styled(motion(GlobalContainer))`
  padding-top: 50px;
  padding-left: 125px;
  max-width: 1200px;
  @media (max-width: 1200px) {
    max-width: 90vw;
    padding-left: 75px;
  }
  @media (max-width: 992px) {
    max-width: 90vw;
    padding-left: 40px;
  }
  @media (max-width: 576px) {
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
    @media (max-width: 1200px) {
      font-size: 5rem;
    }
    @media (max-width: 992px) {
      font-size: 4rem;
    }
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`;

export const TitleLetter = styled(motion.h1)<TitleT>`
  display: inline-block;
  font-size: 5rem;
  letter-spacing: 0.15rem;
  font-family: "PT Serif", sans-serif;
  color: ${({ color }): string => color || textColor1};
  white-space: pre;

  @media (max-width: 1200px) {
    font-size: 4rem;
  }
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
