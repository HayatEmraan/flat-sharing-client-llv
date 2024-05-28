"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, ReactNode, useContext, useState } from "react";
import { flatvue } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TContext = {
  expanded: boolean;
  path: string;
};

type TContextProps = TContext | undefined;

type ISideBar = {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  path: string;
};

const SidebarContext = createContext<TContextProps>(undefined);

export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const path = usePathname();
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              alt="logo"
              src={flatvue.logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded, path }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            {/* <img src={profile} className="w-10 h-10 rounded-md" /> */}
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}>
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">
                  constgenius@gmail.com
                </span>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, path }: ISideBar) {
  const contextValue = useContext(SidebarContext);
  const value = contextValue?.expanded;
  const currentPath = contextValue?.path?.toLowerCase();
  const comparePath = currentPath === path;

  return (
    <Link
      href={path}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        comparePath
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}>
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          value ? "w-52 ml-3" : "w-0"
        }`}>
        {text}
      </span>
      {comparePath && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            value ? "" : "top-2"
          }`}></div>
      )}

      {!value && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </Link>
  );
}
