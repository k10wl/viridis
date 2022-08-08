import { Router } from 'express';

import productsApi from './products';

const routes = () => {
  const app = Router();

  productsApi(app);

  return app;
};

export default routes;
