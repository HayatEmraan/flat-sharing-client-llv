import { getSingleFlat } from "@/actions/aflats/flatactions";
import RoomDetails from "@/components/ui/single-property/singlepropertypage";

const Page = async ({ params }: { params: { slug: string } }) => {
  const flat = await getSingleFlat(params.slug);
  return (
    <div className="mt-24">
      <RoomDetails flat={flat} />
    </div>
  );
};

export default Page;
