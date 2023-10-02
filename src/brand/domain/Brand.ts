import type {Image} from "../../common/domain/image";
import type {Location} from "./Location";

export type Brand = {
  id: number;
  name: string;
  image?: Image;
  location: Location;
  productsCount: number;
  averageRating: number;
  createdAt: Date;
  updatedAt: Date;
}