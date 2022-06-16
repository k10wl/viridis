import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

import NavBarSearch from "../index";

test("NavBarSearch", async () => {
  render(<NavBarSearch />);

  const searchBaseNode = screen.getByTestId("search-container");
  const searchButtonNode = screen.getByRole("button");

  expect(searchBaseNode).toBeInTheDocument();
  expect(searchButtonNode).toBeInTheDocument();

  const inputNode = await waitFor(() =>
    screen.getByPlaceholderText(/What are we searching?/gi)
  );

  expect(inputNode).toBeInTheDocument();
  expect(inputNode).toBeDisabled();

  fireEvent.click(searchButtonNode);

  expect(inputNode).not.toBeDisabled();
});
