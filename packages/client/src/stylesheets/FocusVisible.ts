import { createGlobalStyle } from "styled-components";

import { primaryColor1 } from "./Colors";

const focusBase = `
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${primaryColor1};
      mix-blend-mode: lighten;
      opacity: 33%;
      border-radius: 50%;
`;

const FocusVisible = createGlobalStyle`
  @keyframes before-pulse-animation {
    0% {
      transform: scale(70%);
    }
    100% {
      transform: scale(80%);
    }
  }

  @keyframes after-pulse-animation {
    0% {
      transform: scale(50%);
    }
    100% {
      transform: scale(70%);
    }
  }

  *:focus-visible, * > *:focus-visible {
    position: relative;
    outline: none;
    border: none;
    &::after {
      ${focusBase};
      animation: before-pulse-animation 2.5s infinite alternate;
    }
    &::before {
      ${focusBase};
      animation: after-pulse-animation 2.5s infinite alternate;
    }
  }
`;

export default FocusVisible;
