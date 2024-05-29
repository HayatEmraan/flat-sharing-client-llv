import SingleProductCard from "../singlecard";
import { TFlat } from "@/interface/tflat/tflat";

const PropertyList = ({ flat }: { flat: TFlat[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {flat?.map((property) => (
        <SingleProductCard key={property?.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyList;
