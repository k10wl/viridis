import { DefaultTheme } from "styled-components";

import { BreakpointsT } from "../createBreakpoint";

type Query = (arg: BreakpointsT) => string;

interface BreakpointT extends DefaultTheme {
  breakpoints: BreakpointsT;
}

export const breakpoint =
  (query: Query) =>
  ({ theme }: { theme: BreakpointT }): string =>
    query(theme.breakpoints);
