import Joi from "joi";

import {
  AccessoriesCategories,
  Category,
  CoffeeCategories,
  SnacksCategories,
  TeaCategories,
  ProductType,
} from "../../types";

const requestProductJoi = (request: "POST" | "PATCH" | "PUT") => {
  let category = Joi.string().valid(
    ...Object.values(Category).filter((k) => typeof k === "string")
  );

  let subcategory = Joi.alternatives().when("category", {
    switch: [
      {
        is: Category.coffee,
        then: Joi.any().valid(
          ...Object.values(CoffeeCategories).filter(
            (string) => typeof string === "string"
          )
        ),
      },
      {
        is: Category.tea,
        then: Joi.any().valid(
          ...Object.values(TeaCategories).filter(
            (string) => typeof string === "string"
          )
        ),
      },
      {
        is: Category.snacks,
        then: Joi.any().valid(
          ...Object.values(SnacksCategories).filter(
            (string) => typeof string === "string"
          )
        ),
      },
      {
        is: Category.accessories,
        then: Joi.any().valid(
          ...Object.values(AccessoriesCategories).filter(
            (string) => typeof string === "string"
          )
        ),
      },
    ],
  });

  let name = Joi.string().min(1).max(50).trim();

  let tags = Joi.array().items(Joi.string().min(2).max(50).trim());

  const description = Joi.string().max(5000).trim();

  if (request === "POST" || request === "PUT") {
    category = category.required();
    subcategory = subcategory.required();
    name = name.required();
    tags = tags.required();
  }

  return Joi.object({
    specification: Joi.object({
      category,
      subcategory,
    }),
    name,
    description,
    tags,
  });
};

const isValidProduct = (
  request: "POST" | "PATCH" | "PUT",
  product: Partial<ProductType>
) => requestProductJoi(request).validate(product);

export default isValidProduct;
