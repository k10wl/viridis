export const CATEGORIES = {
  breakfast: { id: "breakfast", category: "Что-то на завтрак" },
  lunch: { id: "lunch", category: "Что-то на обед" },
  misc: { id: "misc", category: "Разное" },
  snacks: { id: "snacks", category: "Что-то на перекус" },
  sweets: { id: "sweets", category: "Сладенькое" },
} as const;

export const SUBCATEGORIES = {
  baking: { id: "baking", subcategory: "Выпечка" },
  base: { id: "base", subcategory: "База блюд" },
  brownie: { id: "brownie", subcategory: "Брауни" },
  cakes: { id: "cakes", subcategory: "Тортики" },
  dough: { id: "dough", subcategory: "Тесто" },
  egg: { id: "egg", subcategory: "Яичное" },
  filling: { id: "filling", subcategory: "Начинки" },
  fruits: { id: "fruits", subcategory: "Фруктовое" },
  garnish: { id: "garnish", subcategory: "Горячее" },
  mush: { id: "mush", subcategory: "Каши" },
  other: { id: "other", subcategory: "Прочее" },
  salad: { id: "salad", subcategory: "Салатики" },
  souffle: { id: "souffle", subcategory: "Суфле" },
  soup: { id: "soup", subcategory: "Супы" },
} as const;

export const BREAKFAST_SUBCATEGORIES = [
  SUBCATEGORIES.mush,
  SUBCATEGORIES.egg,
  SUBCATEGORIES.other,
] as const;

export const LUNCH_SUBCATEGORIES = [
  SUBCATEGORIES.soup,
  SUBCATEGORIES.garnish,
  SUBCATEGORIES.salad,
] as const;

export const SWEETS_SUBCATEGORIES = [
  SUBCATEGORIES.baking,
  SUBCATEGORIES.souffle,
  SUBCATEGORIES.brownie,
  SUBCATEGORIES.cakes,
  SUBCATEGORIES.fruits,
] as const;

export const MISC_SUBCATEGORIES = [
  SUBCATEGORIES.dough,
  SUBCATEGORIES.filling,
  SUBCATEGORIES.base,
] as const;

export const CATEGORIES_TREE = [
  {
    id: CATEGORIES.breakfast.id,
    category: CATEGORIES.breakfast.category,
    subcategories: BREAKFAST_SUBCATEGORIES,
  },
  {
    id: CATEGORIES.lunch.id,
    category: CATEGORIES.lunch.category,
    subcategories: LUNCH_SUBCATEGORIES,
  },
  {
    id: CATEGORIES.snacks.id,
    category: CATEGORIES.snacks.category,
  },
  {
    id: CATEGORIES.sweets.id,
    category: CATEGORIES.sweets.category,
    subcategories: SWEETS_SUBCATEGORIES,
  },
  {
    id: CATEGORIES.misc.id,
    category: CATEGORIES.misc.category,
    subcategories: MISC_SUBCATEGORIES,
  },
] as const;
