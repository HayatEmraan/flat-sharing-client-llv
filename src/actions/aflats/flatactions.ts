"use server";

import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";

export const getFlats = async (query: string = "") => {
  return await (
    await fetch(ENV.backend_url + `/flats${query && query}`, {
      method: "GET",
      cache: "no-store",
    })
  ).json();
};

export const getFlatStats = async () => {
  return await (
    await fetch(ENV.backend_url + "/flats/property-stats", {
      method: "GET",
      cache: "no-store",
    })
  ).json();
};

export const getSingleFlat = async (flatId: string) => {
  return await (
    await fetch(ENV.backend_url + `/flats/${flatId}`, {
      method: "GET",
    })
  ).json();
};

export const deleteSingleFlat = async (flatId: string) => {
  return await (
    await fetch(ENV.backend_url + `/flats/${flatId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
    })
  ).json();
};
