import type {Image} from "../../common/domain/image";
import type {LocationDto} from "./LocationDto";

export type BrandDto = {
  id: number;
  name: string;
  image?: Image;
  location: LocationDto;
  productsCount: number;
  averageRating: number;
  createdAt: string;
  updatedAt: string;
}