import { useAppSelector } from "@/redux/hooks";
import SingleProductCard from "../singlecard";

const PropertyList = ({ basis }) => {
  const { currentDataItems } = useAppSelector((state) => state.dataStore);
  return (
    <div className="flex flex-wrap gap-4">
      {currentDataItems?.map((property) => (
        <SingleProductCard key={property.id} {...property} basis={basis} />
      ))}
    </div>
  );
};

export default PropertyList;
