import React, { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router';

import { Button } from 'src/components/Button';

import { cardBaseTransition, cardBaseVariants } from './animation';
import { Content, Ingredients } from './components';
import { Base, ButtonContainer } from './style';
import { RecipeProps } from './type';

export const RecipeCard: FunctionComponent<RecipeProps> = ({
  id,
  name,
  description,
  picture,
  ingredients,
}) => {
  const navigate = useNavigate();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // On middle mouse click.
      if (e.button === 1) {
        window.open(`/${id}`, '_blank');

        return;
      }

      navigate(`/${id}`);
    },
    [id, navigate],
  );

  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      window.open(`/${id}`, '_blank');

      e.stopPropagation();
    },
    [id],
  );

  const onEnterClick = useCallback(
    (keyboardEvent: React.KeyboardEvent<HTMLDivElement>) => {
      if (keyboardEvent.key === 'Enter') {
        navigate(`/${id}`);
      }
    },
    [id, navigate],
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
      <Content picture={picture} name={name} description={description} />
      <Ingredients ingredients={ingredients} />
      <ButtonContainer>
        <Button height="30px" width="100%" onClick={onButtonClick}>
          Open recipe in new page
        </Button>
      </ButtonContainer>
    </Base>
  );
};
