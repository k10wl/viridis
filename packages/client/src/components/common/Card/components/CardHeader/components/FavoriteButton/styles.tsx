import styled from "styled-components";

import { accentColor4 } from "src/stylesheets/Colors";

export const FavoriteButtonBase = styled.button.attrs({
  "data-testid": "favorite-button",
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;

  transform: translateY(-2px);

  border: none;
  border-radius: 50%;

  padding: 3px 0 0;
  margin: 0;

  background-color: transparent;

  cursor: pointer;

  &:focus-visible {
    outline: 3px solid ${accentColor4}80;
    outline-offset: 3px;
  }
`;
