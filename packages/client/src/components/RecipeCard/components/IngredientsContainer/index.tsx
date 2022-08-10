import React, { FunctionComponent } from 'react';
import { v4 as uuid4 } from 'uuid';

import { RecipeProps } from 'src/components/RecipeCard/type';

import { Container, Ingredient, List } from './style';

type Props = Pick<RecipeProps, 'ingredients'>;

export const Ingredients: FunctionComponent<Props> = ({ ingredients }) => (
  <Container>
    <List>
      {ingredients.map(ingredient => (
        <Ingredient key={uuid4()}>{ingredient.name}</Ingredient>
      ))}
    </List>
  </Container>
);
