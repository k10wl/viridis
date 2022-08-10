import mongoose from 'mongoose';

import {
  CATEGORIES_ID_ARRAY,
  SUBCATEGORIES_ID_ARRAY,
} from '@viridis/shared/constants';
import { Recipe } from '@viridis/shared/types';

const RecipeSchema = new mongoose.Schema<Recipe>({
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
    type: [String],
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
    required: true,
    enum: SUBCATEGORIES_ID_ARRAY,
  },
});

export const RecipeModel = mongoose.model<Recipe>('Product', RecipeSchema);
