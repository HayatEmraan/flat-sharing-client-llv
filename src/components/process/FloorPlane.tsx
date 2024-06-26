import { PlaceSpace } from "@/utils/zustand/types/ztypes";
import { userAppStore } from "@/utils/zustand/zstore";
import React from "react";

export default function FloorPlan() {
  const { placeSpace, setPlaceSpace } = userAppStore();
  const handleIncrement = (type: string) => {
    setPlaceSpace({
      ...placeSpace,
      [type]: placeSpace[type as keyof PlaceSpace] + 1,
    });
  };

  const handleDecrement = (type: string) => {
    const typeOfPlace = placeSpace[type as keyof PlaceSpace];
    if (typeOfPlace > 1) {
      setPlaceSpace({ ...placeSpace, [type]: typeOfPlace - 1 });
    }
  };

  return (
    <div className="flex items-center justify-center h-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Share some basics about your place
        </h2>
        <p className="text-center">
          You&apos;ll add more details later, such as bed types.
        </p>
      </div>
      <div className="flex  flex-col w-[40%] gap-5">
        {Object?.keys(placeSpace)?.map((place) => (
          <div
            className="flex justify-between w-full text-lg items-center"
            key={place}>
            <span className="capitalize ">{place}</span>
            <div className="flex gap-10 items-center justify-between w-48">
              <button
                className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
                onClick={() => handleDecrement(place)}>
                -
              </button>
              <span className="min-w-[20px]">{placeSpace[place]}</span>
              <button
                className="border border-gray-200 py-[10px] rounded-full px-[18px] flex items-center justify-center hover:border-gray-500"
                onClick={() => handleIncrement(place)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
