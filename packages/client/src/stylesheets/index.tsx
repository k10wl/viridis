import React from "react";

import Colors from "./Colors";
import FocusVisible from "./FocusVisible";
import Fonts from "./Fonts";
import ResetStyles from "./ResetStyles";

const GlobalStyles: React.FC = () => (
  <>
    {/* @ts-expect-error: types mismatch https://github.com/styled-components/styled-components/issues/3738 */}
    <Colors />
    {/* @ts-expect-error: types mismatch https://github.com/styled-components/styled-components/issues/3738 */}
    <ResetStyles />
    {/* @ts-expect-error: types mismatch https://github.com/styled-components/styled-components/issues/3738 */}
    <Fonts />
    {/* @ts-expect-error: types mismatch https://github.com/styled-components/styled-components/issues/3738 */}
    <FocusVisible />
  </>
);

export default GlobalStyles;
