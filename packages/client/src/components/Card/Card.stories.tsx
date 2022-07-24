import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from "./index";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (props) => <Card {...props} />;

export const ThreeIngredients = Template.bind({});

ThreeIngredients.args = {
  views: 0,
  favorite: false,
  imageSrc:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Name of card",
  description: "Recipe description",
  ingredients: ["Milk", "Cocoa", "Sugar"],
  onClick: (): void => undefined,
};

export const IngredientsOveflow = Template.bind({});

IngredientsOveflow.args = {
  views: 0,
  favorite: false,
  imageSrc:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Name of card",
  description: "Recipe description",
  ingredients: [
    "Egg",
    "Bread",
    "Sugar",
    "Flour",
    "Rehydrated water",
    "Bacon",
    "Poultry",
    "Turkey legs",
    "Chicken breast",
    "Mango",
    "Cheese",
    "Mozzarella",
    "Gorgonzola",
    "Some rare blue cheese name",
    "Soy beans",
    "Honey",
    "Mush",
    "Bananas",
    "Garlic",
    "Onion",
    "Milk",
    "Cocoa",
    "Salt",
  ],
  onClick: (): void => undefined,
};

export const LongDescriptionAndName = Template.bind({});

LongDescriptionAndName.args = {
  views: 0,
  favorite: false,
  imageSrc:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name",
  description:
    "Recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description",
  ingredients: ["Egg", "Bread", "Sugar", "Flour", "Chicken breast"],
  onClick: (): void => undefined,
};
