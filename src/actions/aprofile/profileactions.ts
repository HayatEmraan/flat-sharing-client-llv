"use server";
import { ENV } from "@/config";
import { getCookie } from "../acookies/getcookie";
import { TResponse } from "@/interface";

type TProfile = {
  name?: string;
  address?: string;
  profession?: string;
  bio?: string;
  email?: string;
  photo?: string;
};

type TUserProfile = {
  id: string;
  userId: string;
  bio?: string | null;
  name?: string | null;
  profession?: string | null;
  address?: string | null;
  photo?: string | null;
  createdAt: Date;
  updatedAt: Date;
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

export const getMyProfile = async () => {
  const result = (await (
    await fetch(ENV.backend_url + "/user/get-my-profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: await getCookie(),
      },
      cache: "no-store",
      credentials: "include",
    })
  ).json()) as TResponse<TUserProfile>;

  const middle = result?.data;
  const name = middle?.name;
  const profession = middle?.profession;
  const address = middle?.address;
  const conditions = name && profession && address;

  if (conditions) {
    return true;
  } else {
    return false;
  }
};
