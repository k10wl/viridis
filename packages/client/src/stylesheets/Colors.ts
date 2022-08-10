import { createGlobalStyle } from 'styled-components';

export const BACKGROUND_COLOR_1 = '#FBFDFD';
export const BACKGROUND_COLOR_2 = '#F1F4F4';
export const BACKGROUND_COLOR_3 = '#F2F3F5';

export const TEXT_COLOR_1 = '#BEBAB9';
export const TEXT_COLOR_2 = '#696262';
export const TEXT_COLOR_3 = '#121111';

export const PRIMARY_COLOR_1 = '#C67258';
export const PRIMARY_COLOR_2 = '#BC684E';
export const PRIMARY_COLOR_3 = '#8D4F3A';

export const ACCENT_COLOR_1 = '#244E4B';
export const ACCENT_COLOR_2 = '#183634';
export const ACCENT_COLOR_3 = '#2F605D';

export const Colors = createGlobalStyle`
  :root {
    --background-color-1: ${BACKGROUND_COLOR_1};
    --background-color-2: ${BACKGROUND_COLOR_2};
    --background-color-3: ${BACKGROUND_COLOR_3};

    --text-color-1: ${TEXT_COLOR_1};
    --text-color-2: ${TEXT_COLOR_2};
    --text-color-3: ${TEXT_COLOR_3};

    --accent-color-1: ${ACCENT_COLOR_1};
    --accent-color-2: ${ACCENT_COLOR_1};
    --accent-color-3: ${ACCENT_COLOR_2};

    --primary-color-1: ${PRIMARY_COLOR_1};
    --primary-color-2: ${PRIMARY_COLOR_2};
    --primary-color-3: ${PRIMARY_COLOR_3};
  }
`;

export default Colors;
