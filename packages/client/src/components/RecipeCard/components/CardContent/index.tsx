import React from 'react';

import { RecipeProps } from 'src/components/RecipeCard/types';

import {
  Figure,
  Figurecaption,
  FoodDescription,
  Image,
  ImageContainer,
} from './styles';

type CardContentT = Pick<RecipeProps, 'imageUrl' | 'name' | 'foodDescription'>;

export const Content: React.FC<CardContentT> = ({
  name,
  imageUrl,
  foodDescription,
}) => (
  <Figure>
    <ImageContainer>
      <Image src={imageUrl} alt={name} />
    </ImageContainer>
    <Figurecaption>{name}</Figurecaption>
    <FoodDescription>{foodDescription}</FoodDescription>
  </Figure>
);
