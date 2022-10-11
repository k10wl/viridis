import { Router } from 'express';

import { createRecipe, sendAllRecipes } from 'src/controllers/recipes';

import { replaceRecipe } from '../../controllers/recipes/replaceRecipe';

const recipes = Router();

export function recipesRoute(api: Router): void {
  recipes.post('/', createRecipe);
  recipes.get('/', sendAllRecipes);
  recipes.put('/:_id', replaceRecipe);

  api.use('/recipes', recipes);
}
