import { Request, Response } from "express";

import isValidProduct from "src/models/product/productJoi";
import {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByQuery,
  patchProduct,
} from "src/services/products";
import { ProductType } from "src/types";

export const getProducts = async (req: Request, res: Response) => {
  const products = await getAllProducts();

  return res.status(200).json(products);
};

export const getOneProductById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const product = await getProductById(_id);

    if (!product) {
      return res
        .status(404)
        .json({ message: "Product with given ID does not exist." });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllProductsByQuery = async (req: Request, res: Response) => {
  try {
    const { category, subcategory, name } = req.query as {
      [key: string]: string;
    };

    let tags = req.query.tags as string;

    if (!tags) {
      tags = "";
    }
    const queryTags = tags.trim() ? tags.split(",") : [];

    const products = await getProductsByQuery({
      tags: queryTags,
      category,
      subcategory,
      name,
    });

    if (products.length === 0) {
      return res.status(404).json({ error: "No products were found." });
    }

    const filteredProducts = products.sort((a, b) => {
      let aMatches = 0;
      let bMatches = 0;

      queryTags.forEach((tag) => {
        if (a.tags.includes(tag)) {
          aMatches += 1;
        }
        if (b.tags.includes(tag)) {
          bMatches += 1;
        }
      });

      if (aMatches === bMatches) {
        return a.tags.length - b.tags.length;
      }

      return bMatches - aMatches;
    });

    return res.status(200).json(filteredProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const postProduct = async (
  req: Request<Record<string, never>, Record<string, never>, ProductType>,
  res: Response
) => {
  try {
    const product = req.body;

    const { error } = isValidProduct("POST", product);

    if (error) {
      return res.status(400).json({ error: "Corrupted request.", ...error });
    }

    const newProduct = await createNewProduct(product);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const patchProductById = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    Partial<ProductType>
  >,
  res: Response
) => {
  try {
    const { _id } = req.params;
    const requestedUpdate = req.body;

    const { error } = isValidProduct("PATCH", requestedUpdate);

    if (error) {
      return res.status(400).json({ error: "Corrupted request.", ...error });
    }

    if (Object.keys(requestedUpdate).length === 0) {
      return res.status(400).json({ error: "Empty request body." });
    }

    const patchedProduct = await patchProduct(_id, requestedUpdate);

    return res.status(201).json(patchedProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;

    const deletedProduct = await deleteProduct(_id);

    return res.status(200).json(deletedProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};
