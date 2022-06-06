import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categories: ICategoriesRepository) {}

    execute(): Category[] {
        return this.categories.list_all();
    }
}

export { ListCategoriesUseCase };
