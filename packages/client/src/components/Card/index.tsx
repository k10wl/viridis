import React, { FunctionComponent, useCallback } from "react";

import { cardBaseTransition, cardBaseVariants } from "./animations";
import { CardContent, CardHeader, IngredientsContainer } from "./components";
import { CardBase } from "./styles";
import { CardProps } from "./types";

export const Card: FunctionComponent<CardProps> = ({
  views,
  favorite,
  description,
  imageSrc,
  name,
  ingredients,
  onClick,
}) => {
  const onEnterClick = useCallback(
    (keyboardEvent: React.KeyboardEvent<HTMLDivElement>) => {
      if (keyboardEvent.key === "Enter") {
        onClick();
      }
    },
    []
  );

  return (
    <CardBase
      variants={cardBaseVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={cardBaseTransition}
      onClick={onClick}
      onKeyPress={onEnterClick}
      data-testid="card"
    >
      <div>
        <CardHeader views={views} favorite={favorite} />
        <CardContent
          imageSrc={imageSrc}
          name={name}
          description={description}
        />
      </div>
      <IngredientsContainer ingredients={ingredients} />
    </CardBase>
  );
};
