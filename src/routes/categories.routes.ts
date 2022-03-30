import { Router } from "express";

import { CategoryRepositery } from "../repositories/CategoryRepositories";

const categoriesRoutes = Router();
const categoriesRepositery = new CategoryRepositery();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepositery.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
