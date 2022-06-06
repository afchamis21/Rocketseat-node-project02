import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categories = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categories);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
