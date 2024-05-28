"use server";

import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";

type TChangeUser = {
  id: string;
  isActive?: string;
  role?: string;
};

export const UserAction = async () => {
  return await (
    await fetch(ENV.backend_url + "/user/get-users", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
    })
  ).json();
};

export const ChangeUserPermission = async (payload: TChangeUser) => {
  return await (
    await fetch(ENV.backend_url + "/user/change-role", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    })
  ).json();
};
