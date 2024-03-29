import { rem } from 'polished';
import styled from 'styled-components';

import { TEXT_COLOR_2, TEXT_COLOR_3 } from 'src/stylesheets/Colors';

export const Figure = styled.figure`
  margin: 0;
`;

export const ImageContainer = styled.div`
  min-height: 255px;
`;

export const Image = styled.img.attrs({
  'data-testid': 'image',
})`
  flex-shrink: 0;
  flex-grow: 0;
  height: 255px;
  min-height: 255px;
  width: 100%;
  object-fit: cover;
`;

export const Figurecaption = styled.figcaption`
  padding: 0 10px;
  margin: 5px 0 0;

  color: ${TEXT_COLOR_3};

  font-family: 'PT Serif Bold', serif;
  font-size: ${rem('20px')};

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FoodDescription = styled.p`
  padding: 0 10px;
  margin: 7px 0 6px;

  color: ${TEXT_COLOR_2};

  font-family: 'Roboto Thin', sans-serif;
  font-size: 0.875rem;

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
