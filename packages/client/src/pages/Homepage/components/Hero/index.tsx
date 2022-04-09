import React from "react";

import { accentColor1, primaryColor1 } from "src/stylesheets/Colors";

import { Title, Wrapper, TextContainer } from "./styles";

const Hero: React.FC = () => (
  <Wrapper>
    <Title color={primaryColor1}>Easy cooking steps</Title>
    <TextContainer>
      <Title color={accentColor1}>&</Title>
      <Title color={accentColor1}>Everyday recipes</Title>
    </TextContainer>
  </Wrapper>
);

export default Hero;
