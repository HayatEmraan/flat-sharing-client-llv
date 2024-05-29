import Link from "next/link";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import CardHoverIcons from "../cardhovericons";
import CardLabels from "../cardlabels";
import { TFlat } from "@/interface/tflat/tflat";

const SingleProductCardFullWidth = (flatInfo: TFlat) => {
  return (
    <div className="relative grid grid-cols-1 gap-3 mt-3 overflow-hidden border rounded-lg shadow-light sm:grid-cols-3 md:grid-cols-4 dark:border-card-dark group">
      <div className="sm:col-span-1">
        <div className="group !opacity-100 overflow-hidden relative h-full">
          <Link
            href={`/property/details/${flatInfo?.id}`}
            className="!opacity-100">
            <img
              src={flatInfo?.images[0]}
              alt={flatInfo?.name}
              className="object-cover w-full h-full group-hover:scale-125 transition-a"
            />
          </Link>
          <CardHoverIcons />
        </div>
        {
          <CardLabels
            purpose={flatInfo?.purpose}
            distance={flatInfo?.landmark}
          />
        }
      </div>
      <div className="sm:col-span-2 md:col-span-3">
        <div className="p-3">
          <Link
            href={`/property/details/${flatInfo?.id}`}
            className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">{flatInfo?.name}</h1>
          </Link>

          <div className="mt-2 flex-align-center gap-x-2">
            <BiMap />
            <p>{flatInfo?.location}</p>
          </div>
          <p className="mt-2">{`${flatInfo?.briefDescription?.slice(
            0,
            180
          )}...`}</p>
          <div className="flex justify-between mt-3">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiBed />
              </div>
              <p className="text-sm">{flatInfo?.numberOfBedrooms} Beds</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiTab />
              </div>
              <p className="text-sm">{flatInfo?.numberOfBathrooms} Bathrooms</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiMapAlt />
              </div>
              <p className="text-sm">{flatInfo?.area} sqft</p>
            </div>
          </div>

          <div className="mt-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">
              ${flatInfo?.price}
            </h1>
            <Link
              href={`/property/details/${flatInfo?.id}`}
              className="btn btn-secondary">
              details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardFullWidth;
