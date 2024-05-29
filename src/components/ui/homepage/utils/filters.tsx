import { routeRedirect } from "@/actions/redirect/redirect";
import { PriceRange } from "@/data/priceRange";
import { queryBuilder } from "@/utils/searchQuery/searchQuery";
import { useState } from "react";
import { BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const Filters = () => {
  const [onChange, setOnChange] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    let query: string = await queryBuilder(formValues);
    await routeRedirect("/property/query", query);
  };
  return (
    <div className="md:max-w-[90%] lg:max-w-[70%] w-full mx-auto relative -mt-8 sm:-mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Location</h1>
            <div className="flex-align-center gap-x-2">
              <BiMap />
              <input
                type="text"
                name="location"
                onChange={() => setOnChange(true)}
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter location of the property"
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold whitespace-nowrap">Number of Bedrooms</h1>
            <div className="flex-align-center gap-x-2">
              <BiBuildings />
              <select
                name="beds"
                id=""
                onChange={() => setOnChange(true)}
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70">
                <option value="1">1</option>
                <option selected value="2">
                  2
                </option>
                <option value="2">3</option>
                <option value="2">4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Price range</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                name="price"
                id=""
                onChange={() => setOnChange(true)}
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70">
                {PriceRange?.map((type) => (
                  <option key={type.name} value={type.value}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Purpose of</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                name="purpose"
                id=""
                onChange={() => setOnChange(true)}
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70">
                <option selected value="Sale">
                  Sale
                </option>
                <option value="Rent">Rent</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full btn btn-primary md:w-fit ${
            !onChange && "!cursor-not-allowed !bg-slate-500 "
          }`}>
          search
        </button>
      </form>
    </div>
  );
};

export default Filters;
