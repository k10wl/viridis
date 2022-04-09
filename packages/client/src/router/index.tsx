import React from "react";
import { Routes, Route } from "react-router";

import { Homepage, Catalog } from "src/pages";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/catalog" element={<Catalog />} />
  </Routes>
);

export default Router;
