/**
 * Inspired by material-ui.
 * https://github.com/mui-org/material-ui/blob/fad48de8f7d9a449adb4ab9796e9ed1c2c0593ca/packages/material-ui/src/styles/createBreakpoints.js
 */

export const breakpointKeys = ["xs", "sm", "md", "lg", "xl"] as const;

type BreakpointT = typeof breakpointKeys[number];

export type BreakpointsT = {
  up: (key: BreakpointT | number) => string;
  down: (key: BreakpointT | number) => string;
  between: (start: BreakpointT | number, end: BreakpointT | number) => string;
};

export const breakpointValues = Object.freeze({
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
});

export const unit = "px";

export const step = 5;

export const getValueByKey = (key: BreakpointT | number): number =>
  typeof key === "number" ? key : breakpointValues[key];

export const minWidthMedia = (value: number): string =>
  `(min-width: ${value}${unit})`;

export const maxWidthMedia = (value: number): string =>
  `(max-width: ${value - step / 100}${unit})`;

export const createBreakpoints = (): BreakpointsT => {
  const up = (key: BreakpointT | number): string => {
    const value = getValueByKey(key);
    return `@media ${minWidthMedia(value)}`;
  };

  const down = (key: BreakpointT | number): string => {
    const endIndex =
      typeof key === "number" ? 0 : breakpointKeys.indexOf(key) + 1;
    const upperbound = breakpointValues[breakpointKeys[endIndex]];

    if (endIndex === breakpointKeys.length) {
      // xl down applies to all sizes
      return up("xs");
    }

    const value = endIndex > 0 ? upperbound : getValueByKey(key);
    return `@media ${maxWidthMedia(value)}`;
  };

  const between = (
    start: BreakpointT | number,
    end: BreakpointT | number
  ): string => {
    const startValue = getValueByKey(start);
    const endValue = getValueByKey(end);

    return `@media ${minWidthMedia(startValue)} and ${maxWidthMedia(endValue)}`;
  };
  return { up, down, between };
};
