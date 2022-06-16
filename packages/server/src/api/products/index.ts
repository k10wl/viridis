import { Router } from "express";

import {
  deleteProductById,
  getAllProductsByQuery,
  getOneProductById,
  getProducts,
  patchProductById,
  postProduct,
} from "../../controllers/products";

const productsApi = (router: Router) => {
  const route = Router();

  router.use("/products", route);

  route.get("/", getProducts);
  route.get("/id:_id", getOneProductById);
  route.get("/search", getAllProductsByQuery);
  route.post("/", postProduct);
  route.patch("/id:_id", patchProductById);
  route.delete("/id:_id", deleteProductById);
};

export default productsApi;
