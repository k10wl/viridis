import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import { PRIMARY_COLOR_1, TEXT_COLOR_1 } from 'src/stylesheets/Colors';

import { FavoriteButtonTransition, FavoriteButtonVariants } from './animation';
import { FavoriteButtonBase, HeartRegularSVG, HeartSolidSVG } from './style';

export type FavoriteButtonT = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  favorite: boolean;
};

export const FavoriteButton: React.FC<FavoriteButtonT> = ({
  onClick,
  favorite,
}) => {
  const [fav, setFav] = useState(favorite);

  return (
    <FavoriteButtonBase
      onClick={(clickEvent): void => {
        clickEvent.stopPropagation();
        setFav(!fav);
        onClick(clickEvent);
      }}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {fav ? (
          <HeartSolidSVG
            width="100%"
            key="favorite"
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            fill={PRIMARY_COLOR_1}
            variants={FavoriteButtonVariants}
            transition={FavoriteButtonTransition}
            data-testid="favorite-icon"
          />
        ) : (
          <HeartRegularSVG
            width="100%"
            key="regular"
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            fill={TEXT_COLOR_1}
            variants={FavoriteButtonVariants}
            transition={FavoriteButtonTransition}
            data-testid="regular-icon"
          />
        )}
      </AnimatePresence>
    </FavoriteButtonBase>
  );
};
