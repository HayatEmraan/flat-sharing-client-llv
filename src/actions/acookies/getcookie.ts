"use server";

import { cookieValue } from "@/constant/cookie.value";
import { cookies } from "next/headers";

export const getCookie = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(cookieValue.accessToken);
  if (accessToken) {
    return `${accessToken?.name}=${accessToken?.value}`;
  }
  return "";
};
