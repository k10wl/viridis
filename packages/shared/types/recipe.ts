import { AMOUNT_TYPES, CATEGORIES_TREE, INGREDIENT_NAMES } from '../constants';

type Categories = keyof typeof CATEGORIES_TREE;
type Category<T extends Categories> = typeof CATEGORIES_TREE[T];

type Breakfast = typeof CATEGORIES_TREE.breakfast.categoryId;
type Lunch = typeof CATEGORIES_TREE.lunch.categoryId;
type Miscellaneous = typeof CATEGORIES_TREE.miscellaneous.categoryId;
type Snacks = typeof CATEGORIES_TREE.snacks.categoryId;
type Sweets = typeof CATEGORIES_TREE.sweets.categoryId;

export interface Amount {
  value: string;
  type: typeof AMOUNT_TYPES[number];
}

export interface Ingredient {
  name: typeof INGREDIENT_NAMES[number];
  amount: Amount;
}

export interface RecipeBase {
  id: string;
  name: string;
  cooking: string;
  description: string;
  ingredients: Array<Ingredient>;
  picture?: string;
}

interface RecipeClassificationBase<T extends Categories> {
  category: Category<T>['categoryId'];
  subcategory: keyof Category<T>['subcategories'];
}

type RecipeClassification<T extends Categories> =
  keyof Category<T>['subcategories'] extends never
    ? Omit<RecipeClassificationBase<T>, 'subcategory'>
    : RecipeClassificationBase<T>;

type CategoryRecipe<T extends Categories> = RecipeBase &
  RecipeClassification<T>;

type BreakfastRecipe = CategoryRecipe<Breakfast>;
type LunchRecipe = CategoryRecipe<Lunch>;
type MiscellaneousRecipe = CategoryRecipe<Miscellaneous>;
type SnacksRecipe = CategoryRecipe<Snacks>;
type SweetsRecipe = CategoryRecipe<Sweets>;

export type Recipe =
  | BreakfastRecipe
  | LunchRecipe
  | MiscellaneousRecipe
  | SnacksRecipe
  | SweetsRecipe;
