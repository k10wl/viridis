import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { NavBar } from "./components";
import { useStyledUtils } from "./hooks";
import { Router } from "./router";
import store from "./store";
import GlobalStyles from "./stylesheets";

const App: React.FC = () => {
  const utils = useStyledUtils();

  const theme = {
    ...utils,
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
