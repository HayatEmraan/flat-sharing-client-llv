"use client";

import { getCookie } from "@/actions/acookies/getcookie";
import { JWTAction } from "@/actions/ajwt/jwtaction";
import { NavForAuth, TNavAuth } from "@/constant/nav.link";
import { UserRole } from "@/constant/user.role";
import { IUserInfo, NavLink } from "@/interface";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const { currentLink, isDropdownOpen, position } = useAppSelector(
    (state) => state.ui
  );
  const { subLinks } = currentLink as NavLink;
  const container = useRef<HTMLDivElement | null>(null);

  const [userInfo, setUserInfo] = useState<IUserInfo>();

  useEffect(() => {
    const dropdown = container.current;
    if (dropdown) {
      dropdown.style.left = `${position}px`;
    }
  }, [position]);

  useEffect(() => {
    (async () => {
      const cookie = (await getCookie()) as string;
      if (cookie) {
        const user = await JWTAction();
        setUserInfo(user);
      }
    })();
  }, []);

  const navRole = userInfo?.role;

  const adminNav = navRole === UserRole.admin && NavForAuth.admin;
  const userNav = navRole === UserRole.user && NavForAuth.user;

  return (
    <>
      {currentLink && (
        <div
          className={`dropdown hidden  z-50 transition-a fixed top-14 left-1/2 -translate-x-1/2 !rounded-xl w-48 bg-white dark:bg-dark-light card-shadow dark:shadow-none ${
            isDropdownOpen && subLinks && "show before:w-4 before:h-4"
          }`}
          ref={container}>
          <div className={`${subLinks && "p-2"}`}>
            {userInfo ? (
              userInfo?.role === UserRole.admin ? (
                <>
                  {(adminNav as TNavAuth[])?.map(({ id, linkText, url }) => (
                    <Link
                      key={id}
                      href={url}
                      className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark before:!hidden">
                      {linkText}
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {(userNav as TNavAuth[])?.map(({ id, linkText, url }) => (
                    <Link
                      key={id}
                      href={url}
                      className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark before:!hidden">
                      {linkText}
                    </Link>
                  ))}
                </>
              )
            ) : (
              <>
                {subLinks?.map(({ id, linkText, url }) => (
                  <Link
                    key={id}
                    href={url}
                    className="p-2 space-x-3 rounded-lg flex-align-center sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark before:!hidden">
                    {linkText}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
