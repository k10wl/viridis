import React, { ReactElement } from 'react';

import { RecipeProps } from 'src/components/RecipeCard/type';

import {
  Figure,
  Figurecaption,
  FoodDescription,
  Image,
  ImageContainer,
} from './style';

type Props = Pick<RecipeProps, 'picture' | 'name' | 'description'>;

export const Content = ({
  name,
  picture,
  description,
}: Props): ReactElement => (
  <Figure>
    <ImageContainer>
      <Image src={picture} alt={name} />
    </ImageContainer>

    <Figurecaption>{name}</Figurecaption>
    <FoodDescription>{description}</FoodDescription>
  </Figure>
);
