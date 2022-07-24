import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import reactRenderer from "react-test-renderer";

import { Card } from "../index";

const properties = {
  views: 3,
  favorite: false,
  imageSrc: "Eheu, homo!",
  name: "Orexis, orgia, et ausus.",
  description: "Cur turpis observare?",
  ingredients: ["Planeta", "Brodiums"],
  onClick: jest.fn(),
};

test("Card component", () => {
  const tree = reactRenderer
    .create(
      <Card
        views={properties.views}
        favorite={properties.favorite}
        imageSrc={properties.imageSrc}
        name={properties.name}
        description={properties.description}
        ingredients={properties.ingredients}
        onClick={properties.onClick}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();

  render(
    <Card
      views={properties.views}
      favorite={properties.favorite}
      imageSrc={properties.imageSrc}
      name={properties.name}
      description={properties.description}
      ingredients={properties.ingredients}
      onClick={properties.onClick}
    />
  );

  const cardNode = screen.getByTestId("card");
  const nameNode = screen.getByText(properties.name);
  const viewsNode = screen.getByText(properties.views);
  const imageNode = screen.getByTestId("image");
  const favoriteNode = screen.getByTestId("favorite-button");
  const descriptionNode = screen.getByText(properties.description);

  expect(cardNode).toBeInTheDocument();
  expect(nameNode).toBeInTheDocument();
  expect(viewsNode).toBeInTheDocument();
  expect(imageNode).toBeInTheDocument();
  expect(imageNode).toHaveAttribute("src", properties.imageSrc);
  expect(favoriteNode).toBeInTheDocument();
  expect(descriptionNode).toBeInTheDocument();

  properties.ingredients.forEach((ingredient) => {
    const ingredientNode = screen.getByText(ingredient);

    expect(ingredientNode).toBeInTheDocument();
  });

  fireEvent.click(cardNode);
  expect(properties.onClick).toHaveBeenCalledTimes(1);
  properties.onClick.mockReset();

  fireEvent.keyPress(cardNode, { key: "Enter", code: "Enter", charCode: 13 });
  expect(properties.onClick).toHaveBeenCalledTimes(1);
});
