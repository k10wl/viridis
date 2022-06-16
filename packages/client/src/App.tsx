import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Router } from "./router";
import { useStyledUtils } from "./hooks";
import store from "./store";
import GlobalStyles from "./stylesheets";
import { NavBar } from "./components";

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
