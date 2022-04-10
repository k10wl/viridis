import React from "react";

import { accentColor1, primaryColor1 } from "src/stylesheets/Colors";

import {
  Wrapper,
  TitleLetterContainer,
  BottomTitleContainer,
  TitleLetter,
} from "./styles";
import {
  topTitleContainerVariants,
  topTitleLetterVariants,
  andLetterVariants,
  bottomTitleContainerVariants,
  bottomTitleLetterVariants,
} from "./animations";

const Hero: React.FC = () => (
  <Wrapper initial="initial" animate="animate">
    <TitleLetterContainer variants={topTitleContainerVariants}>
      {"Easy cooking steps".split("").map((letter) => (
        <TitleLetter color={primaryColor1} variants={topTitleLetterVariants}>
          {letter}
        </TitleLetter>
      ))}
    </TitleLetterContainer>
    <BottomTitleContainer>
      <TitleLetter variants={andLetterVariants} color={accentColor1}>
        &
      </TitleLetter>
      <TitleLetterContainer variants={bottomTitleContainerVariants}>
        {"Everyday recipes".split("").map((letter) => (
          <TitleLetter
            color={accentColor1}
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
