"use server";

import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";

export const BookingAction = async () => {
  return await (
    await fetch(ENV.backend_url + "/booking/booking-info", {
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
