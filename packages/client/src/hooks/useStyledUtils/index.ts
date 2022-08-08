import { DefaultTheme } from 'styled-components';

import { BreakpointsT, createBreakpoints } from 'src/utils';

interface UseStyledUtilsT extends DefaultTheme {
  breakpoints: BreakpointsT;
}

export const useStyledUtils = (): UseStyledUtilsT => {
  const breakpoints = createBreakpoints();

  return { breakpoints };
};
