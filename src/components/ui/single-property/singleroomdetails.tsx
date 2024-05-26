"use client";
import React from "react";
import ReserveNow from "./reservenow";
import { TFlat } from "@/interface";

const SingleRoomDetails = ({ data }: { data: TFlat }) => {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-2 lg:flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl mb-2">{data?.name} hosted by</h2>
            <div>
              <span>
                {data?.numberOfBathrooms} Bathrooms, {data?.numberOfBedrooms}{" "}
                Beds
              </span>
            </div>
          </div>
        </div>
        <hr className="mb-3" />
        <div>
          <p>{data?.briefDescription}</p>
        </div>
      </div>
      <ReserveNow amount={data?.price} />
    </div>
  );
};

export default SingleRoomDetails;
