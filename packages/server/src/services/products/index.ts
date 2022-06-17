import Product from "src/models/product";
import { ProductType } from "src/types";

export const getAllProducts = async (): Promise<ProductType[]> =>
  Product.find();

export const getProductById = async (
  _id: string
): Promise<ProductType | null> => Product.findById(_id);

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
}): Promise<ProductType[]> => {
  const query = {
    category: category ? { $regex: new RegExp(category, "gi") } : /.*/,
    subcategory: subcategory ? { $regex: new RegExp(subcategory, "gi") } : /.*/,
    name: name ? { $regex: new RegExp(name, "gi") } : /.*/,
    tags: tags && tags.length > 0 ? { $in: tags } : /.*/,
  };

  console.log(query);

  return Product.find(query);
};

export const createNewProduct = async (
  product: ProductType
): Promise<ProductType> => {
  const doc = new Product(product);

  await doc.save();

  return doc;
};

export const patchProduct = async (
  _id: string,
  update: Partial<ProductType>
): Promise<ProductType | null> =>
  Product.findByIdAndUpdate(_id, update, { new: true });

export const deleteProduct = async (_id: string): Promise<ProductType | null> =>
  Product.findByIdAndDelete(_id, { new: true });
