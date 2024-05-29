import { getFlats } from "@/actions/aflats/flatactions";
import HomeComp from "@/components/ui/homepage/homepage";

const Page = async () => {
  const flat = await getFlats();
  return (
    <div>
      <HomeComp flat={flat} />
    </div>
  );
};

export default Page;
