import styled from "styled-components";

import { textColor2, textColor3 } from "src/stylesheets/Colors";

export const CardImage = styled.img.attrs({
  "data-testid": "image",
})`
  height: 280px;
  width: 100%;
  object-fit: cover;
`;

export const CardName = styled.p`
  padding: 10px 10px 10px;

  color: ${textColor3};

  font-family: "PT Serif Bold", serif;
  font-size: 1.125rem;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDescription = styled.p`
  padding: 0 10px;

  color: ${textColor2};

  font-family: "Roboto Thin", sans-serif;
  font-size: 0.875rem;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
