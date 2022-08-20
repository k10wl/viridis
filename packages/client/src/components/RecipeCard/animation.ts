import { Transition, Variants } from 'framer-motion';

import {
  ACCENT_COLOR_1,
  BACKGROUND_COLOR_1,
  BACKGROUND_COLOR_3,
} from 'src/stylesheets/Colors';

export const cardBaseVariants: Variants = {
  rest: {
    backgroundColor: BACKGROUND_COLOR_1,
  },
  hover: {
    backgroundColor: BACKGROUND_COLOR_3,
    boxShadow: `0 0 5px 0 ${ACCENT_COLOR_1}`,
  },
  tap: {
    backgroundColor: BACKGROUND_COLOR_3,
    boxShadow: `0 0 0px 0 ${ACCENT_COLOR_1}`,
  },
};

export const cardBaseTransition: Transition = {
  ease: 'linear',
};
