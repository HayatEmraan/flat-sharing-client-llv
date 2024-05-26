import Price from "@/components/process/price";
import { listingTypes } from "@/data/ListingTypes";
import { PriceRange } from "@/data/priceRange";

const AdvancedSearch = () => {
  return (
    <div className="p-3 border dark:border-dark">
      <h1 className="font-semibold">Advanced Search</h1>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">Categories</option>
          {listingTypes.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">Price Range</option>
          {PriceRange.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">Purpose</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>
      </div>
      <div className="gap-2 mt-3 flex-align-center">
        <select name="" id="" className="filter">
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">Above 4</option>
        </select>
        <select name="" id="" className="filter">
          <option value="">Beds</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <button className="btn bg-secondary w-full mt-4 text-slate-200 !rounded-none">
        search property
      </button>
    </div>
  );
};

export default AdvancedSearch;
