"use server";

import { ENV } from "@/config";
import { getCookie } from "./acookies/getcookie";
import { deleteCookies } from "./acookies/deletecookie";

export const UserChecker = async () => {
  const result = await (
    await fetch(ENV.backend_url + "/auth/checker", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      credentials: "include",
    })
  ).json();
  return result;
};
