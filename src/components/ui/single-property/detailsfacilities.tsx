import { TFlat } from "@/interface";
import Image from "next/image";

import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const DetailsFacilities = ({ data }: { data: TFlat }) => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.amenities?.map((singleAmenity, index) => {
          return (
            <div className="" key={index}>
              <h2 className="font-bold flex items-center">
                <Image
                  src={singleAmenity?.image}
                  width={20}
                  alt={singleAmenity?.name}
                  height={20}
                  className="mr-2"></Image>
                {singleAmenity?.name}
              </h2>
              <ul>
                {singleAmenity?.facilities?.map((facility, index) => (
                  <li key={index} className="flex items-center">
                    <AiOutlineCheck className="text-green-500 mr-2" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="text-end my-5">
        <small>
          Missing Some Information?
          <span className="mx-2 text-blue-400 font-bold">Yes</span>/
          <span className="mx-2 text-blue-400 font-bold">No</span>
        </small>
      </div>
    </div>
  );
};

export default DetailsFacilities;
