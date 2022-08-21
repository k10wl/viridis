import { recipeJoi } from '../recipeJoi';
import { INVALID_RECIPE_ARRAY, VALID_RECIPE } from './recipesData.helper';

describe('recipeJoi', () => {
  test('should not throw error with valid recipe', () => {
    expect(recipeJoi.validate(VALID_RECIPE)).not.toHaveProperty('error');
  });

  test.each(INVALID_RECIPE_ARRAY)(
    'should have error property for invalid recipes',
    invalidRecipe => {
      expect(recipeJoi.validate(invalidRecipe)).toHaveProperty('error');
    },
  );
});
