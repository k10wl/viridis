import { Transition, Variants } from 'framer-motion';

import {
  accentColor1,
  backgroundColor1,
  backgroundColor3,
} from 'src/stylesheets/Colors';

export const cardBaseVariants: Variants = {
  rest: {
    backgroundColor: backgroundColor1,
  },
  hover: {
    backgroundColor: backgroundColor3,
    boxShadow: `0 0 5px 0 ${accentColor1}`,
  },
  tap: {
    backgroundColor: backgroundColor3,
    boxShadow: `0 0 0px 0 ${accentColor1}`,
  },
};

export const cardBaseTransition: Transition = {
  ease: 'linear',
};
