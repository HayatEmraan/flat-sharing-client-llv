"use client";

import { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { SidebarContext } from "./Sidebar";
import { useRouter } from "next/navigation";
import { deleteCookies } from "@/actions/acookies/deletecookie";

const Logout = () => {
  const contextValue = useContext(SidebarContext);
  const router = useRouter();
  const value = contextValue?.expanded;
  const handleLogout = async () => {
    await deleteCookies();
    router.refresh();
  };

  return (
    <div
      onClick={handleLogout}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600
      `}>
      <CiLogout size={20} />
      <span
        className={`overflow-hidden transition-all ${
          value ? "w-52 ml-3" : "w-0"
        }`}>
        Logout
      </span>
      {!value && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          Logout
        </div>
      )}
    </div>
  );
};

export default Logout;
