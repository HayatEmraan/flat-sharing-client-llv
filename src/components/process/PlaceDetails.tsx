import React from "react";
import { userAppStore } from "@/utils/zustand/zstore";
import FormInput from "../shared/common/FormInput";

export default function PlaceDetails() {
  const { locationData, setLocationData, addressInfo } = userAppStore();
  const handleChange = (name: string, value: string) => {
    setLocationData({ ...locationData, [name]: value });
  };
  return (
    <div className="flex justify-center items-center h-full flex-col gap-2 w-full">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">Confirm your address</h2>
        <p>
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-3 h-full overflow-auto no-scrollbar pb-20 pt-5">
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="location"
            placeholder="Street Address"
            setValue={handleChange}
            type="text"
            value={addressInfo?.displayName}
          />
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="landmark"
            placeholder="Nearby landmark (number only i.e 10, 40)"
            setValue={handleChange}
            type="number"
            value={locationData?.landmark}
          />
        </div>
      </div>
    </div>
  );
}
