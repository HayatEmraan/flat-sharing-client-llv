"use client";

import Availability from "@/components/process/availability";
import Description from "@/components/process/description";
import FloorPlan from "@/components/process/FloorPlane";
import ListingCreated from "@/components/process/listingCreated";
import ListingPlaceType from "@/components/process/ListingPlaceType";
import ListingTypeSelector from "@/components/process/ListingTypeSelector";
import Overview from "@/components/process/Overview";
import Photos from "@/components/process/Photos";
import PlaceDetails from "@/components/process/PlaceDetails";
import Price from "@/components/process/price";
import ProcessAmeneties from "@/components/process/ProcessAmeneties";
import StepOneStarter from "@/components/process/StepOneStarter";
import Title from "@/components/process/title";
import { userAppStore } from "@/utils/zustand/zstore";
import Link from "next/link";
import { useState } from "react";

import { Libre_Bodoni } from "next/font/google";

// google fonts
const bodoni = Libre_Bodoni({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Page = () => {
  const [step, setStep] = useState(6);
  const {
    locationType,
    placeType,
    locationData,
    addressInfo,
    placeSpace,
    searchPlaceSpace,
    placeAmenities,
    title,
    description,
    price,
    taxes,
    photos,
  } = userAppStore();

  const finalListing = {
    name: title,
    location: addressInfo?.location,
    category: locationType?.name,
    purpose: placeType?.title,
    numberOfBedrooms: placeSpace?.beds,
    numberOfBathrooms: placeSpace?.bathrooms,
    images: photos,
    briefDescription: description,
    price: price,
    taxes: taxes,
    amenities: placeAmenities,
  };

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />;
      case 2:
        return <ListingTypeSelector />;
      case 3:
        return <ListingPlaceType />;
      case 4:
        return <PlaceDetails />;
      case 5:
        return <FloorPlan />;
      case 6:
        return <Availability />;
      case 7:
        return <ProcessAmeneties />;
      case 8:
        return <Title />;
      case 9:
        return <Description />;
      case 10:
        return <Price />;
      case 11:
        return <Photos />;
      case 12:
        return <ListingCreated />;
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleListing = async () => {
    console.log(finalListing);
  };

  return (
    <div className="grid grid-rows-new-listing h-[100vh]">
      <header className="flex py-14 px-20 justify-between">
        <div className="cursor-pointer">
          <Link
            href="/"
            className={`flex-none text-2xl font-bold dark:text-white ${bodoni.className} bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent`}
            aria-label="Brand">
            {"{ Flatvue }"}
          </Link>
        </div>
      </header>

      <div className="h-[75vh]">{getComponent()}</div>

      <footer
        className={`flex !bg-white  items-center ${
          step === 12 ? "hidden" : ""
        } px-20 pb-4 border-t-4 border-t-gray-300  ${
          step > 0 ? "justify-between" : "justify-end"
        }`}>
        {step >= 1 && (
          <button
            onClick={handlePrevious}
            className="text-dwelling-light-gray py-3 mt-5 px-10 text-base font-medium hover:bg-gray-200 underline rounded-md cursor-pointer">
            Back
          </button>
        )}
        {step !== 0 ? (
          <button
            onClick={step === 11 ? handleListing : handleNext}
            disabled={
              step === 2 && locationType === undefined
                ? true
                : false || (step === 3 && placeType === undefined)
                ? true
                : false || (step === 5 && placeSpace === undefined)
                ? true
                : false || (step === 4 && locationData === undefined)
                ? true
                : false || (step === 6 && searchPlaceSpace?.area === 0)
                ? true
                : false || (step === 7 && placeAmenities.length === 0)
                ? true
                : false || (step === 8 && title.length <= 10)
                ? true
                : false || (step === 9 && description.length <= 50)
                ? true
                : false || (step === 10 && price <= 0)
                ? true
                : false || (step === 11 && photos.length <= 4)
                ? true
                : false
            }
            className="bg-[#222222] py-3 mt-5 px-5 text-base font-medium text-white rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            {step === 11 ? "Submit" : "Next"}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-600 py-3 mt-5 px-5 text-base font-medium text-white rounded-md cursor-pointer">
            Get Started
          </button>
        )}
      </footer>
    </div>
  );
};

export default Page;
