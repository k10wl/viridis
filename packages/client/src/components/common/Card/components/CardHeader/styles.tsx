import styled from "styled-components";

import { textColor2 } from "src/stylesheets/Colors";

export const CardHeaderBase = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 5px;
`;

export const CardViews = styled.span`
  padding: 0 5px;

  color: ${textColor2};
`;
