import React from "react";

import { RecipeProps } from "src/components/RecipeCard/types";

import { Figure, Figurecaption, FoodDescription, Image } from "./styles";

type CardContentT = Pick<RecipeProps, "imageUrl" | "name" | "foodDescription">;

export const Content: React.FC<CardContentT> = ({
  name,
  imageUrl,
  foodDescription,
}) => (
  <Figure>
    <Image src={imageUrl} alt={name} />
    <Figurecaption>{name}</Figurecaption>
    <FoodDescription>{foodDescription}</FoodDescription>
  </Figure>
);
