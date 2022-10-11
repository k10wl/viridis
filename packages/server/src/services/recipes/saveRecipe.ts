import { Recipe as RecipeT } from '@viridis/shared/types';

import { Recipe } from 'src/models';
import { RecipeDocument } from 'src/types';

export async function saveRecipe(recipeData: RecipeT): Promise<RecipeDocument> {
  const recipe = new Recipe(recipeData);

  await recipe.validate();

  return recipe.save();
}
