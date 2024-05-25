
import { useAppSelector } from "@/redux/hooks";
import SingleProductCardFullWidth from "./singleproductcardfullwidth";
const PropertyFullWidth = () => {
  const { currentDataItems } = useAppSelector((state) => state.dataStore);
  return (
    <div>
      {currentDataItems?.map((property) => (
        <SingleProductCardFullWidth key={property.id} {...property} />
      ))}
    </div>
  );
};

export default PropertyFullWidth;
