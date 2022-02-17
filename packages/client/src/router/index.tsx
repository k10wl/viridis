import React from "react";
import { Routes, Route } from "react-router";

import Homepage from "src/pages/Homepage";

const Router = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
  </Routes>
);

export default Router;
