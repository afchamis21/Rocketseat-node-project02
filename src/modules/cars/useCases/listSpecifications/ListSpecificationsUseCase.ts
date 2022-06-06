import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    execute() {
        return this.specificationsRepository.list_all();
    }
}

export { ListSpecificationsUseCase };
