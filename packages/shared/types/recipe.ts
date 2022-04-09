import { CATEGORIES_TREE } from "constants/categoriesTree";

export interface RecipeT {
  _id: string;
  views: number;
  name: string;
  category: keyof typeof CATEGORIES_TREE;
  subcategory:
    | keyof typeof CATEGORIES_TREE.breakfast.subcategories
    | keyof typeof CATEGORIES_TREE.lunch.subcategories
    | keyof typeof CATEGORIES_TREE.sweets.subcategories
    | keyof typeof CATEGORIES_TREE.misc.subcategories;
  ingredients: string[];
  description: string;
  recipe: string;
}
