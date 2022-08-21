import { Recipe } from '../index';
import { INVALID_RECIPE_ARRAY, VALID_RECIPE } from './recipesData.helper';

describe('recipeModel validation', () => {
  test('should not throw error with valid recipe', async () => {
    let error = null;

    try {
      const recipe = new Recipe(VALID_RECIPE);

      await recipe.validate();
    } catch (e) {
      error = e;
    }

    expect(error).toBeNull();
  });

  test.each(INVALID_RECIPE_ARRAY)(
    'should throw error if recipe is not valid',
    async invalidRecipe => {
      const recipe = new Recipe(invalidRecipe);

      await expect(recipe.validate()).rejects.toThrow();
    },
  );
});
