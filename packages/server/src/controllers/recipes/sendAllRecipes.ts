import { Request, Response } from 'express';

import { queryAllRecipes } from 'src/services/recipes';
import { debugLog } from 'src/utils';

export async function sendAllRecipes(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const recipes = await queryAllRecipes();

    res.status(200).json(recipes);

    return;
  } catch (e) {
    debugLog(e);

    res.status(500).json(e);
  }
}
