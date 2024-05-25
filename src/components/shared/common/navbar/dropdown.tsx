"use client";

import { NavLink } from "@/interface";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Dropdown = () => {
  const { currentLink, isDropdownOpen, position } = useAppSelector(
    (state) => state.ui
  );
  const { subLinks } = currentLink as NavLink;
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dropdown = container.current;
    if (dropdown) {
      dropdown.style.left = `${position}px`;
    }
  }, [position]);

  return (
    <>
      {currentLink && (
        <div
          className={`dropdown hidden  z-50 transition-a fixed top-14 left-1/2 -translate-x-1/2 !rounded-xl w-40 bg-white dark:bg-dark-light card-shadow dark:shadow-none ${
            isDropdownOpen && subLinks && "show before:w-4 before:h-4"
          }`}
          ref={container}>
          <div className={`${subLinks && "p-2"}`}>
            {subLinks?.map(({ id, linkText, url }) => (
              <Link
                key={id}
                href={url}
                className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark before:!hidden">
                {linkText}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
