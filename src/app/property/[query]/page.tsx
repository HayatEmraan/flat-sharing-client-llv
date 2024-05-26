import { getFlats, getFlatStats } from "@/actions/aflats/flatactions";
import PropertyPage from "@/components/ui/property/propertypage";
import { searchQuery } from "@/utils/searchQuery/searchQuery";

type TSearchParams = {
  [key: string]: any;
};

const Page = async ({ searchParams }: TSearchParams) => {
  let query: string = "";
  Object.keys(searchParams).map((search) => {
    if (searchQuery.includes(search)) {
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

  const response = await getFlats(query);
  const flatStats = await getFlatStats();
  return (
    <div>
      <PropertyPage flat={response} stats={flatStats} />
    </div>
  );
};

export default Page;
