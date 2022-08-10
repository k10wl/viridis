import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RecipeCard } from '../index';

export default {
  title: 'RecipeCard',
  component: RecipeCard,
} as ComponentMeta<typeof RecipeCard>;

const Template: ComponentStory<typeof RecipeCard> = props => (
  <RecipeCard {...props} />
);

export const ThreeIngredients = Template.bind({});

ThreeIngredients.args = {
  picture:
    'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png',
  name: 'Name of card',
  description: 'Recipe description',
  ingredients: [
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
  ],
};

export const IngredientOverflow = Template.bind({});

IngredientOverflow.args = {
  picture:
    'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png',
  name: 'Name of card',
  description: 'Recipe description',
  ingredients: [
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
  ],
};

export const LongProps = Template.bind({});

LongProps.args = {
  picture:
    'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png',
  name: 'Recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name',
  description:
    'Recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description',
  ingredients: [
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
  ],
};

export const LongDescription = Template.bind({});

LongDescription.args = {
  picture:
    'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png',
  name: 'Recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name',
  description:
    'Recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description',
  ingredients: [
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
    {
      name: 'Milk',
      amount: {
        value: '1',
        type: '1',
      },
    },
  ],
};
