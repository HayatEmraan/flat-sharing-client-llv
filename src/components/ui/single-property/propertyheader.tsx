import { TFlat } from "@/interface";
import React from "react";
import {
  AiFillEnvironment,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";

const Header = ({ data }: { data: TFlat }) => {
  return (
    <header className="my-5">
      <h2 className="font-bold text-2xl">{data?.name}</h2>
      <div className="lg:flex justify-between">
        <div className="lg:flex lg:space-x-5">
          <p className="font-bold flex items-center">
            <AiOutlineStar className="text-orange-300 mr-2" />
          </p>
          <div className="flex items-center">
            <AiFillEnvironment className="mr-2" />
            Super Host -
            <small className="underline font-bold ms-1">{data?.location}</small>
          </div>
        </div>
        <div className="flex space-x-5">
          <p className="flex items-center">
            <AiOutlineShareAlt className="mr-2" />
            Share
          </p>
          <p className="flex items-center">
            <AiOutlineHeart className="mr-2" />
            Save
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
