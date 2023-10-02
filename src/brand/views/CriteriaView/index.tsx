import React, {useEffect, useState} from 'react';
import { Accordion } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import {criterionContext} from "../../infrastructure/context";
import {CriterionService} from "../../domain/CriterieonService";
import BrandCard from "./BrandCard";
import type {Criterion} from "../../domain/Criterion";
import AppPageHeader from "../../../common/components/AppPageHeader";
import AppSearch from "../../../common/components/AppSearch";

export default function() {
  const criteriaService = criterionContext.get<CriterionService>("CriterionService");

  const [search, setSearch] = useState("");
  const [isFirstLoading,setFirstLoading] = useState(true);
  const [isSearchLoading,setSearchLoading] = useState(false);
  const [criteria, setCriteria] = useState([] as Criterion[]);

  const getCriteria = async () => {
    try {
      const response = await criteriaService.getCriteria({ search });
      setCriteria(response);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    } catch (err: any) {
      console.log(err);
    } finally {
      setFirstLoading(false);
    }
  }

  const onSearch = async () => {
    setSearchLoading(true);
    await getCriteria();
    setSearchLoading(false);
  }

  useEffect(() => {
    getCriteria();
  }, []);

  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <AppPageHeader title={"Set your criteria"} />
      <div className="md:w-full lg:w-80">
        <AppSearch
          search={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={onSearch}
          isLoading={isSearchLoading}
        />
      </div>
      {isFirstLoading ? (
        <div className="h-full">
          <Spinner className="absolute top-1/2 left-1/2" size="xl" />
        </div>
      ) : (
        <Accordion>
          {criteria.map((criterion, index) => (
            <Accordion.Panel key={`${criterion.category.id}-${criterion.location.id}`}>
              <Accordion.Title>
                {index + 1}. Top {criterion.category.name} brands in {criterion.location.city}
              </Accordion.Title>
              <Accordion.Content>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {criterion.brands.map((brand) => (
                    <BrandCard
                      key={brand.id}
                      name={brand.name}
                      image={brand.image?.url}
                      productCount={brand.productsCount}
                      averageRating={brand.averageRating}
                    />
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
    </div>
  );
}
