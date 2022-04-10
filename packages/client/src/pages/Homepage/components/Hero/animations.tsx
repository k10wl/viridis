import { Variants } from "framer-motion";

export const topTitleContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.0175,
      ease: "linear",
    },
  },
};

export const topTitleLetterVariants: Variants = {
  initial: {
    opacity: 0,
    y: -25,
    transition: {
      duration: 0.25,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const andLetterVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
    x: 50,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { delay: 0.45, type: "spring", bounce: 0.33 },
  },
};

export const bottomTitleContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
      ease: "linear",
    },
  },
};

export const bottomTitleLetterVariants: Variants = {
  initial: {
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.25,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};
