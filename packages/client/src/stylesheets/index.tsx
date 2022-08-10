import React, { ReactElement } from 'react';

import { Colors } from './Colors';
import { FocusVisible } from './FocusVisible';
import { Fonts } from './Fonts';
import { ResetStyles } from './ResetStyles';

const GlobalStyles = (): ReactElement => (
  <>
    <Colors />
    <ResetStyles />
    <Fonts />
    <FocusVisible />
  </>
);

export default GlobalStyles;
