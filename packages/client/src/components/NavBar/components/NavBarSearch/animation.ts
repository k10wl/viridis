import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  useAnimation,
  Variants,
} from 'framer-motion';
import React, { useCallback, useEffect } from 'react';

import { BACKGROUND_COLOR_1 } from 'src/stylesheets/Colors';

const baseRest: TargetAndTransition = {
  boxShadow: `0 0 0px 0px ${BACKGROUND_COLOR_1}`,
};
const baseFocus: TargetAndTransition = {
  boxShadow: `0 0 15px -5px ${BACKGROUND_COLOR_1}`,
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

interface Props {
  searchBaseRef: React.RefObject<HTMLSpanElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseBoxAnimations {
  animateBase: AnimationControls;
  animateInput: AnimationControls;
  focusAnimation: (bodyCheck: boolean) => Promise<void>;
}

export const useBoxAnimations = ({
  searchBaseRef,
  inputRef,
  openSearch,
  setOpenSearch,
}: Props): UseBoxAnimations => {
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
