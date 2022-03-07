import React from "react";

import Colors from "./Colors";
import ResetStyles from "./ResetStyles";
import Fonts from "./Fonts";
import FocusVisible from "./FocusVisible";

const GlobalStyles: React.FC = () => (
  <>
    <Colors />
    <ResetStyles />
    <Fonts />
    <FocusVisible />
  </>
);

export default GlobalStyles;
