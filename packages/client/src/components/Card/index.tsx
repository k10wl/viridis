import React, { useCallback } from "react";

import { CardContent, CardHeader, TagContainer } from "./components";
import { CardBase } from "./styles";
import { cardBaseTransition, cardBaseVariants } from "./animations";
import { CardT } from "./types";

const Card: React.FC<CardT> = ({
  views,
  favorite,
  description,
  imageSrc,
  name,
  tags,
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
      <TagContainer tags={tags} />
    </CardBase>
  );
};

export default Card;
