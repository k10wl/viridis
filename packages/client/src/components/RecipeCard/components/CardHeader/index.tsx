import React from "react";

import { CardProps } from "src/components/RecipeCard/types";
import { ReactComponent as EyeIcon } from "src/static/icons/eye-regular.svg";
import { textColor1 } from "src/stylesheets/Colors";

import { FavoriteButton } from "./components";
import { CardHeaderBase, CardViews } from "./styles";

type CardHeaderProps = Pick<CardProps, "views" | "favorite">;

export const CardHeader: React.FC<CardHeaderProps> = ({ views, favorite }) => (
  <CardHeaderBase>
    <span>
      <EyeIcon fill={textColor1} width={14} />
      <CardViews>{views}</CardViews>
    </span>
    <FavoriteButton onClick={(): void => undefined} favorite={favorite} />
  </CardHeaderBase>
);
