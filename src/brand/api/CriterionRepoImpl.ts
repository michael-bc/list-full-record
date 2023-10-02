import {CriterionRepo} from "../domain/CriterionRepo";
import {BaseRepo} from "../../common/api/BaseRepo";

import type {BrandFilter} from "../domain/BrandFilter";
import type {Criterion} from "../domain/Criterion";
import type {CriterionDto} from "./CriterionDto";

import {brandFilterToRequest} from "./brandFilterMapper";
import {criterionFromDto} from "./criterionMapper";

const baseUrl = "/criteria"

export class CriterionRepoImpl extends BaseRepo implements CriterionRepo {
  async getCriteria(filter?: BrandFilter): Promise<Criterion[]> {
    const response = await this.inst.get<CriterionDto[]>(baseUrl, {
      params: brandFilterToRequest(filter),
    });
    return response.data ? response.data.map(criterionFromDto) : [];
  }
}