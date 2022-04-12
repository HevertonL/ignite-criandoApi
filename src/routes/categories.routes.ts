import { Router } from "express";

import { CategoryRepositery } from "../repositories/CategoryRepositories";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepositery = new CategoryRepositery();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepositery);
  createCategoryService.execute({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allList = categoriesRepositery.list();
  response.status(201).json(allList);
});

export { categoriesRoutes };
