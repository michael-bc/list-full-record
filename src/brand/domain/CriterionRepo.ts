import {BrandFilter} from "./BrandFilter";
import {Criterion} from "./Criterion";

export interface CriterionRepo {
  getCriteria(filter?: BrandFilter): Promise<Criterion[]>;
}