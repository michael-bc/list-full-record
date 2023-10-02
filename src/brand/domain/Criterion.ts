import {Category} from "./Category";
import {Location} from "./Location";
import {Brand} from "./Brand";

export type Criterion = {
  category: Category;
  location: Location;
  brands: Brand[];
};
