import React from "react";

import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/catalog">Catalog</NavLink>
  </>
);

export default NavBar;
