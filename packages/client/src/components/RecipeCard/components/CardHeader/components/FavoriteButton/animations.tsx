import { Transition, Variants } from "framer-motion";

export const FavoriteButtonVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.75,
    transformOrigin: "center",
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transformOrigin: "center",
  },
  animate: {
    opacity: 1,
    scale: 1,
    transformOrigin: "center",
  },
  hover: {
    scale: [1, 0.95, 1, 0.95, 1],
    transformOrigin: "center",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      duration: 0.5,
    },
  },
};

export const FavoriteButtonTransition: Transition = {
  duration: 0.2,
};
