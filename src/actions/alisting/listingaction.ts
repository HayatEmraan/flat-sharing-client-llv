"use server";

import { ENV } from "@/config";
import { TListing } from "@/interface";
import { getCookie } from "../acookies/getcookie";

export const ListingAction = async (payload: TListing) => {
  const result = await (
    await fetch(ENV.backend_url + "/flats", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      body: JSON.stringify(payload),
    })
  ).json();

  return result;
};
