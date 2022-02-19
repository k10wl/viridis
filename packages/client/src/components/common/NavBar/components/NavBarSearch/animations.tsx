import React, { useCallback } from "react";
import {
  useAnimation,
  AnimationControls,
  TargetAndTransition,
  Transition,
  Variants,
} from "framer-motion";

import { backgroundColor1 } from "src/stylesheets/Colors";

const baseRest: TargetAndTransition = {
  boxShadow: `0 0 0px 0px ${backgroundColor1}`,
};
const baseFocus: TargetAndTransition = {
  boxShadow: `0 0 15px -5px ${backgroundColor1}`,
};

const inputTransition: Transition = {
  ease: "anticipate",
};

const inputRest: TargetAndTransition = {
  width: "0px",
  opacity: 0,
  padding: "0 0px",
  transition: inputTransition,
};
const inputFocus: TargetAndTransition = {
  width: "200px",
  opacity: 1,
  padding: "0 15px",
  transition: inputTransition,
};

export const magnifyingGlassVariants: Variants = {
  rest: {
    opacity: 0.5,
    scale: 1,
    transition: inputTransition,
  },
  open: {
    scale: 1.2,
    transition: inputTransition,
  },
};

type useBoxAnimationsT = ({
  searchBaseRef,
  inputRef,
  openSearch,
  setOpenSearch,
}: {
  searchBaseRef: React.RefObject<HTMLSpanElement | null>;
  inputRef: React.RefObject<HTMLSpanElement | null>;
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  animateBase: AnimationControls;
  animateInput: AnimationControls;
  focusAnimation: (bodyCheck: boolean) => Promise<void>;
};

export const useBoxAnimations: useBoxAnimationsT = ({
  searchBaseRef,
  inputRef,
  openSearch,
  setOpenSearch,
}) => {
  const animateBase = useAnimation();
  const animateInput = useAnimation();

  const focusAnimation = useCallback(
    async (bodyCheck: boolean) => {
      if (!searchBaseRef.current) {
        return;
      }

      if (document.activeElement === document.body && !bodyCheck) {
        setTimeout(() => focusAnimation(true));
        return;
      }

      if (searchBaseRef.current.contains(document.activeElement)) {
        animateBase.start(baseFocus);
        animateInput.start(inputFocus);
        if (!openSearch) {
          inputRef.current?.focus();
        }
        return;
      }

      if (!searchBaseRef.current.contains(document.activeElement)) {
        setOpenSearch(false);
        animateBase.start(baseRest);
        animateInput.start(inputRest);
      }
    },
    [searchBaseRef]
  );

  return {
    animateBase,
    animateInput,
    focusAnimation,
  };
};