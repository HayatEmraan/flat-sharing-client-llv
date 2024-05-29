import { property } from "@/data/dummyData";
import SingleProductCard from "./singlecard";
import { TFlat } from "@/interface/tflat/tflat";

const Featured = ({ flat }: { flat: TFlat[] }) => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <h1 className="heading">explore featured latest properties</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {flat?.slice(0, 3).map((featured: TFlat) => (
          <SingleProductCard key={featured?.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
