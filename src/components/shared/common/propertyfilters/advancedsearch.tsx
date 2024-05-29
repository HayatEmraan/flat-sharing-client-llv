import { routeRedirect } from "@/actions/redirect/redirect";
import Price from "@/components/process/price";
import { listingTypes } from "@/data/ListingTypes";
import { PriceRange } from "@/data/priceRange";
import { queryBuilder } from "@/utils/searchQuery/searchQuery";
import { useState } from "react";

const AdvancedSearch = () => {
  const [onChange, setOnChange] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object?.fromEntries(formData?.entries());
    let query: string = await queryBuilder(formValues);
    await routeRedirect("/property/query", query);
  };

  return (
    <div className="p-3 border dark:border-dark">
      <h1 className="font-semibold">Advanced Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <select
            name="category"
            id=""
            className="filter"
            onChange={() => setOnChange(true)}>
            <option value="" selected disabled>
              Categories
            </option>
            {listingTypes?.map((type) => (
              <option key={type?.name} value={type?.name}>
                {type?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3">
          <select
            name="price"
            id=""
            className="filter"
            onChange={() => setOnChange(true)}>
            <option value="" selected disabled>
              Price Range
            </option>
            {PriceRange?.map((type) => (
              <option key={type?.name} value={type?.value}>
                {type?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3">
          <select
            name="purpose"
            id=""
            className="filter"
            onChange={() => setOnChange(true)}>
            <option value="" selected disabled>
              Purpose
            </option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div className="gap-2 mt-3 flex-align-center">
          <select
            name="bathrooms"
            id=""
            className="filter"
            onChange={() => setOnChange(true)}>
            <option value="" selected disabled>
              Bathrooms
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <select
            name="beds"
            id=""
            className="filter"
            onChange={() => setOnChange(true)}>
            <option value="" selected disabled>
              Beds
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button
          type="submit"
          className={`btn bg-secondary ${
            !onChange && "!cursor-not-allowed bg-slate-500 "
          } w-full mt-4 text-slate-200 !rounded-md`}>
          search property
        </button>
      </form>
    </div>
  );
};

export default AdvancedSearch;
