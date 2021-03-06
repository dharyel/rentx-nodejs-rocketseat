import { Category } from "../entities/Category";

// eslint-disable-next-line spaced-comment
//DTO - Data Transfer Object √© criar um objeto que transferir√° dados
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
