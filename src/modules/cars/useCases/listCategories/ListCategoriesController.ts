import { Response, Request } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        return response.json(this.listCategoryUseCase.execute());
    }
}

export { ListCategoriesController };
