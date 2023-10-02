import {BrandFilter} from "../domain/BrandFilter";
import {BrandRequest} from "./BrandRequest";

export const brandFilterToRequest = (input?: BrandFilter): BrandRequest | undefined => {
  if (!input) {
    return undefined;
  }

  return {
    search: input.search,
  }
};