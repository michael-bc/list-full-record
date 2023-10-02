import type {Location} from "../domain/Location";
import type {LocationDto} from "./LocationDto";

export const  locationFromDto = (input: LocationDto): Location => {
  return {
    id: input.id,
    city: input.city,
    createdAt: new Date(input.createdAt),
    updatedAt: new Date(input.updatedAt),
  }
};