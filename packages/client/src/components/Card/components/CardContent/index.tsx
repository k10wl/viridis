import React from "react";

import { CardDescription, CardImage, CardName } from "./styles";
import { CardT } from "../../types";

type CardContentT = Pick<CardT, "imageSrc" | "name" | "description">;

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
