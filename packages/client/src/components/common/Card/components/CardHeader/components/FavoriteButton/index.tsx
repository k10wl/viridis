import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { textColor1, accentColor4 } from "src/stylesheets/Colors";

import { FavoriteButtonBase, HeartRegularSVG, HeartSolidSVG } from "./styles";
import { FavoriteButtonVariants, FavoriteButtonTransition } from "./animations";

export type FavoriteButtonT = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  favorite: boolean;
};

const FavoriteButton: React.FC<FavoriteButtonT> = ({ onClick, favorite }) => {
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
            fill={accentColor4}
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
            fill={textColor1}
            variants={FavoriteButtonVariants}
            transition={FavoriteButtonTransition}
            data-testid="regular-icon"
          />
        )}
      </AnimatePresence>
    </FavoriteButtonBase>
  );
};

export default FavoriteButton;
