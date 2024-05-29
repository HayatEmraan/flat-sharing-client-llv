import { getFlats, getFlatStats } from "@/actions/aflats/flatactions";
import PropertyPage from "@/components/ui/property/propertypage";
import { Suspense } from "react";

const Page = async () => {
  const response = await getFlats();
  const flatStats = await getFlatStats();

  return (
    <Suspense>
      <div className="mt-12">
        <PropertyPage flat={response} stats={flatStats} />
      </div>
    </Suspense>
  );
};

export default Page;
