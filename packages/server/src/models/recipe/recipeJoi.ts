import Joi, { ValidationError } from 'joi';

import {
  AMOUNT_TYPES,
  CATEGORIES_ID_ARRAY,
  CATEGORIES_TREE,
  INGREDIENT_NAMES,
} from '@viridis/shared/constants';
import { Ingredient, Recipe as RecipeT, Recipe } from '@viridis/shared/types';

const ingredientJoi = Joi.object<Ingredient>({
  name: Joi.string()
    .valid(...INGREDIENT_NAMES)
    .required(),
  amount: Joi.object({
    type: Joi.string()
      .valid(...AMOUNT_TYPES)
      .required(),
    value: Joi.alternatives(Joi.string(), Joi.number()).required(),
  }),
});

const subcategoryJoi = Joi.when('category', {
  is: CATEGORIES_TREE.breakfast.categoryId,
  then: Joi.string()
    .valid(...Object.keys(CATEGORIES_TREE.breakfast.subcategories))
    .required(),
})
  .when('category', {
    is: CATEGORIES_TREE.lunch.categoryId,
    then: Joi.string()
      .valid(...Object.keys(CATEGORIES_TREE.lunch.subcategories))
      .required(),
  })
  .when('category', {
    is: CATEGORIES_TREE.miscellaneous.categoryId,
    then: Joi.string()
      .valid(...Object.keys(CATEGORIES_TREE.miscellaneous.subcategories))
      .required(),
  })
  .when('category', {
    is: CATEGORIES_TREE.snacks.categoryId,
    then: Joi.valid(null),
  })
  .when('category', {
    is: CATEGORIES_TREE.sweets.categoryId,
    then: Joi.string()
      .valid(...Object.keys(CATEGORIES_TREE.sweets.subcategories))
      .required(),
  });

const recipeJoi = Joi.object<Recipe>({
  id: Joi.string().id().required(),
  name: Joi.string().min(1).max(255).trim(),
  description: Joi.string().min(1).max(65535).trim().required(),
  cooking: Joi.string().min(1).max(65535).trim().required(),
  ingredients: Joi.array().items(ingredientJoi).required(),
  picture: Joi.string().trim(),
  category: Joi.string()
    .valid(...CATEGORIES_ID_ARRAY)
    .required(),
  subcategory: subcategoryJoi,
});

export function validateRecipe(recipeData: RecipeT): void {
  const { error } = recipeJoi.validate(recipeData);

  if (error) {
    throw new ValidationError(error.message, error.details, error._original);
  }
}
