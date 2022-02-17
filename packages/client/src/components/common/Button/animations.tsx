import { Transition, Variants } from "framer-motion";

import {
  backgroundColor1,
  textColor1,
  accentColor4,
  accentColor5,
  accentColor6,
} from "src/stylesheets/Colors";

export const buttonVariants: Variants = {
  disabled: {
    backgroundColor: "rgba(0,0,0,0)",
    color: accentColor4,
    border: `${accentColor4} solid 3px`,
  },

  rest: {
    color: backgroundColor1,
    backgroundColor: accentColor4,
    border: `${accentColor4} solid 0`,
  },

  hover: {
    color: backgroundColor1,
    backgroundColor: accentColor5,
    scale: 1.0125,
  },

  tap: {
    color: textColor1,
    backgroundColor: accentColor6,
  },
};

export const buttonTransition: Transition = {
  duration: 0.25,
};
