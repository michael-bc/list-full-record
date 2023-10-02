import type {CriterionDto} from "./CriterionDto";
import type {Criterion} from "../domain/Criterion";

import {categoryFromDto} from "./categoryMapper";
import {locationFromDto} from "./locationMapper";
import {brandFromDto} from "./brandMapper";

export const criterionFromDto = (input: CriterionDto): Criterion => {
  return {
    category: categoryFromDto(input.category),
    location: locationFromDto(input.location),
    brands: input.brands ? input.brands.map(brandFromDto) : [],
  }
};