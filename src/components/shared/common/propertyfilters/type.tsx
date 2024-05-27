import { TStats } from "@/interface";
import Link from "next/link";

const Type = ({
  stats,
  activeRadio,
}: {
  stats: TStats[];
  activeRadio?: string;
}) => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Property Type</h1>
      {stats?.map(({ _count, category }) => (
        <Link
          href={`/property/query?category=${category}`}
          key={category}
          className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input
              checked={activeRadio?.toLowerCase() === category?.toLowerCase()}
              type="radio"
              name="type"
              id={category}
            />
            <label htmlFor={category} className="capitalize">
              {category}
            </label>
          </div>
          <p>({_count.category})</p>
        </Link>
      ))}
    </div>
  );
};

export default Type;
