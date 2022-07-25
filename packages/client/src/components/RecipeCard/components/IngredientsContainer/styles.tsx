import styled from "styled-components";

import { accentColor1, backgroundColor1 } from "src/stylesheets/Colors";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  overflow: hidden;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  padding: 5px 10px;
  margin: 0;
  max-height: 45px;
  list-style-position: inside;
  overflow: hidden;
`;

export const Ingredient = styled.li`
  padding: 3px 10px 3px 4px;
  border-radius: 4px;
  text-align: center;

  align-self: center;

  color: ${backgroundColor1};
  background-color: ${accentColor1};

  font-family: "Roboto Thin", sans-serif;
  font-size: 0.75rem;
`;
