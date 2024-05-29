import { getFlats, getFlatStats } from "@/actions/aflats/flatactions";
import PropertyPage from "@/components/ui/property/propertypage";
import { TSearchParams } from "@/interface/tsearch/tsearch";
import { queryBuilder, searchQuery } from "@/utils/searchQuery/searchQuery";

const Page = async ({ searchParams }: TSearchParams) => {
  let query: string = await queryBuilder(searchParams);
  const response = await getFlats(query);
  const flatStats = await getFlatStats();

  return (
    <div>
      <PropertyPage
        flat={response}
        radio={searchParams?.category}
        stats={flatStats}
      />
    </div>
  );
};

export default Page;
