import { Recipe } from '@viridis/shared/types';

import { validateRecipe } from '../recipeJoi';
import { INVALID_RECIPE_ARRAY, VALID_RECIPE } from './recipesData.helper';

describe('validateRecipe', () => {
  test('should not throw error with valid recipe', () => {
    expect(() => validateRecipe(VALID_RECIPE)).not.toThrowError();
  });

  test.each(INVALID_RECIPE_ARRAY)(
    'should have error property for invalid recipes',
    invalidRecipe => {
      expect(() => validateRecipe(invalidRecipe as Recipe)).toThrowError();
    },
  );
});
