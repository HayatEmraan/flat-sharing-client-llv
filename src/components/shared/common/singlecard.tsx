import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import Link from "next/link";
import CardHoverIcons from "./cardhovericons";
import CardLabels from "./cardlabels";
import { TFlat } from "@/interface/tflat/tflat";

const SingleProductCard = (flatInfo: TFlat) => {
  return (
    <div
      className={`flex-1 basis-[18rem]
      shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}>
      <div className="group !opacity-100 overflow-hidden relative">
        <Link
          href={`/property/details/${flatInfo.id}`}
          className="!opacity-100">
          <img
            src={flatInfo?.images[0]}
            alt={flatInfo?.name}
            className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
        <CardHoverIcons />
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{flatInfo?.location}</p>
          </div>
        </div>
      </div>
      <CardLabels purpose={flatInfo?.purpose} distance={flatInfo?.landmark} />
      <div className="p-3">
        <Link
          href={`/property/details/${flatInfo.id}`}
          className="group-hover:text-primary transition-a">
          <h1 className="text-lg font-bold capitalize">{flatInfo?.name}</h1>
        </Link>
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
          <a
            href={`/property/details/${flatInfo.id}`}
            className="btn btn-secondary">
            details
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
