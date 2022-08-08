import { createGlobalStyle } from 'styled-components';

export const backgroundColor1 = '#fbfdfd';
export const backgroundColor2 = '#f1f4f4';
export const backgroundColor3 = '#f2f3f5';

export const textColor1 = '#bebab9';
export const textColor2 = '#696262';
export const textColor3 = '#121111';

export const primaryColor1 = '#c67258';
export const primaryColor2 = '#bc684e';
export const primaryColor3 = '#8d4f3a';

export const accentColor1 = '#244e4b';
export const accentColor2 = '#183634';
export const accentColor3 = '#2f605d';

const Colors = createGlobalStyle`
  :root {
    --background-color-1: ${backgroundColor1};
    --background-color-2: ${backgroundColor2};
    --background-color-3: ${backgroundColor3};

    --text-color-1: ${textColor1};
    --text-color-2: ${textColor2};
    --text-color-3: ${textColor3};

    --accent-color-1: ${accentColor1};
    --accent-color-2: ${accentColor1};
    --accent-color-3: ${accentColor2};

    --primary-color-1: ${primaryColor1};
    --primary-color-2: ${primaryColor2};
    --primary-color-3: ${primaryColor3};
  }
`;

export default Colors;
