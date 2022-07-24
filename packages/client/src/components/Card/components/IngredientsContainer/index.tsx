import React, { FunctionComponent } from "react";
import { v4 as uuid4 } from "uuid";

import { Button } from "src/components/Button";
import { CardProps } from "src/components/Card/types";

import { CardTag, TagsContainer, TagsList } from "./styles";

type IngredientsContainerProps = Pick<CardProps, "ingredients">;

export const IngredientsContainer: FunctionComponent<
  IngredientsContainerProps
> = ({ ingredients }) => (
  <TagsContainer>
    <TagsList>
      {ingredients.map((ingredient) => (
        <CardTag key={uuid4()}>{ingredient}</CardTag>
      ))}
    </TagsList>
    <Button height={50} onClick={(): void => undefined}>
      Open recipe in new page
    </Button>
  </TagsContainer>
);
