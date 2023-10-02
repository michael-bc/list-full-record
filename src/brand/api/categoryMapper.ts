import type {Category} from "../domain/Category";
import type {CategoryDto} from "./CategoryDto";

export const categoryFromDto = (input: CategoryDto): Category => {
  return {
    id: input.id,
    name: input.name,
    createdAt: new Date(input.createdAt),
    updatedAt: new Date(input.updatedAt),
  }
}