import React from "react";

import Colors from "./Colors";
import ResetStyles from "./ResetStyles";
import Fonts from "./Fonts";
import FocusVisible from "./FocusVisible";

const GlobalStyles: React.FC = () => (
  <>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <Colors />
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <ResetStyles />
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <Fonts />
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <FocusVisible />
  </>
);

export default GlobalStyles;
