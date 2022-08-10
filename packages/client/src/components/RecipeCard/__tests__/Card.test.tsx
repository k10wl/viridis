import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import reactRenderer from 'react-test-renderer';

import { Ingredient } from '@viridis/shared/types';

import { RecipeCard } from '../index';

jest.mock('react-router', () => ({
  useNavigate: (): (() => void) => jest.fn(),
}));

const INGREDIENTS: Ingredient[] = [
  {
    name: 'авокадо',
    amount: {
      type: 'teaspoon',
      value: 'teaspoon',
    },
  },
  {
    name: 'манго',
    amount: {
      type: 'teaspoon',
      value: 'teaspoon',
    },
  },
];

const PROPERTIES = {
  picture: 'Eheu, homo!',
  name: 'Orexis, orgia, et ausus.',
  description: 'Cur turpis observare?',
  ingredients: INGREDIENTS,
};

test('RecipeCard component', () => {
  const tree = reactRenderer
    .create(
      <RecipeCard
        id="1"
        picture={PROPERTIES.picture}
        name={PROPERTIES.name}
        description={PROPERTIES.description}
        ingredients={PROPERTIES.ingredients}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();

  render(
    <RecipeCard
      id="1"
      picture={PROPERTIES.picture}
      name={PROPERTIES.name}
      description={PROPERTIES.description}
      ingredients={PROPERTIES.ingredients}
    />,
  );

  const cardNode = screen.getByTestId('card');
  const nameNode = screen.getByText(PROPERTIES.name);
  const imageNode = screen.getByTestId('image');
  const descriptionNode = screen.getByText(PROPERTIES.description);

  expect(cardNode).toBeInTheDocument();
  expect(nameNode).toBeInTheDocument();
  expect(imageNode).toBeInTheDocument();
  expect(imageNode).toHaveAttribute('src', PROPERTIES.picture);
  expect(descriptionNode).toBeInTheDocument();

  PROPERTIES.ingredients.forEach(ingredient => {
    expect(screen.queryByText(ingredient.name)).toBeInTheDocument();
  });

  fireEvent.click(cardNode);

  fireEvent.keyPress(cardNode, {
    key: 'Enter',
    code: 'Enter',
    charCode: 13,
  });
});
