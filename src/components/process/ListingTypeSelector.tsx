import { listingTypes } from "@/data/ListingTypes";
import { userAppStore } from "@/utils/zustand/zstore";
import React from "react";

const ListingTypeSelector = () => {
  const { locationType, setLocationType } = userAppStore();
  return (
    <div className="flex items-center justify-center max-h-[80vh] h-[80vh]">
      <div>
        <h2 className="font-semibold text-4xl">
          Which of these best describes your place ?
        </h2>
        <div className="grid grid-cols-3 gap-5 my-10 pb-5 max-h-[70vh] overflow-auto scroll no-scrollbar">
          {listingTypes?.map((type) => (
            <button
              onClick={() => setLocationType(type)}
              key={type?.name}
              className={`${
                type?.name === locationType?.name &&
                "border-gray-950 bg-slate-100"
              } flex flex-col font-semibold rounded-md border border-gray-300 p-3 hover:border-gray-950 transition-all duration-300`}>
              {type?.svgPath} <span>{type?.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingTypeSelector;
