import { getKeys } from "@root/utils/getKeys";

export const SUBCATEGORIES = {
  baking: { subcategoryId: "baking", displayName: "Baking" },
  base: { subcategoryId: "base", displayName: "Base" },
  brownie: { subcategoryId: "brownie", displayName: "Brownie" },
  cakes: { subcategoryId: "cakes", displayName: "Cakes" },
  dough: { subcategoryId: "dough", displayName: "Dough" },
  egg: { subcategoryId: "egg", displayName: "Egg" },
  filling: { subcategoryId: "filling", displayName: "Fillings" },
  fruits: { subcategoryId: "fruits", displayName: "Fruits" },
  garnish: { subcategoryId: "garnish", displayName: "Garnish" },
  mush: { subcategoryId: "mush", displayName: "Mush" },
  other: { subcategoryId: "other", displayName: "Other" },
  salad: { subcategoryId: "salad", displayName: "Salad" },
  souffle: { subcategoryId: "souffle", displayName: "Souffle" },
  soup: { subcategoryId: "soup", displayName: "Soup" },
} as const;

export const BREAKFAST_SUBCATEGORIES = {
  egg: SUBCATEGORIES.egg,
  mush: SUBCATEGORIES.mush,
  other: SUBCATEGORIES.other,
} as const;

export const LUNCH_SUBCATEGORIES = {
  garnish: SUBCATEGORIES.garnish,
  salad: SUBCATEGORIES.salad,
  soup: SUBCATEGORIES.soup,
} as const;

export const SNACKS_SUBCATEGORIES = {} as const;

export const SWEETS_SUBCATEGORIES = {
  baking: SUBCATEGORIES.baking,
  brownie: SUBCATEGORIES.brownie,
  cakes: SUBCATEGORIES.cakes,
  fruits: SUBCATEGORIES.fruits,
  souffle: SUBCATEGORIES.souffle,
} as const;

export const MISC_SUBCATEGORIES = {
  base: SUBCATEGORIES.base,
  dough: SUBCATEGORIES.dough,
  filling: SUBCATEGORIES.filling,
} as const;

export const CATEGORIES_TREE = {
  breakfast: {
    categoryId: "breakfast",
    displayName: "Something on breakfast",
    subcategories: BREAKFAST_SUBCATEGORIES,
  },
  lunch: {
    categoryId: "lunch",
    displayName: "Something on lunch",
    subcategories: LUNCH_SUBCATEGORIES,
  },
  miscellaneous: {
    categoryId: "miscellaneous",
    displayName: "Miscellaneous",
    subcategories: MISC_SUBCATEGORIES,
  },
  snacks: {
    categoryId: "snacks",
    displayName: "Something on snack",
    subcategories: SNACKS_SUBCATEGORIES,
  },
  sweets: {
    categoryId: "sweets",
    displayName: "Something sweet",
    subcategories: SWEETS_SUBCATEGORIES,
  },
} as const;

export const SUBCATEGORIES_ID_ARRAY = getKeys(SUBCATEGORIES);
export const CATEGORIES_ID_ARRAY = getKeys(CATEGORIES_TREE);
