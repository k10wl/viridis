import { createGlobalStyle } from "styled-components";

export const backgroundColor1 = "#fbfdfd";
export const backgroundColor2 = "#f1f4f4";

export const textColor1 = "#bebab9";
export const textColor2 = "#696262";
export const textColor3 = "#121111";

export const accentColor1 = "#121111";
export const accentColor2 = "#244e4b";
export const accentColor3 = "#183634";
export const accentColor4 = "#c67258";
export const accentColor5 = "#bc684e";
export const accentColor6 = "#8d4f3a";

const Colors = createGlobalStyle`
  :root {
    --background-color-1: ${backgroundColor1};
    --background-color-2: ${backgroundColor2};

    --text-color-1: ${textColor1};
    --text-color-2: ${textColor2};
    --text-color-3: ${textColor3};

    --accent-color-1: ${accentColor1};
    --accent-color-2: ${accentColor2};
    --accent-color-3: ${accentColor3};
    --accent-color-4: ${accentColor4};
    --accent-color-5: ${accentColor5};
    --accent-color-6: ${accentColor6};
  }
`;

export default Colors;
