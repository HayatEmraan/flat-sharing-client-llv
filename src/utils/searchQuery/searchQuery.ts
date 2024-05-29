import { TSearchQuery } from "@/interface/tsearch/tsearch";

export const searchQuery = [
  "price",
  "category",
  "purpose",
  "beds",
  "bathrooms",
  "name",
  "location",
  "startPrice",
  "endPrice",
];

export const queryBuilder = async (searchParams: TSearchQuery) => {
  let query: string = "";
  Object.keys(searchParams).map((search) => {
    if (searchQuery.includes(search) && searchParams[search]) {
      if (search === "price") {
        const [startPrice, endPrice] = searchParams[search].split("-");
        const logQuery = query ? "&" : "?";
        query += `${logQuery}startPrice=${startPrice}&endPrice=${endPrice}`;
      } else {
        const logQuery = query ? "&" : "?";
        const value = searchParams[search];
        query += `${logQuery}${search}=${value}`;
      }
    }
  });
  return query;
};
