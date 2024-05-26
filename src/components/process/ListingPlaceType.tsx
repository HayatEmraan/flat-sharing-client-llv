import { userAppStore } from "@/utils/zustand/zstore";
import House from "@/svg/listingTypes/house";
import SharedRoom from "@/svg/listingTypes/shared-room";
import React from "react";

const data = [
  {
    title: "Sale",
    subTitle: "Guests have the whole place to themselves.",
    svg: <House />,
  },
  {
    title: "Rent",
    subTitle:
      "Guests sleep in a room or common area that may be shared with you or others.",
    svg: <SharedRoom />,
  },
];

const ListingPlaceType = () => {
  const { placeType, setPlaceType } = userAppStore();
  return (
    <div className="flex items-center justify-center flex-col h-full gap-10">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <ul className="flex flex-col gap-5 w-[800px]">
        {data.map((place) => (
          <li
            key={place.title}
            className={`flex border border-gray-300 p-7 justify-between rounded-lg hover:border-gray-500 cursor-pointer ${
              place.title === placeType?.title && "border-gray-950 bg-slate-100"
            }`}
            onClick={() => setPlaceType(place)}>
            <div>
              <h4 className="font-semibold">For {place.title}</h4>
              <p>{place.subTitle}</p>
            </div>
            {place.svg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingPlaceType;
