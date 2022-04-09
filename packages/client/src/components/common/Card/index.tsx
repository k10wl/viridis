import React, { useCallback } from "react";

import { CardContent, CardHeader, TagsContainer } from "./components";
import { CardBase } from "./styles";
import { cardBaseVariants, cardBaseTransition } from "./animations";

export type CardT = {
  views: number;
  favorite: boolean;
  imageSrc: string;
  name: string;
  description: string;
  tags: string[];
  onClick: () => void;
};

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
      <TagsContainer tags={tags} />
    </CardBase>
  );
};
export default Card;
