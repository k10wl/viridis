import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { routes } from "src/router";

import NavBar from "../index";

test("NavBar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  routes.forEach((route) => {
    const routeNode = screen.getByRole("link", { name: route.name });

    expect(routeNode).toBeInTheDocument();
    expect(routeNode).toHaveAttribute("href", route.path);

    fireEvent.click(routeNode);
    expect(window.location.pathname).toBe(route.path);
  });
});
