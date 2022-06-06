import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categories: ICategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryExists = this.categories.findByName(name);

        if (categoryExists) {
            throw new Error("Category already exists.");
        }

        this.categories.create({ name, description });
    }
}

export { CreateCategoryUseCase };
