import { Query } from 'mongoose';

import { Recipe } from 'src/models';
import { RecipeDocument } from 'src/types';

export async function queryAllRecipes(): Promise<
  Query<Array<RecipeDocument>, RecipeDocument>
> {
  return Recipe.find();
}
