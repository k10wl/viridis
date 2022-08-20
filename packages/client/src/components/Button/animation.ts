import { Transition, Variants } from 'framer-motion';

import {
  BACKGROUND_COLOR_1,
  PRIMARY_COLOR_1,
  PRIMARY_COLOR_2,
  PRIMARY_COLOR_3,
  TEXT_COLOR_1,
  TEXT_COLOR_2,
} from 'src/stylesheets/Colors';

export const buttonVariants: Variants = {
  disabled: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: TEXT_COLOR_2,
    border: `${TEXT_COLOR_2} solid 1px`,
  },

  rest: {
    color: BACKGROUND_COLOR_1,
    backgroundColor: PRIMARY_COLOR_1,
    border: `${PRIMARY_COLOR_1} solid 0`,
  },

  hover: {
    color: BACKGROUND_COLOR_1,
    backgroundColor: PRIMARY_COLOR_2,
    scale: 1.0125,
  },

  tap: {
    color: TEXT_COLOR_1,
    backgroundColor: PRIMARY_COLOR_3,
  },
};

export const buttonTransition: Transition = {
  duration: 0.25,
};
