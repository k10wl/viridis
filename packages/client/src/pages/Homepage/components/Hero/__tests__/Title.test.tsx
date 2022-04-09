import React from "react";

import { render, screen } from "@testing-library/react";

import { Title } from "../styles";

test("Title", () => {
  const TEXT = "Title text";
  render(<Title>{TEXT}</Title>);

  const titleNode = screen.getByText(TEXT);

  expect(titleNode).toBeInTheDocument();
});
