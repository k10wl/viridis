import React from 'react';
import { v4 } from 'uuid';

import { ACCENT_COLOR_1, PRIMARY_COLOR_1 } from 'src/stylesheets/Colors';

import {
  andLetterVariants,
  bottomTitleContainerVariants,
  bottomTitleLetterVariants,
  topTitleContainerVariants,
  topTitleLetterVariants,
} from './animation';
import {
  BottomTitleContainer,
  TitleLetter,
  TitleLetterContainer,
  Wrapper,
} from './style';

const Hero: React.FC = () => (
  <Wrapper initial="initial" animate="animate">
    <TitleLetterContainer variants={topTitleContainerVariants}>
      {'Easy cooking steps'.split('').map(letter => (
        <TitleLetter
          key={v4()}
          color={PRIMARY_COLOR_1}
          variants={topTitleLetterVariants}
        >
          {letter}
        </TitleLetter>
      ))}
    </TitleLetterContainer>
    <BottomTitleContainer>
      <TitleLetter variants={andLetterVariants} color={ACCENT_COLOR_1}>
        &
      </TitleLetter>
      <TitleLetterContainer variants={bottomTitleContainerVariants}>
        {'Everyday recipes'.split('').map(letter => (
          <TitleLetter
            key={v4()}
            color={ACCENT_COLOR_1}
            variants={bottomTitleLetterVariants}
          >
            {letter}
          </TitleLetter>
        ))}
      </TitleLetterContainer>
    </BottomTitleContainer>
  </Wrapper>
);

export default Hero;
