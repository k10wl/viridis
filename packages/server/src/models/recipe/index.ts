import mongoose from 'mongoose';

import {
  AMOUNT_TYPES,
  CATEGORIES_ID_ARRAY,
  CATEGORIES_TREE,
  INGREDIENT_NAMES,
  SUBCATEGORIES_ID_ARRAY,
} from '@viridis/shared/constants';
import { Amount, Ingredient, Recipe as RecipeT } from '@viridis/shared/types';

function isSubcategoryRequired(this: RecipeT): boolean {
  return this.category !== 'snacks';
}

function isCorrectlyClassifiedRecipe(this: RecipeT): boolean {
  const recipeCategory: typeof CATEGORIES_ID_ARRAY[number] = this.category;

  let recipeSubcategory: typeof SUBCATEGORIES_ID_ARRAY[number] | null = null;

  if ('subcategory' in this) {
    recipeSubcategory = this.subcategory;
  } else {
    return recipeCategory === 'snacks';
  }

  const validSubcategories = Object.keys(
    CATEGORIES_TREE[recipeCategory].subcategories,
  );

  return validSubcategories.includes(recipeSubcategory);
}

const AmountSchema = new mongoose.Schema<Amount>({
  type: {
    type: String,
    required: true,
    enum: AMOUNT_TYPES,
  },
  value: {
    type: String,
    required: true,
  },
});

const IngredientSchema = new mongoose.Schema<Ingredient>({
  name: {
    type: String,
    required: true,
    enum: INGREDIENT_NAMES,
  },
  amount: {
    type: AmountSchema,
    required: true,
  },
});

const RecipeSchema = new mongoose.Schema<RecipeT>({
  id: {
    type: String,
    required: true,
    min: 1,
    max: 255,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    min: 1,
    max: 255,
    trim: true,
  },
  cooking: {
    type: String,
    required: true,
    max: 5000,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    min: 1,
    max: 100000,
    trim: true,
  },
  ingredients: {
    type: [IngredientSchema],
    required: true,
  },
  picture: {
    type: String,
    required: true,
    min: 1,
    max: 100000,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: CATEGORIES_ID_ARRAY,
  },
  subcategory: {
    type: String,
    required: isSubcategoryRequired,
    validate: [isCorrectlyClassifiedRecipe, 'Invalid recipe'],
  },
});

export const Recipe = mongoose.model<RecipeT>('Product', RecipeSchema);

export { recipeJoi } from './recipeJoi';
