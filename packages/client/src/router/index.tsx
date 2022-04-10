import React from "react";
import { RouteObject, useRoutes } from "react-router";

import { Catalog, Homepage } from "src/pages";

type RouteT = RouteObject & { name: string; path: string };

export const routes: RouteT[] = [
  { path: "/", name: "Homepage", element: <Homepage /> },
  { path: "/catalog", name: "Catalog", element: <Catalog /> },
];

export const Router: React.FC = () => useRoutes(routes);
