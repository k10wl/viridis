import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { FavoriteButton } from '../index';

const onClick = jest.fn();

test('FavoriteButton', async () => {
  const { rerender } = render(<FavoriteButton onClick={onClick} favorite />);

  const buttonNode = screen.getByTestId('favorite-button');
  const favoriteNode = screen.getByTestId('favorite-icon');

  expect(buttonNode).toBeInTheDocument();
  expect(favoriteNode).toBeInTheDocument();

  fireEvent.click(buttonNode);
  expect(onClick).toHaveBeenCalledTimes(1);

  rerender(<FavoriteButton onClick={onClick} favorite={false} />);

  const regularNode = await waitFor(() => screen.getByTestId('regular-icon'));

  expect(regularNode).toBeInTheDocument();
});
