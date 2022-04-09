import styled from "styled-components";

import {
  accentColor1,
  backgroundColor1,
  backgroundColor3,
} from "src/stylesheets/Colors";

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 143px;

  margin-top: auto;
  padding: 10px 10px;

  background-color: ${backgroundColor3};
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  max-height: 66px;
  overflow: hidden;

  list-style-type: none;
`;

export const CardTag = styled.li`
  padding: 3px 10px;
  border-radius: 4px;
  text-align: center;
  flex-grow: 1;

  align-self: center;

  color: ${backgroundColor1};
  background-color: ${accentColor1};

  font-family: "Roboto Thin", sans-serif;
  font-size: 0.75rem;
`;
