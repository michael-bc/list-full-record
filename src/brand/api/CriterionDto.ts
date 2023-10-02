import type {CategoryDto} from "./CategoryDto";
import type {LocationDto} from "./LocationDto";
import type {BrandDto} from "./BrandDto";

export type CriterionDto = {
  category: CategoryDto;
  location: LocationDto;
  brands: BrandDto[];
};
