import { Transition, Variants } from "framer-motion";

import {
  backgroundColor1,
  textColor1,
  primaryColor1,
  primaryColor2,
  primaryColor3,
} from "src/stylesheets/Colors";

export const buttonVariants: Variants = {
  disabled: {
    backgroundColor: "rgba(0,0,0,0)",
    color: primaryColor1,
    border: `${primaryColor1} solid 3px`,
  },

  rest: {
    color: backgroundColor1,
    backgroundColor: primaryColor1,
    border: `${primaryColor1} solid 0`,
  },

  hover: {
    color: backgroundColor1,
    backgroundColor: primaryColor2,
    scale: 1.0125,
  },

  tap: {
    color: textColor1,
    backgroundColor: primaryColor3,
  },
};

export const buttonTransition: Transition = {
  duration: 0.25,
};
