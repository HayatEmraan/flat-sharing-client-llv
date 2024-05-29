import { searchPlaceSpace } from "@/utils/zustand/types/ztypes";
import { userAppStore } from "@/utils/zustand/zstore";
import React from "react";

export default function Availability() {
  const { searchPlaceSpace, setSearchPlaceSpace } = userAppStore();

  const handleIncrement = (type: string) => {
    setSearchPlaceSpace({
      ...searchPlaceSpace,
      [type]: searchPlaceSpace[type as keyof searchPlaceSpace] + 1,
    });
  };

  const handleDecrement = (type: string) => {
    const typeOfSearch = searchPlaceSpace[type as keyof searchPlaceSpace];
    if (typeOfSearch > 1) {
      setSearchPlaceSpace({
        ...searchPlaceSpace,
        [type]: typeOfSearch - 1,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Share your place area (sq ft)
        </h2>
        <p className="text-center">
          You&apos;ll add more details later, such as place space.
        </p>
      </div>
      <ul className="flex  flex-col w-[40%] gap-5">
        {Object?.keys(searchPlaceSpace)?.map((place) => (
          <li
            className="flex justify-between w-full text-lg items-center"
            key={place}>
            <span className="capitalize ">{place}</span>
            <div className="flex gap-3 items-center justify-between w-48">
              <button
                className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
                onClick={() => handleDecrement(place)}>
                -
              </button>
              <span className="min-w-[20px]">{searchPlaceSpace[place]}</span>
              <button
                className="border border-gray-200 py-[10px] rounded-full px-[18px] flex items-center justify-center hover:border-gray-500"
                onClick={() => handleIncrement(place)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
