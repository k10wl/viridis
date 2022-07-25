import React, { FunctionComponent, useCallback } from "react";

import { Button } from "src/components/Button";

import { cardBaseTransition, cardBaseVariants } from "./animations";
import { Content, Ingredients } from "./components";
import { Base, ButtonContainer } from "./styles";
import { RecipeProps } from "./types";

export const RecipeCard: FunctionComponent<RecipeProps> = ({
  name,
  foodDescription,
  imageUrl,
  ingredients,
}) => {
  const onClick = useCallback(() => {
    // @TODO: handle redirect and make it work with storybook
  }, []);

  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // @TODO: handle redirect and make it work with storybook

      e.stopPropagation();
    },
    []
  );

  const onEnterClick = useCallback(
    (keyboardEvent: React.KeyboardEvent<HTMLDivElement>) => {
      if (keyboardEvent.key === "Enter") {
        // @TODO: handle redirect and make it work with storybook
      }
    },
    []
  );

  return (
    <Base
      variants={cardBaseVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={cardBaseTransition}
      onClick={onClick}
      onKeyPress={onEnterClick}
      data-testid="card"
    >
      <Content
        imageUrl={imageUrl}
        name={name}
        foodDescription={foodDescription}
      />
      <Ingredients ingredients={ingredients} />
      <ButtonContainer>
        <Button height={30} fullWidth onClick={onButtonClick}>
          Open recipe in new page
        </Button>
      </ButtonContainer>
    </Base>
  );
};
