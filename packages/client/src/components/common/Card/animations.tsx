import { Variants, Transition } from "framer-motion";

import {
  accentColor2,
  backgroundColor1,
  backgroundColor3,
} from "../../../stylesheets/Colors";

export const cardBaseVariants: Variants = {
  rest: {
    backgroundColor: backgroundColor1,
  },
  hover: {
    backgroundColor: backgroundColor3,
    boxShadow: `0 0 5px 0 ${accentColor2}`,
  },
  tap: {
    backgroundColor: backgroundColor3,
    boxShadow: `0 0 0px 0 ${accentColor2}`,
  },
};

export const cardBaseTransition: Transition = {
  ease: "linear",
};
