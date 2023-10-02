import type {BrandDto} from "./BrandDto";
import type {Brand} from "../domain/Brand";

import {locationFromDto} from "./locationMapper";

export const brandFromDto = (input: BrandDto): Brand => {
  return  {
    id: input.id,
    name: input.name,
    image: input.image,
    location: locationFromDto(input.location),
    productsCount: input.productsCount,
    averageRating: input.averageRating,
    createdAt: new Date(input.createdAt),
    updatedAt: new Date(input.updatedAt),
  }
}