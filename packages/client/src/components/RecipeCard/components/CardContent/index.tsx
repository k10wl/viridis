import React from "react";

import { CardProps } from "src/components/RecipeCard/types";

import { CardDescription, CardImage, CardName } from "./styles";

type CardContentT = Pick<CardProps, "imageSrc" | "name" | "description">;

export const CardContent: React.FC<CardContentT> = ({
  name,
  imageSrc,
  description,
}) => (
  <>
    <CardImage src={imageSrc} alt={name} />
    <CardName>{name}</CardName>
    <CardDescription>{description}</CardDescription>
  </>
);
