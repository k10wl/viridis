import { createGlobalStyle } from "styled-components";

import { accentColor4 } from "./Colors";

const FocusVisible = createGlobalStyle`
  @keyframes pulse-animation {
    0% {
      transform: scale(70%);
    }
    100% {
      transform: scale(80%);
    }
  }

  *:focus-visible, * > *:focus-visible {
    position: relative;
    outline: none;
    border: none;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${accentColor4};
      mix-blend-mode: lighten;
      opacity: 50%;
      border-radius: 50%;
      animation: pulse-animation 2.5s infinite alternate;
    }
  }
`;

export default FocusVisible;
