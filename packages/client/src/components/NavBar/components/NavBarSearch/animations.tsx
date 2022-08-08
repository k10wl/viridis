import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  useAnimation,
  Variants,
} from 'framer-motion';
import React, { useCallback, useEffect } from 'react';

import { backgroundColor1 } from 'src/stylesheets/Colors';

const baseRest: TargetAndTransition = {
  boxShadow: `0 0 0px 0px ${backgroundColor1}`,
};
const baseFocus: TargetAndTransition = {
  boxShadow: `0 0 15px -5px ${backgroundColor1}`,
};

const inputTransition: Transition = {
  ease: 'anticipate',
};

const inputRest: TargetAndTransition = {
  width: '0px',
  opacity: 0,
  padding: '0 0px',
  transition: inputTransition,
};
const inputFocus: TargetAndTransition = {
  width: '200px',
  opacity: 1,
  padding: '0 15px',
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
  inputRef: React.RefObject<HTMLInputElement | null>;
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

  useEffect(() => {
    if (inputRef && inputRef.current && !inputRef.current.disabled) {
      inputRef.current.focus();
    }
  }, [inputRef, openSearch]);

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

        return;
      }

      if (!searchBaseRef.current.contains(document.activeElement)) {
        setOpenSearch(false);
        animateBase.start(baseRest);
        animateInput.start(inputRest);
      }
    },
    [animateBase, animateInput, searchBaseRef, setOpenSearch],
  );

  return {
    animateBase,
    animateInput,
    focusAnimation,
  };
};
