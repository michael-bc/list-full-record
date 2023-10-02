import {CriterionRepo} from "./CriterionRepo";
import {criterionContext} from "../infrastructure/context";
import {BrandFilter} from "./BrandFilter";
import {Criterion} from "./Criterion";

export class CriterionService {
  private criteriaRepo: CriterionRepo;

  constructor() {
    this.criteriaRepo = criterionContext.get<CriterionRepo>("CriterionRepo");
  }

  async getCriteria(filter?: BrandFilter): Promise<Criterion[]> {
    return this.criteriaRepo.getCriteria(filter);
  }
}