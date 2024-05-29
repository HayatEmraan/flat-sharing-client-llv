
import SingleProductCardFullWidth from "./singleproductcardfullwidth";
import { TFlat } from "@/interface/tflat/tflat";
const PropertyFullWidth = ({ flat }: { flat: TFlat[] }) => {
  return (
    <div>
      {flat?.map((property) => (
        <SingleProductCardFullWidth key={property?.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyFullWidth;
