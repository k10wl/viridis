import React, { FunctionComponent } from "react";
import { v4 as uuid4 } from "uuid";

import { RecipeProps } from "src/components/RecipeCard/types";

import { Container, Ingredient, List } from "./styles";

type IngredientsContainerProps = Pick<RecipeProps, "ingredients">;

export const Ingredients: FunctionComponent<IngredientsContainerProps> = ({
  ingredients,
}) => {
  return (
    <Container>
      <List>
        {ingredients.map((ingredient) => (
          <Ingredient key={uuid4()}>{ingredient}</Ingredient>
        ))}
      </List>
    </Container>
  );
};
