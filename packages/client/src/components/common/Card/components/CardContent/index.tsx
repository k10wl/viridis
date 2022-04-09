import React from "react";

import { CardDescription, CardImage, CardName } from "./styles";
import { CardT } from "../../index";

type CardContentT = Pick<CardT, "imageSrc" | "name" | "description">;

const CardContent: React.FC<CardContentT> = ({
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

export default CardContent;
