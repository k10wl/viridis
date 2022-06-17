import * as mongoose from "mongoose";

import {
  AccessoriesCategories,
  Category,
  CoffeeCategories,
  ProductType,
  SnacksCategories,
  TeaCategories,
} from "src/types";

const productSchema = new mongoose.Schema<ProductType>({
  specification: {
    category: {
      type: String,
      enum: Object.values(Category).filter(
        (string) => typeof string === "string"
      ),
      required: true,
    },
    subcategory: {
      type: String,
      validate() {
        const product = this as ProductType;

        switch (product.specification.category) {
          case Category.coffee:
            return Object.values(CoffeeCategories).includes(
              product.specification.subcategory
            );
          case Category.tea:
            return Object.values(TeaCategories).includes(
              product.specification.subcategory
            );
          case Category.snacks:
            return Object.values(SnacksCategories).includes(
              product.specification.subcategory
            );
          case Category.accessories:
            return Object.values(AccessoriesCategories).includes(
              product.specification.subcategory
            );
          default:
            return false;
        }
      },
      required: true,
    },
  },
  name: { type: String, required: true, min: 1, max: 50, trim: true },
  description: { type: String, max: 5000, trim: true, default: "" },
  tags: [{ type: String, min: 2, max: 50, required: true }],
});

const ProductModel = mongoose.model<ProductType>("Product", productSchema);

export default ProductModel;
