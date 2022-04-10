export const CATEGORIES_TREE = {
  breakfast: {
    displayName: "Что-то на завтрак",
    subcategories: {
      mush: "Каши",
      egg: "Яичное",
      misc: "Прочее",
    },
  },
  lunch: {
    displayName: "Что-то на обед",
    subcategories: {
      soup: "Супы",
      garnish: "Горячее",
      salad: "Салатики",
    },
  },
  snacks: {
    displayName: "Что-то на перекус",
  },
  sweets: {
    displayName: "Сладенькое",
    subcategories: {
      baking: "Выпечка",
      souffle: "Суфле",
      brownie: "Брауни",
      cakes: "Тортики",
      fruits: "Фруктовое",
    },
  },
  misc: {
    displayName: "Разное",
    subcategories: {
      dough: "Тесто",
      filling: "Начинки",
      base: "База блюд",
    },
  },
} as const;
