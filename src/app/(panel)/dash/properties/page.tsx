import { getFlats } from "@/actions/aflats/flatactions";
import Properties from "@/components/ui/dash/properties/Properties";

const Page = async () => {
  const response = await getFlats();
  return (
    <div>
      <Properties properties={response} />
    </div>
  );
};

export default Page;
