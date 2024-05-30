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

export const addBooking = async (id: string) => {
  return await (
    await fetch(ENV.backend_url + "/booking/create-booking", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      body: JSON.stringify({ flatId: id }),
    })
  ).json();
};

type TBookingStatus = {
  id: string;
  status: string;
};

export const changeBookingStatus = async (payload: TBookingStatus) => {
  return await (
    await fetch(ENV.backend_url + `/booking/change-status/${payload.id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      body: JSON.stringify({ status: payload.status }),
    })
  ).json();
};

export const BookingByAction = async () => {
  return await (
    await fetch(ENV.backend_url + "/booking/booking-sync-info", {
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
