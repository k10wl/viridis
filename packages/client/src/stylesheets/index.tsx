import React from "react";

import Colors from "./Colors";
import ResetStyles from "./ResetStyles";
import Fonts from "./Fonts";
import FocusVisible from "./FocusVisible";

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
