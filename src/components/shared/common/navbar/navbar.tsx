"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiSearch, BiMenu, BiUser, BiBuildingHouse } from "react-icons/bi";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/redux/hooks";
import {
  closeDropdown,
  closeSidebar,
  openSidebar,
} from "@/redux/features/uislice";
import { navLinks } from "@/data/navLinks";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SingleLink from "./singlelink";
import ProfileIndicator from "./profile/profileindicator";

import { flatvue } from "@/assets";
import Image from "next/image";

const Navbar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.ui);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    const target = e?.target as HTMLElement;
    if (!target?.classList?.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e: React.MouseEvent<HTMLElement>) => {
    const target = e?.target as HTMLElement;
    if (target?.classList?.contains("mobile-modal")) dispatch(closeSidebar());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <div
      className="navbar h-[60px] fixed w-full z-20 top-0 left-0 px-[2%]  md:px-[6%] flex-center-between py-[0.35rem] bg-white/60 border-b backdrop-blur-sm dark:border-dark dark:bg-card-dark/60"
      onMouseOver={handleClose}>
      <Link href="/" className="flex-shrink-0 flex-align-center gap-x-1">
        {/* <BiBuildingHouse className="text-3xl text-primary" />
        <h1 className="hidden md:block">MartVilla</h1> */}
        <Image width={170} src={flatvue?.logo} alt="logo" />
      </Link>

      <div className="flex-align-center gap-x-4">
        {/*-------------------------------------- Desktop Menu------------------------------------- */}
        <ul
          className={`hidden md:flex-align-center ${
            showSearchBar && "!hidden"
          }`}>
          {navLinks.map(
            (link) => !link.expand && <SingleLink {...link} key={link?.id} />
          )}
        </ul>

        {/*---------------------------------------- Mobile Menu------------------------------------- */}
        <div
          className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a  ${
            isSidebarOpen && "open"
          }`}
          onClick={handleCloseSidebar}>
          <ul
            className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4 p-3 bg-white dark:bg-card-dark h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
              isSidebarOpen && "open"
            }`}>
            <div className="border-b flex-center-between dark:border-slate-800">
              <p className="uppercase">menu</p>
              <div
                className="icon-box md:hidden"
                onClick={() => dispatch(closeSidebar())}>
                <FiDelete />
              </div>
            </div>
            {navLinks?.map(({ id, linkText, url, subLinks }) => (
              <ul key={id}>
                {url ? (
                  <Link
                    href={url}
                    className="w-fit before:!hidden"
                    onClick={() => dispatch(closeSidebar())}>
                    {linkText}
                  </Link>
                ) : (
                  <span
                    className="w-fit before:!hidden"
                    onClick={() => dispatch(closeSidebar())}>
                    {linkText}
                  </span>
                )}
                {subLinks?.map(({ id, linkText, url }) => (
                  <ul key={id} className="mt-2">
                    <Link
                      href={url}
                      className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                      onClick={() => dispatch(closeSidebar())}>
                      {linkText}
                    </Link>
                  </ul>
                ))}
              </ul>
            ))}
          </ul>
        </div>

        <div className="space-x-2 flex-align-center">
          {/*----------------------------- search Bar----------------------------------------------------- */}
          <form onSubmit={handleSubmit}>
            <div
              className={`flex-align-center relative h-9 w-9 transition-a  border-slate-300 dark:border-dark rounded-full ${
                showSearchBar &&
                "!w-[150px] md:!w-[200px] border bg-transparent text-inherit"
              }`}>
              <input
                type="search"
                className={`outline-none border-none h-0 w-0 bg-transparent ${
                  showSearchBar && "!w-full !h-full px-4"
                }`}
                placeholder="search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
              />
              <span
                className={`grid flex-shrink-0 rounded-full w-9 h-9 place-items-center text-white bg-primary sm:cursor-pointer ${
                  showSearchBar &&
                  "bg-transparent hover:bg-slate-100 text-inherit sm:cursor-pointer dark:hover:bg-hover-color-dark"
                }`}
                onClick={() => setShowSearchBar(!showSearchBar)}>
                <BiSearch className="text-muted" />
              </span>
            </div>
          </form>

          {/*----------------------------- Profile Icon-------------------------------------------------- */}
          <ProfileIndicator />
          {/*------------------------------- Mobile Menu Toogle------------------------- */}
          <div
            className="icon-box md:hidden"
            onClick={() => dispatch(openSidebar())}>
            <BiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
