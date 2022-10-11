import { Router } from 'express';

import { recipesRoute } from './routes';

const app = Router();

function routes(): Router {
  recipesRoute(app);

  return app;
}

export default routes;
