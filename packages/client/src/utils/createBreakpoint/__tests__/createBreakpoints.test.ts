import {
  breakpointValues,
  breakpointKeys,
  step,
  unit,
  getValueByKey,
  minWidthMedia,
  maxWidthMedia,
  createBreakpoints,
} from "../index";

const breakpoints = createBreakpoints();

test("getValueByKey", () => {
  expect(getValueByKey(123)).toBe(123);

  breakpointKeys.forEach((key) => {
    expect(getValueByKey(key)).toBe(breakpointValues[key]);
  });
});

test("minWidthMedia", () => {
  breakpointKeys.forEach((key) => {
    expect(minWidthMedia(breakpointValues[key])).toBe(
      `(min-width: ${breakpointValues[key]}${unit})`
    );
  });

  for (let i = 0; i < 2000; i += 100) {
    expect(minWidthMedia(i)).toBe(`(min-width: ${i}${unit})`);
  }
});

test("maxWidthMedia", () => {
  breakpointKeys.forEach((key) => {
    expect(maxWidthMedia(breakpointValues[key])).toBe(
      `(max-width: ${breakpointValues[key] - step / 100}${unit})`
    );
  });

  for (let i = 0; i < 2000; i += 100) {
    expect(maxWidthMedia(i)).toBe(`(max-width: ${i - step / 100}${unit})`);
  }
});

test("createBreakpoints.up", () => {
  breakpointKeys.forEach((key) => {
    const value = getValueByKey(key);
    expect(breakpoints.up(breakpointValues[key])).toBe(
      `@media ${minWidthMedia(value)}`
    );
  });

  for (let key = 0; key < 2000; key += 100) {
    const value = getValueByKey(key);
    expect(breakpoints.up(key)).toBe(`@media ${minWidthMedia(value)}`);
  }
});

test("createBreakpoints.down", () => {
  breakpointKeys.forEach((key) => {
    const value = getValueByKey(key);
    expect(breakpoints.down(breakpointValues[key])).toBe(
      `@media ${maxWidthMedia(value)}`
    );
  });

  for (let key = 0; key < 2000; key += 100) {
    const value = getValueByKey(key);
    expect(breakpoints.down(key)).toBe(`@media ${maxWidthMedia(value)}`);
  }
});

test("createBreakpoints.between", () => {
  breakpointKeys.forEach((key, index) => {
    for (let i = breakpointKeys.length; i > index; i -= 1) {
      const startValue = getValueByKey(key);
      const endValue = getValueByKey(breakpointKeys[i - 1]);

      expect(breakpoints.between(key, breakpointKeys[i - 1])).toBe(
        `@media ${minWidthMedia(startValue)} and ${maxWidthMedia(endValue)}`
      );
    }
  });

  breakpointKeys.forEach((key) => {
    const startValue = getValueByKey(key);
    const endValue = getValueByKey(2000);

    expect(breakpoints.between(key, 2000)).toBe(
      `@media ${minWidthMedia(startValue)} and ${maxWidthMedia(endValue)}`
    );
  });

  const startValue = getValueByKey(20);
  const endValue = getValueByKey(2000);

  expect(breakpoints.between(20, 2000)).toBe(
    `@media ${minWidthMedia(startValue)} and ${maxWidthMedia(endValue)}`
  );
});
