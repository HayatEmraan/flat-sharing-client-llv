"use client";

import { openDropdown } from "@/redux/features/uislice";
import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Avatar from "./avatar";

const ProfileIndicator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkText = "Profile";
  const dispatch = useDispatch();
  const handleDropDown = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const linkCords = target.getBoundingClientRect();
    const center = (linkCords.left + linkCords.right) / 2;
    dispatch(openDropdown({ link: linkText, center }));
  };
  return (
    <div
      className="relative w-full cursor-pointer  py-[0.6rem] lg:px-4 flex-align-center gap-x-1 link"
      onClick={handleDropDown}>
      <span className="px-2 py-1.5 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
        <AiOutlineMenu />
        <Avatar />
      </span>
    </div>
  );
};

export default ProfileIndicator;
