import { Specification } from "../../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    list_all(): Specification[] {
        return this.specifications;
    }
}

export { SpecificationsRepository };
