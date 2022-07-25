import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { RecipeCard } from "./index";

export default {
  title: "RecipeCard",
  component: RecipeCard,
} as ComponentMeta<typeof RecipeCard>;

const Template: ComponentStory<typeof RecipeCard> = (props) => (
  <RecipeCard {...props} />
);

export const ThreeIngredients = Template.bind({});

ThreeIngredients.args = {
  imageUrl:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Name of card",
  foodDescription: "Recipe description",
  ingredients: ["Milk", "Cocoa", "Sugar"],
};

export const IngredientOverflow = Template.bind({});

IngredientOverflow.args = {
  imageUrl:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Name of card",
  foodDescription: "Recipe description",
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
};

export const LongProps = Template.bind({});

LongProps.args = {
  imageUrl:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name",
  foodDescription:
    "Recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description",
  ingredients: [
    "Egg",
    "Bread",
    "Sugar",
    "Flour",
    "Chicken breast",
    "Egg",
    "Bread",
    "Sugar",
    "Flour",
    "Chicken breast",
    "Egg",
    "Bread",
    "Sugar",
    "Flour",
    "Chicken breast",
  ],
};

export const LongDescription = Template.bind({});

LongDescription.args = {
  imageUrl:
    "https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png",
  name: "Recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name recipe name",
  foodDescription:
    "Recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description recipe description",
  ingredients: ["Egg", "Bread"],
};
