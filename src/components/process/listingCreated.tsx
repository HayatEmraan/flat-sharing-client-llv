import { useRouter } from "next/navigation";
import React from "react";
import Confetti from "react-confetti";

export default function ListingCreated() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Congratulations!</h2>
        <p>You have successfully created your listing!</p>
        <div className="flex gap-5">
          <button
            className="bg-[#222222] py-3 mt-5  px-10 text-white text-base font-medium rounded-md cursor-pointer"
            onClick={() => router.push("/")}>
            Visit Home Page
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-300 py-3 mt-5  px-5 text-base font-medium rounded-md cursor-pointer text-white"
            onClick={() => router.push("/host/dashboard/properties")}>
            View your listings
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
}
