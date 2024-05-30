"use server"

import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";

export const MyProperties = async () => {
  return await (
    await fetch(ENV.backend_url + "/flats/get-my-shared-flat", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      credentials: "include",
    })
  ).json();
};
