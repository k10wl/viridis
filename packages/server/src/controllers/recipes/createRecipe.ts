import { Request, Response } from 'express';

import { saveRecipe } from 'src/services/recipes';
import { debugLog } from 'src/utils';

import { validateRecipe } from '../../models';

export async function createRecipe(req: Request, res: Response): Promise<void> {
  try {
    validateRecipe(req.body);

    const recipeDoc = await saveRecipe(req.body);

    res.status(200).json(recipeDoc);

    return;
  } catch (e) {
    debugLog(e);

    res.status(400).json(e);
  }
}
