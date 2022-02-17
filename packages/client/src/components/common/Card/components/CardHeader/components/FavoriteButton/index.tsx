import React, { useCallback, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { ReactComponent as HeartRegular } from "src/static/icons/heart/heart-regular.svg";
import { ReactComponent as HeartSolid } from "src/static/icons/heart/heart-solid.svg";

import { textColor1, accentColor4 } from "src/stylesheets/Colors";

import { FavoriteButtonBase } from "./styles";

export type FavoriteButtonT = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  favorite: boolean;
};

const FavoriteButton: React.FC<FavoriteButtonT> = ({ onClick, favorite }) => {
  const [fav, setFav] = useState(favorite);
  const animate = useAnimation();

  const changeState = useCallback(async () => {
    await animate.start({ opacity: 0, scale: 0.75 });
    setFav(!fav);
    await animate.start({ opacity: 1, scale: 1 });
  }, [fav]);

  return (
    <FavoriteButtonBase
      onClick={(clickEvent): void => {
        clickEvent.stopPropagation();
        changeState();
        onClick(clickEvent);
      }}
    >
      <motion.div animate={animate} transition={{ duration: 0.15 }}>
        {fav ? (
          <HeartSolid fill={accentColor4} data-testid="favorite-icon" />
        ) : (
          <HeartRegular fill={textColor1} data-testid="regular-icon" />
        )}
      </motion.div>
    </FavoriteButtonBase>
  );
};

export default FavoriteButton;
