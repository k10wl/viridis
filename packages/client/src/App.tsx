import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { NavBar } from './components';
import { Router } from './router';
import store from './store';
import GlobalStyles from './stylesheets';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  </Provider>
);

export default App;
