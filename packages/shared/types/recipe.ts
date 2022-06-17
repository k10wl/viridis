import {
  BREAKFAST_SUBCATEGORIES,
  CATEGORIES,
  INGREDIENTS,
  LUNCH_SUBCATEGORIES,
  MISC_SUBCATEGORIES,
  SWEETS_SUBCATEGORIES,
} from "@root/constants";

interface RecipeBase {
  id: string;
  name: string;
  ingredients: typeof INGREDIENTS[number][];
  description: string;
  cooking: string;
}

interface BreakfastRecipe extends RecipeBase {
  category: typeof CATEGORIES.breakfast.id;
  subcategory: typeof BREAKFAST_SUBCATEGORIES[number];
}

interface LunchRecipe extends RecipeBase {
  category: typeof CATEGORIES.lunch.id;
  subcategory: typeof LUNCH_SUBCATEGORIES[number];
}

interface SnackRecipe extends RecipeBase {
  category: typeof CATEGORIES.snacks.id;
}

interface SweetsRecipe extends RecipeBase {
  category: typeof CATEGORIES.sweets.id;
  subcategory: typeof SWEETS_SUBCATEGORIES[number];
}

interface MiscRecipe extends RecipeBase {
  category: typeof CATEGORIES.misc.id;
  subcategory: typeof MISC_SUBCATEGORIES[number];
}

export type RecipeT =
  | BreakfastRecipe
  | LunchRecipe
  | SnackRecipe
  | SweetsRecipe
  | MiscRecipe;
