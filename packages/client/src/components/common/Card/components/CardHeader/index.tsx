import React from "react";

import { ReactComponent as EyeIcon } from "src/static/icons/eye-regular.svg";
import { textColor1 } from "src/stylesheets/Colors";
import { CardT } from "src/components/common/Card";

import { CardViews, CardHeaderBase } from "./styles";

import { FavoriteButton } from "./components";

type CardHeaderT = Pick<CardT, "views" | "favorite">;

const CardHeader: React.FC<CardHeaderT> = ({ views, favorite }) => (
  <CardHeaderBase>
    <span>
      <EyeIcon fill={textColor1} width={14} />
      <CardViews>{views}</CardViews>
    </span>
    <FavoriteButton onClick={(): void => undefined} favorite={favorite} />
  </CardHeaderBase>
);

export default CardHeader;
