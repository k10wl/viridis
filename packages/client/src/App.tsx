import React from "react";

import { ThemeProvider } from "styled-components";
import Router from "./router";
import { NavBar } from "./components";
import { useStyledUtils } from "./hooks";

const App: React.FC = () => {
  const utils = useStyledUtils();

  const theme = {
    ...utils,
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Router />
    </ThemeProvider>
  );
};

export default App;
