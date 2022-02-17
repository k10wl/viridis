import Product from "../../models/product";
import { ProductType } from "../../types";

export const getAllProducts = async () => Product.find();

export const getProductById = async (_id: string) => Product.findById(_id);

export const getProductsByQuery = async ({
  category,
  subcategory,
  tags,
  name,
}: {
  category?: string;
  subcategory?: string;
  name?: string;
  tags?: string[];
}) => {
  const query = {
    category: category ? { $regex: new RegExp(category, "gi") } : /.*/,
    subcategory: subcategory ? { $regex: new RegExp(subcategory, "gi") } : /.*/,
    name: name ? { $regex: new RegExp(name, "gi") } : /.*/,
    tags: tags && tags.length > 0 ? { $in: tags } : /.*/,
  };

  console.log(query);

  return Product.find(query);
};

export const createNewProduct = async (product: ProductType) => {
  const doc = new Product(product);
  await doc.save();
  return doc;
};

export const patchProduct = async (_id: string, update: Partial<ProductType>) =>
  Product.findByIdAndUpdate(_id, update, { new: true });

export const deleteProduct = async (_id: string) =>
  Product.findByIdAndDelete(_id, { new: true });
