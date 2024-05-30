import { getFlats, getFlatStats } from "@/actions/aflats/flatactions";
import PropertyPage from "@/components/ui/property/propertypage";

const Page = async () => {
  const response = await getFlats();
  const flatStats = await getFlatStats();

  return (
    <div className="mt-12">
      <PropertyPage flat={response} stats={flatStats} />
    </div>
  );
};

export default Page;
