import {Context, createContext} from "../../infrastructure/context";
import {CriterionRepoImpl} from "../api/CriterionRepoImpl";
import {CriterionService} from "../domain/CriterieonService";

export let criterionContext: Context;

export function initBrandContext() {
  criterionContext = createContext("auth");
  criterionContext.registry(CriterionRepoImpl, "CriterionRepo");
  criterionContext.registry(CriterionService, "CriterionService");
}

