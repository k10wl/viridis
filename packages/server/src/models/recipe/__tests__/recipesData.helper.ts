import { Recipe } from '@viridis/shared/types';

export const VALID_RECIPE: Recipe = {
  id: '1',
  name: 'valid recipe',
  cooking: 'valid cooking',
  description: 'valid description',
  category: 'breakfast',
  subcategory: 'egg',
  ingredients: [
    {
      name: 'авокадо',
      amount: {
        value: '1',
        type: 'piece',
      },
    },
  ],
  picture: 'valid picture',
};

export const INVALID_RECIPE_ARRAY = [
  {},

  {
    id: '1',
    name: 'valid recipe',
    cooking: 'valid cooking',
    description: 'valid description',
    category: 'snacks',
    subcategory: 'egg',
    ingredients: [
      {
        name: 'авокадо',
        amount: {
          value: '1',
          type: 'piece',
        },
      },
    ],
    picture: 'valid picture',
  },

  {
    id: '1',
    name: 'valid recipe',
    cooking: 'valid cooking',
    description: 'valid description',
    category: 'breakfast',
    subcategory: 'not breakfast subcategory',
    ingredients: [
      {
        name: 'авокадо',
        amount: {
          value: '1',
          type: 'piece',
        },
      },
    ],
    picture: 'valid picture',
  },

  {
    id: '1',
    name: 'valid recipe',
    cooking: 'valid cooking',
    description: 'valid description',
    category: 'breakfast',
    ingredients: [
      {
        name: 'авокадо',
        amount: {
          value: '1',
          type: 'piece',
        },
      },
    ],
    picture: 'valid picture',
  },
  {
    id: '1',
    name: 'valid recipe',
    cooking: 'valid cooking',
    description: 'valid description',
    category: 'invalid category',
    subcategory: 'egg',
    ingredients: [
      {
        name: 'авокадо',
        amount: {
          value: '1',
          type: 'piece',
        },
      },
    ],
    picture: 'valid picture',
  },
];
