"use server";
import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";

type TProfile = {
  name?: string;
  address?: string;
  profession?: string;
  bio?: string;
  email?: string;
  photo?: string;
};

export const ProfileAction = async (payload: TProfile) => {
  return await (
    await fetch(ENV.backend_url + "/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      credentials: "include",
      body: JSON.stringify(payload),
    })
  ).json();
};

export const getMe = async () => {
  return await (
    await fetch(ENV.backend_url + "/user/profile", {
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
