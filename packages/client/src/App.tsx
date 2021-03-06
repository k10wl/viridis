import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import NavBar from "./components/NavBar";
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
      {/* @ts-expect-error: types mismatch https://github.com/styled-components/styled-components/issues/3738 */}
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
