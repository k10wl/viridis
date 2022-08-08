export enum Category {
  coffee = 'Coffee',
  tea = 'Tea',
  snacks = 'Chocolate, Fruits & Nuts',
  accessories = 'Accessories',
}

export enum CoffeeCategories {
  espresso = 'Espresso',
  latte = 'Latte',
  mocha = 'Mocha',
  americano = 'Americano',
  cappuccino = 'Cappuccino',
  breve = 'Breve',
}

export enum TeaCategories {
  black = 'Black',
  green = 'Green',
  dragon = 'Dragon',
  melon = 'Melon',
  jasmine = 'Jasmine',
  sweet = 'Sweet',
}

export enum SnacksCategories {
  chocolate = 'Chocolate',
  fruits = 'Fruits',
  nuts = 'Nuts',
}

export enum AccessoriesCategories {
  grinder = 'Grinder',
  cup = 'Cup',
  jar = 'Jar',
  coffeeMaker = 'Coffee maker',
}

type CoffeeProduct = {
  category: Category.coffee;
  subcategory: CoffeeCategories;
};

type TeaProduct = {
  category: Category.tea;
  subcategory: TeaCategories;
};

type SnackProduct = {
  category: Category.snacks;
  subcategory: SnacksCategories;
};

type AccessoriesProduct = {
  category: Category.accessories;
  subcategory: AccessoriesCategories;
};

export type ProductCategory =
  | CoffeeProduct
  | TeaProduct
  | SnackProduct
  | AccessoriesProduct;

export type ProductType = ProductCategory & {
  _id?: string;
  specification: ProductCategory;
  name: string;
  description?: string;
  tags: string[];
};
