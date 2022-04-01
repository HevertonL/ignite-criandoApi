import { request, Router } from "express";

import { CategoryRepositery } from "../repositories/CategoryRepositories";

const categoriesRoutes = Router();
const categoriesRepositery = new CategoryRepositery();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAllExists = categoriesRepositery.findByName(name);

  if (categoryAllExists) {
    return response.status(400).json({ error: "Category Already exists!" });
  }

  categoriesRepositery.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allList = categoriesRepositery.list();
  response.status(201).json(allList);
});

export { categoriesRoutes };
