import { AmenetiesType } from "@/data/Ameneties";
import { placeAmenities } from "@/utils/zustand/types/ztypes";
import { userAppStore } from "@/utils/zustand/zstore";
import React from "react";

export default function ProcessAmeneties() {
  const { placeAmenities, setPlaceAmenities } = userAppStore();
  const addAmenity = (facility: placeAmenities) => {
    setPlaceAmenities([...placeAmenities, facility]);
  };
  const removeAmenity = (facility: placeAmenities) => {
    const index = placeAmenities.findIndex(
      (amenity) => amenity?.name === facility?.name
    );
    if (index) {
      const clonedAmenities = [...placeAmenities];
      clonedAmenities.splice(index, 1);
      setPlaceAmenities(clonedAmenities);
    } else {
      const clonedAmenities = [...placeAmenities];
      clonedAmenities.splice(0, 1);
      setPlaceAmenities(clonedAmenities);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Tell guests what your place has to offer
        </h2>
        <p>Your most popular amenities, etc.</p>
        <div className="flex flex-col gap-5 max-h-[65vh] overflow-auto scroll no-scrollbar">
          {AmenetiesType.map(({ type, data }) => (
            <div key={type} className="flex flex-col gap-5">
              {type === "advanced" && (
                <span className="text-lg font-medium">
                  Do you have any standout amenities?
                </span>
              )}
              <div className="grid grid-cols-3 gap-5">
                {data.map((facility, index) => (
                  <button
                    key={index}
                    className={` flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300 ${
                      placeAmenities?.find(
                        (amenity) => amenity?.name === facility?.name
                      ) && "!border-gray-950 bg-gray-100"
                    }`}
                    onClick={() => {
                      placeAmenities?.find(
                        (amenity) => amenity?.name === facility?.name
                      )
                        ? removeAmenity(facility)
                        : addAmenity(facility);
                    }}>
                    {facility?.image && (
                      <img
                        src={facility?.image}
                        alt={facility?.name}
                        className="h-7"
                      />
                    )}
                    <span className="text-airbnb-light-black font-medium">
                      {facility?.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
