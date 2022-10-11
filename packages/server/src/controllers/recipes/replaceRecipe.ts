import { Request, Response } from 'express';
import { CallbackError, UpdateQuery } from 'mongoose';

import { validateRecipe } from 'src/models';
import { updateRecipeById } from 'src/services/recipes';
import { RecipeDocument } from 'src/types';
import { debugLog } from 'src/utils';

export async function replaceRecipe(
  req: Request,
  res: Response,
): Promise<void> {
  const recipe = req.body;
  const { _id } = req.params;

  debugLog(_id);

  function errorCallback(
    error: CallbackError,
    doc: UpdateQuery<RecipeDocument> | null,
  ): void {
    if (!doc) {
      res
        .status(404)
        .json({ message: `Recipe with _id: ${_id} was not found.` });

      return;
    }
    if (error) {
      res.status(500).json({
        message: 'Something went wrong',
        error,
      });

      return;
    }
  }

  try {
    if (!_id || !recipe) {
      res.status(400).json({ message: `'_id' and 'recipe' are required` });

      return;
    }

    validateRecipe(recipe);
    debugLog('successfully validated');
    const updatedDoc = await updateRecipeById(
      req.body._id,
      req.body.recipe,
      errorCallback,
    );

    res.status(200).json(updatedDoc);

    return;
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error. Please try again later.',
    });
    debugLog(error);

    return;
  }
}
