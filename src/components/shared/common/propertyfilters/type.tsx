import { propertyTypes } from "@/data/dummyData";
import { TStats } from "@/interface";

const Type = ({ stats }: { stats: TStats[] }) => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Property Type</h1>
      {stats.map(({ _count, category }) => (
        <div key={category} className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input type="radio" name="type" id={category} />
            <label htmlFor={category} className="capitalize">
              {category}
            </label>
          </div>
          <p>({_count.category})</p>
        </div>
      ))}
    </div>
  );
};

export default Type;
