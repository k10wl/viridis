import { CallbackError, Document, UpdateQuery } from 'mongoose';

import { Recipe as RecipeT } from '@viridis/shared/types';

import { Recipe } from 'src/models';
import { RecipeDocument } from 'src/types';

type Callback = (
  err: CallbackError,
  doc: UpdateQuery<RecipeDocument> | null,
  res?: never,
) => void;

export async function updateRecipeById(
  _id: Document['_id'],
  updatedRecipe: RecipeT,
  callback: Callback,
): Promise<UpdateQuery<RecipeDocument>> {
  return Recipe.findByIdAndUpdate(
    { _id },
    updatedRecipe,
    {
      new: true,
      rawResult: true,
    },
    callback,
  );
}
