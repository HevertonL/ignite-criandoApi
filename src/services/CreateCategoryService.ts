import { CategoryRepositery } from "../repositories/CategoryRepositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoryRepositery) {}

  execute({ name, description }: IRequest): void {
    const categoryAllExists = this.categoriesRepository.findByName(name);

    if (categoryAllExists) {
      throw new Error("Category Already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
