import { createGlobalStyle } from "styled-components";

import PTSerifBold from "src/static/typography/PT_Serif/PTSerif-Bold.ttf";
import PTSerifBoldItalic from "src/static/typography/PT_Serif/PTSerif-BoldItalic.ttf";
import PTSerifItalic from "src/static/typography/PT_Serif/PTSerif-Italic.ttf";
import PTSerifRegular from "src/static/typography/PT_Serif/PTSerif-Regular.ttf";
import RobotoBlack from "src/static/typography/Roboto/Roboto-Black.ttf";
import RobotoBlackItalic from "src/static/typography/Roboto/Roboto-BlackItalic.ttf";
import RobotoBold from "src/static/typography/Roboto/Roboto-Bold.ttf";
import RobotoBoldItalic from "src/static/typography/Roboto/Roboto-BoldItalic.ttf";
import RobotoItalic from "src/static/typography/Roboto/Roboto-Italic.ttf";
import RobotoLight from "src/static/typography/Roboto/Roboto-Light.ttf";
import RobotoLightItalic from "src/static/typography/Roboto/Roboto-LightItalic.ttf";
import RobotoMedium from "src/static/typography/Roboto/Roboto-Medium.ttf";
import RobotoMediumItalic from "src/static/typography/Roboto/Roboto-MediumItalic.ttf";
import RobotoRegular from "src/static/typography/Roboto/Roboto-Regular.ttf";
import RobotoThin from "src/static/typography/Roboto/Roboto-Thin.ttf";
import RobotoThinItalic from "src/static/typography/Roboto/Roboto-ThinItalic.ttf";

const Fonts = createGlobalStyle`  
  @font-face {
    font-family: "Roboto Black";
    src: url(${RobotoBlack});
  }
  
  @font-face {
    font-family: "Roboto Black Italic";
    src: url(${RobotoBlackItalic});
  }
  
  @font-face {
    font-family: "Roboto Bold";
    src: url(${RobotoBold});
  }
  
  @font-face {
    font-family: "Roboto Bold Italic";
    src: url(${RobotoBoldItalic});
  }
  
  @font-face {
    font-family: "Roboto Italic";
    src: url(${RobotoItalic});
  }
  
  @font-face {
    font-family: "Roboto Light";
    src: url(${RobotoLight});
  }
  
  @font-face {
    font-family: "Roboto Light Italic";
    src: url(${RobotoLightItalic});
  }
  
  @font-face {
    font-family: "Roboto Medium";
    src: url(${RobotoMedium});
  }
  
  @font-face {
    font-family: "Roboto Medium Italic";
    src: url(${RobotoMediumItalic});
  }
  
  @font-face {
    font-family: "Roboto Regular";
    src: url(${RobotoRegular});
  }
  
  @font-face {
    font-family: "Roboto Thin";
    src: url(${RobotoThin});
  }
  
  @font-face {
    font-family: "Roboto Thin Italic";
    src: url(${RobotoThinItalic});
  }
  
  @font-face {
    font-family: "PT Serif";
    src: url(${PTSerifRegular});
  }
  
  @font-face {
    font-family: "PT Serif Italic";
    src: url(${PTSerifItalic});
  }
  
  @font-face {
    font-family: "PT Serif Bold";
    src: url(${PTSerifBold});
  }
  
  @font-face {
    font-family: "PT Serif Bold Italic";
    src: url(${PTSerifBoldItalic});
  }
`;

export default Fonts;
